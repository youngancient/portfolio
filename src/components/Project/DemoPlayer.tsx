import { useEffect, useState } from "react";
import { FrameStyle } from "../../styles/Project/style";
import { IProject } from "./data";

const embedUrl = (p: NonNullable<IProject["demo"]>) =>
  p.provider === "loom"
    ? `https://www.loom.com/embed/${p.id}?autoplay=1&hide_owner=true&hide_share=true&hide_title=true`
    : `https://drive.google.com/file/d/${p.id}/preview`;

/**
 * Poster first, embed on click. Nothing third-party loads until the visitor
 * asks for it. Unmounting (collapsing the row) stops playback.
 */
export const DemoPlayer = ({ project }: { project: IProject }) => {
  const { demo, img, name, status } = project;
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setPlaying(false), setLoaded(false));
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [playing]);

  if (demo && playing) {
    return (
      <FrameStyle>
        {!loaded && (
          <p className="loading" role="status">
            Loading demo…
          </p>
        )}
        <iframe
          onLoad={() => setLoaded(true)}
          src={embedUrl(demo)}
          title={`${name} demo video`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </FrameStyle>
    );
  }

  const poster = demo?.poster ?? img;

  return (
    <FrameStyle>
      {poster ? (
        <img src={poster} alt={demo ? "" : `${name} screenshot`} loading="lazy" />
      ) : (
        <div className="fallback" aria-hidden="true">
          <span>{name}</span>
        </div>
      )}
      {demo ? (
        <button type="button" className="play" onClick={() => setPlaying(true)}>
          <span className="triangle" aria-hidden="true" />
          <span>
            Play demo{demo.length ? `, ${demo.length}` : ""}
          </span>
        </button>
      ) : (
        !poster && (
          <p className="note">
            {status === "in-progress" ? "Demo video coming soon" : "Demo video to be added"}
          </p>
        )
      )}
    </FrameStyle>
  );
};
