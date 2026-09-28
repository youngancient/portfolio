import styled, { css } from "styled-components";

/* A full-width band with a heavy rule on top; content sits on the page grid. */
export const Section = styled.section`
  border-top: var(--rule);
  > .inner {
    max-width: var(--max);
    margin: 0 auto;
    padding: clamp(3rem, 7vw, 6rem) var(--gutter);
  }
`;

const displayType = css`
  font-family: var(--display);
  font-weight: 800;
  font-stretch: 84%;
  font-variation-settings: "opsz" 96;
  letter-spacing: -0.022em;
  line-height: 0.92;
  text-wrap: balance;
`;

export const Display = styled.h1`
  ${displayType}
  font-size: clamp(2.6rem, 6.4vw, 6.75rem);
`;

export const SectionTitle = styled.h2`
  ${displayType}
  font-size: clamp(2.5rem, 5.5vw, 5rem);
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
`;

export const Lede = styled.p`
  max-width: 60ch;
  font-size: clamp(1.125rem, 1.6vw, 1.375rem);
  line-height: 1.45;
  color: var(--graphite);
`;

/* Highlighter-pen mark. Reserved for results only. */
export const Highlight = styled.mark`
  color: inherit;
  background: linear-gradient(
    transparent 14%,
    var(--highlighter) 14%,
    var(--highlighter) 90%,
    transparent 90%
  );
  padding: 0 0.12em;
  margin: 0 -0.04em;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
`;

export const MathText = styled.span`
  font-family: var(--math);
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0;
`;

export const Button = styled.a<{ $variant?: "solid" | "outline" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  min-height: 52px;
  padding: 0 1.4rem;
  border: var(--rule);
  font-weight: 700;
  font-size: 1.0625rem;
  font-stretch: 90%;
  transition: transform 120ms ease, box-shadow 120ms ease;
  ${({ $variant = "solid" }) =>
    $variant === "solid"
      ? css`
          background: var(--ink);
          color: var(--paper);
        `
      : css`
          background: transparent;
          color: var(--ink);
        `}
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 3px 3px 0 var(--ink);
  }
  &:active {
    transform: none;
    box-shadow: none;
  }
`;

/* Plain underlined text link with a heavy underline on hover. */
export const TextLink = styled.a`
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
  &:hover {
    text-decoration-thickness: 4px;
  }
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;
