import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Highlight, MathText } from "../../styles/shared";
import { GraphStyle } from "../../styles/Hero/style";

// Illustrative model: 12 minutes per task by hand, versus automated runs that
// need 2 hours of oversight a week plus 36 seconds of review per task.
const N_MAX = 5000;
const H_MAX = 1000;
const START_N = 1500;
const manual = (n: number) => 0.2 * n;
const automated = (n: number) => 2 + 0.01 * n;
const saved = (n: number) => Math.max(0, Math.round(manual(n) - automated(n)));

const W = 520;
const H = 380;
const PAD = { l: 66, r: 18, t: 18, b: 50 };
const plotW = W - PAD.l - PAD.r;
const plotH = H - PAD.t - PAD.b;
const x = (n: number) => PAD.l + (n / N_MAX) * plotW;
const y = (h: number) => PAD.t + plotH - (h / H_MAX) * plotH;

const fmt = new Intl.NumberFormat("en-GB");

export const ScaleGraph = () => {
  const [n, setN] = useState(START_N);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const mm = gsap.matchMedia();
    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        if (ctx.conditions?.reduced) return;
        setN(0);
        const lines = svg.querySelectorAll<SVGPathElement>(".draw");
        lines.forEach((l) => {
          const len = l.getTotalLength();
          gsap.set(l, { strokeDasharray: len, strokeDashoffset: len });
        });
        const state = { n: 0 };
        const tl = gsap.timeline({ delay: 0.25 });
        tl.to(lines, {
          strokeDashoffset: 0,
          duration: 1.1,
          ease: "power2.inOut",
          stagger: 0.15,
        }).to(
          state,
          {
            n: START_N,
            duration: 1.2,
            ease: "power3.out",
            onUpdate: () => {
              if (!dragging.current) setN(Math.round(state.n / 50) * 50);
            },
          },
          "-=0.3"
        );
      }
    );
    return () => mm.revert();
  }, []);

  const nFromPointer = (clientX: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const px = ((clientX - rect.left) / rect.width) * W;
    const raw = ((px - PAD.l) / plotW) * N_MAX;
    setN(Math.min(N_MAX, Math.max(0, Math.round(raw / 50) * 50)));
  };

  const cx = x(n);
  const hm = manual(n);
  const ha = automated(n);

  return (
    <GraphStyle aria-labelledby="graph-caption">
      <div className="plot">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`Graph of staff-hours against tasks per week. Manual work rises steeply, automated work stays nearly flat. At ${fmt.format(n)} tasks a week the gap is ${fmt.format(saved(n))} hours.`}
          onPointerDown={(e) => {
            dragging.current = true;
            (e.target as Element).setPointerCapture?.(e.pointerId);
            nFromPointer(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && nFromPointer(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >
          {/* axes */}
          <path
            d={`M${PAD.l} ${PAD.t} V${PAD.t + plotH} H${PAD.l + plotW}`}
            className="axis"
          />
          {[0, 1000, 2000, 3000, 4000, 5000].map((t) => (
            <g key={`x${t}`}>
              <line x1={x(t)} x2={x(t)} y1={PAD.t + plotH} y2={PAD.t + plotH + 6} className="tick" />
              <text x={x(t)} y={PAD.t + plotH + 22} textAnchor="middle" className="tick-label">
                {t === 0 ? "0" : `${t / 1000}k`}
              </text>
            </g>
          ))}
          {[250, 500, 750, 1000].map((t) => (
            <g key={`y${t}`}>
              <line x1={PAD.l - 6} x2={PAD.l} y1={y(t)} y2={y(t)} className="tick" />
              <text x={PAD.l - 10} y={y(t) + 4} textAnchor="end" className="tick-label">
                {t}
              </text>
            </g>
          ))}
          <text x={PAD.l + plotW} y={H - 6} textAnchor="end" className="axis-title">
            <tspan className="var">n</tspan> tasks per week
          </text>
          <text x={PAD.l + 12} y={PAD.t + 16} className="axis-title">
            <tspan className="var">h</tspan> staff-hours
          </text>

          {/* model lines */}
          <path d={`M${x(0)} ${y(manual(0))} L${x(N_MAX)} ${y(manual(N_MAX))}`} className="line manual draw" />
          <path d={`M${x(0)} ${y(automated(0))} L${x(N_MAX)} ${y(automated(N_MAX))}`} className="line auto draw" />
          <text x={x(3050)} y={y(manual(3050)) - 12} className="eq" transform={`rotate(-35.1 ${x(3050)} ${y(manual(3050)) - 12})`}>
            h = 0.2n, by hand
          </text>
          <text x={x(N_MAX)} y={y(automated(N_MAX)) - 12} textAnchor="end" className="eq">
            h = 2 + 0.01n, automated
          </text>

          {/* marker at n */}
          <line x1={cx} x2={cx} y1={PAD.t} y2={PAD.t + plotH} className="marker" />
          <line x1={cx} x2={cx} y1={y(ha)} y2={y(hm)} className="gap" />
          <circle cx={cx} cy={y(hm)} r={5} className="dot" />
          <circle cx={cx} cy={y(ha)} r={5} className="dot" />
        </svg>
      </div>

      <div className="controls">
        <label htmlFor="n-range">
          <MathText>n</MathText>, tasks per week: <strong>{fmt.format(n)}</strong>
        </label>
        <input
          id="n-range"
          type="range"
          min={0}
          max={N_MAX}
          step={50}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
        />
      </div>

      <p className="readout" aria-live="polite">
        At {fmt.format(n)} tasks a week, automation gives back{" "}
        <Highlight>{fmt.format(saved(n))} staff-hours</Highlight>.
      </p>
      <p className="caption" id="graph-caption">
        <MathText>Fig. 1.</MathText> Illustrative model. Drag the graph or the slider. By hand,
        each task takes 12 minutes; automated, a team spends 2 hours a week on oversight plus 36
        seconds reviewing each task.
      </p>
    </GraphStyle>
  );
};
