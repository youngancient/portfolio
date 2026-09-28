import styled from "styled-components";
import { bp } from "../breakpoints";

export const AboutStyles = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;

  .portrait {
    position: sticky;
    top: 96px;
    img {
      width: 100%;
      aspect-ratio: 4 / 5;
      border: var(--rule);
      filter: grayscale(1) contrast(1.08);
    }
    figcaption {
      margin-top: 0.6rem;
      font-size: 0.875rem;
      color: var(--graphite);
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    > p {
      max-width: 62ch;
    }
    > p:first-of-type {
      font-size: clamp(1.25rem, 2vw, 1.5rem);
      line-height: 1.4;
      font-weight: 600;
    }
  }
  h3 {
    margin-top: 1.5rem;
    font-size: clamp(1.5rem, 2.4vw, 2rem);
    font-weight: 800;
    font-stretch: 82%;
    letter-spacing: -0.02em;
  }
  .steps {
    border-top: var(--rule);
    li {
      display: grid;
      grid-template-columns: 3rem 1fr;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 2px solid var(--ink);
    }
    .num {
      font-family: var(--math);
      font-style: italic;
      font-size: 1.75rem;
      line-height: 1;
    }
    strong {
      font-weight: 800;
    }
    p {
      color: var(--graphite);
      font-size: 1rem;
    }
  }
  .facts {
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 0.4rem 1rem;
    font-size: 0.9375rem;
    dt {
      color: var(--graphite);
    }
  }
  .cv {
    font-size: 1rem;
  }

  @media ${bp.md} {
    grid-template-columns: 1fr;
    .portrait {
      position: static;
      max-width: 420px;
    }
  }
`;

export const SkillcompStyle = styled.div`
  .make {
    font-size: clamp(1.75rem, 3.4vw, 3rem);
    font-weight: 800;
    font-stretch: 80%;
    letter-spacing: -0.025em;
    line-height: 1;
    margin-bottom: clamp(1.75rem, 3vw, 2.75rem);
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    padding: 0 var(--rule-w) var(--rule-w) 0;
  }
`;

interface ISkillStyle {
  color: string;
}
export const SkillStyle = styled.button<ISkillStyle>`
  position: relative;
  width: clamp(80px, 9vw, 112px);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border: var(--rule);
  margin: 0 calc(var(--rule-w) * -1) calc(var(--rule-w) * -1) 0;
  transition: background 120ms ease;
  &:hover {
    background: var(--paper-dim);
  }
  svg {
    width: 52%;
    height: 52%;
  }
  .label {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.25rem;
    background: var(--ink);
    color: var(--paper);
    border-top: 4px solid ${(props) => props.color};
    font-size: 0.8125rem;
    font-weight: 700;
    text-align: center;
  }
`;
