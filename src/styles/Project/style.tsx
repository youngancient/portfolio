import styled from "styled-components";
import { bp } from "../breakpoints";

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  button {
    min-height: 44px;
    padding: 0 1rem;
    border: var(--rule);
    font-weight: 700;
    font-stretch: 90%;
    transition: background 120ms ease;
    &:hover {
      background: var(--paper-dim);
    }
    &[aria-pressed="true"] {
      background: var(--ink);
      color: var(--paper);
    }
    .count {
      font-weight: 400;
      margin-left: 0.25em;
      font-variant-numeric: tabular-nums;
    }
  }
`;

const cols = "minmax(10rem, 1.1fr) minmax(0, 2.6fr) minmax(7rem, 0.8fr) 6.5rem 1.5rem";

export const Ledger = styled.ul`
  border-top: var(--rule);
  .row {
    border-bottom: 2px solid var(--ink);
  }
  .row:last-child {
    border-bottom: var(--rule);
  }
  h3 {
    font: inherit;
  }
  h3 button {
    width: 100%;
    display: grid;
    grid-template-columns: ${cols};
    gap: 1.5rem;
    align-items: baseline;
    padding: 1.1rem 0.75rem;
    text-align: left;
    transition: background 120ms ease;
    &:hover {
      background: var(--paper-dim);
    }
  }
  .open h3 button {
    background: var(--ink);
    color: var(--paper);
    .kind,
    .domains,
    .year {
      color: #c9cac2;
    }
    mark {
      color: var(--ink);
    }
  }
  .name {
    font-weight: 800;
    font-stretch: 82%;
    font-size: 1.375rem;
    letter-spacing: -0.015em;
    line-height: 1.1;
  }
  .kind {
    display: block;
    font-weight: 400;
    font-stretch: 100%;
    font-size: 0.875rem;
    letter-spacing: 0;
    color: var(--graphite);
    margin-top: 0.2rem;
  }
  .result {
    font-size: 1.0625rem;
    line-height: 1.45;
    max-width: 68ch;
  }
  .domains,
  .year {
    font-size: 0.9375rem;
    color: var(--graphite);
  }
  .year {
    font-variant-numeric: tabular-nums;
  }
  .toggle {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    justify-self: end;
  }

  .panel {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: clamp(1.5rem, 3vw, 2.5rem);
    padding: 1.5rem 0.75rem 2rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .problem {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }
  dl {
    display: grid;
    grid-template-columns: 4.5rem 1fr;
    gap: 0.4rem 1rem;
    font-size: 0.9375rem;
  }
  dt {
    color: var(--graphite);
  }
  .notes {
    display: grid;
    gap: 0.6rem;
    font-size: 0.9375rem;
    li {
      padding-left: 1.1rem;
      position: relative;
      max-width: 60ch;
    }
    li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.6em;
      width: 0.45rem;
      height: 0.45rem;
      background: var(--ink);
    }
  }
  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: auto;
  }

  @media ${bp.md} {
    h3 button {
      grid-template-columns: 1fr auto;
      gap: 0.35rem 1rem;
      padding: 1rem 0.25rem;
    }
    .name {
      grid-column: 1;
    }
    .toggle {
      grid-column: 2;
      grid-row: 1;
    }
    .result {
      grid-column: 1 / -1;
      font-size: 1rem;
    }
    .domains,
    .year {
      font-size: 0.875rem;
    }
    .year {
      grid-column: 2;
      justify-self: end;
      white-space: nowrap;
    }
    .panel {
      grid-template-columns: 1fr;
      padding: 1.25rem 0.25rem 1.75rem;
    }
  }
`;

export const FrameStyle = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border: var(--rule);
  background: var(--ink);
  overflow: hidden;
  img,
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  img {
    object-position: top center;
  }
  .loading {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: var(--paper);
    font-weight: 700;
    pointer-events: none;
  }
  iframe {
    position: relative;
  }
  .fallback {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-start;
    padding: 1.25rem;
    background-color: var(--paper);
    background-image: linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 20px 20px;
    span {
      font-weight: 800;
      font-stretch: 75%;
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      line-height: 0.9;
      letter-spacing: -0.035em;
      color: var(--ink);
    }
  }
  .play {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0 1.1rem 0 0;
    min-height: 56px;
    background: var(--ink);
    color: var(--paper);
    border: 3px solid var(--paper);
    font-weight: 700;
    transition: transform 120ms ease, box-shadow 120ms ease;
    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 3px 3px 0 var(--paper);
    }
    &:focus-visible {
      outline-color: var(--highlighter);
    }
  }
  .triangle {
    width: 50px;
    align-self: stretch;
    display: grid;
    place-items: center;
    background: var(--highlighter);
    &::after {
      content: "";
      border-left: 14px solid var(--ink);
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
      margin-left: 4px;
    }
  }
  .note {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 0.875rem;
    color: var(--graphite);
  }
`;

export const OpenSource = styled.section`
  margin-top: clamp(2.5rem, 5vw, 4rem);
  h3 {
    font-size: clamp(1.5rem, 2.4vw, 2rem);
    font-weight: 800;
    font-stretch: 82%;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
  }
  ul {
    border-top: var(--rule);
  }
  li {
    border-bottom: 2px solid var(--ink);
  }
  a {
    display: grid;
    grid-template-columns: minmax(14rem, 1.1fr) minmax(0, 2.6fr) minmax(10rem, 1fr);
    gap: 1.5rem;
    align-items: baseline;
    padding: 1rem 0.75rem;
    transition: background 120ms ease;
    &:hover {
      background: var(--paper-dim);
    }
  }
  .repo {
    font-weight: 700;
  }
  .pr,
  .size {
    color: var(--graphite);
    font-weight: 400;
    font-size: 0.9375rem;
  }
  .size {
    font-variant-numeric: tabular-nums;
  }
  @media ${bp.md} {
    a {
      grid-template-columns: 1fr;
      gap: 0.35rem;
      padding: 1rem 0.25rem;
    }
  }
`;
