import styled from "styled-components";
import { bp } from "../breakpoints";

export const HeroStyles = styled.section`
  > .inner {
    max-width: var(--max);
    margin: 0 auto;
    padding: clamp(2.5rem, 6vw, 5rem) var(--gutter) clamp(2.5rem, 5vw, 4rem);
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    gap: clamp(2rem, 4vw, 4rem);
    align-items: end;
  }
  .copy {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }
  .ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .credentials {
    border-top: var(--rule);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    li {
      padding: 1.1rem var(--gutter);
      font-size: 1.0625rem;
      color: var(--graphite);
      & + li {
        border-left: var(--rule);
      }
    }
    strong {
      color: var(--ink);
      font-weight: 800;
    }
  }
  @media ${bp.md} {
    > .inner {
      grid-template-columns: 1fr;
    }
    .credentials {
      grid-template-columns: 1fr;
      li + li {
        border-left: 0;
        border-top: var(--rule);
      }
    }
  }
`;

export const GraphStyle = styled.figure`
  .plot {
    border: var(--rule);
    background-color: var(--paper);
    background-image: linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 20px 20px;
    background-position: -1px -1px;
    touch-action: pan-y;
  }
  svg {
    width: 100%;
    height: auto;
    cursor: ew-resize;
    user-select: none;
  }
  .axis {
    fill: none;
    stroke: var(--ink);
    stroke-width: 2.5;
  }
  .tick {
    stroke: var(--ink);
    stroke-width: 2;
  }
  .tick-label {
    font-size: 12px;
    fill: var(--graphite);
    font-variant-numeric: tabular-nums;
  }
  .axis-title {
    font-size: 13px;
    font-weight: 600;
    fill: var(--ink);
  }
  .var,
  .eq {
    font-family: var(--math);
    font-style: italic;
    font-weight: 400;
  }
  .var {
    font-size: 16px;
  }
  .eq {
    font-size: 15px;
    fill: var(--ink);
  }
  .line {
    fill: none;
    stroke-linecap: butt;
  }
  .manual {
    stroke: var(--ink);
    stroke-width: 3.5;
  }
  .auto {
    stroke: var(--graphite);
    stroke-width: 3.5;
  }
  .marker {
    stroke: var(--ink);
    stroke-width: 1;
    stroke-dasharray: 3 4;
  }
  .gap {
    stroke: var(--highlighter);
    stroke-width: 12;
  }
  .dot {
    fill: var(--paper);
    stroke: var(--ink);
    stroke-width: 2.5;
  }

  @media ${bp.sm} {
    .tick-label {
      font-size: 17px;
    }
    .axis-title {
      font-size: 18px;
    }
    .var {
      font-size: 21px;
    }
    .eq {
      font-size: 20px;
    }
  }

  .controls {
    margin-top: 1rem;
    display: grid;
    gap: 0.5rem;
    label {
      font-size: 0.9375rem;
      color: var(--graphite);
      strong {
        color: var(--ink);
        font-variant-numeric: tabular-nums;
      }
    }
  }
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 28px;
    background: transparent;
    cursor: ew-resize;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    height: 3px;
    background: var(--ink);
  }
  input[type="range"]::-moz-range-track {
    height: 3px;
    background: var(--ink);
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    margin-top: -9.5px;
    background: var(--ink);
    border: 0;
    border-radius: 0;
  }
  input[type="range"]::-moz-range-thumb {
    width: 22px;
    height: 22px;
    background: var(--ink);
    border: 0;
    border-radius: 0;
  }

  .readout {
    margin-top: 0.75rem;
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    font-weight: 700;
    line-height: 1.3;
    font-variant-numeric: tabular-nums;
  }
  .caption {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--graphite);
    max-width: 58ch;
  }
`;
