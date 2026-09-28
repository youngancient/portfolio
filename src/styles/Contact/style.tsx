import styled from "styled-components";

export const ContactStyle = styled.section`
  background: var(--ink);
  color: var(--paper);
  border-top: var(--rule);

  .inner {
    max-width: var(--max);
    margin: 0 auto;
    padding: clamp(4rem, 9vw, 8rem) var(--gutter);
  }
  h2 {
    font-weight: 800;
    font-stretch: 84%;
    font-variation-settings: "opsz" 96;
    font-size: clamp(2.6rem, 6.4vw, 6.75rem);
    letter-spacing: -0.022em;
    line-height: 0.92;
    max-width: 16ch;
    text-wrap: balance;
  }
  .lede {
    margin-top: 1.5rem;
    max-width: 52ch;
    font-size: clamp(1.125rem, 1.6vw, 1.375rem);
    color: #c9cac2;
  }
  .email {
    display: inline-block;
    margin-top: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    font-stretch: 80%;
    font-size: clamp(1.6rem, 5vw, 4.25rem);
    letter-spacing: -0.03em;
    line-height: 1.1;
    overflow-wrap: anywhere;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 0.15em;
    &:hover {
      color: var(--highlighter);
    }
  }
  .actions {
    margin-top: 1.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    button,
    a {
      display: inline-flex;
      align-items: center;
      min-height: 52px;
      padding: 0 1.4rem;
      border: 3px solid var(--paper);
      font-weight: 700;
      transition: background 120ms ease, color 120ms ease;
    }
    button {
      background: var(--paper);
      color: var(--ink);
      &:hover {
        background: var(--highlighter);
        border-color: var(--highlighter);
      }
    }
    a:hover {
      background: var(--paper);
      color: var(--ink);
    }
  }
  :focus-visible {
    outline-color: var(--highlighter);
  }
`;
