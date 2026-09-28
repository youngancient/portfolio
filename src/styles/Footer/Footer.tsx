import styled from "styled-components";
import { bp } from "../breakpoints";

export const FooterStyles = styled.footer`
  border-top: var(--rule);
  .inner {
    max-width: var(--max);
    margin: 0 auto;
    padding: 1.25rem var(--gutter);
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 0.9375rem;
  }
  .social {
    display: flex;
    gap: 1.5rem;
    font-weight: 700;
    a:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 0.2em;
    }
  }
  p {
    color: var(--graphite);
  }
  .top {
    margin-left: auto;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 0.2em;
    }
  }
  .qed {
    font-family: var(--math);
    font-size: 1.5rem;
    line-height: 1;
  }
  @media ${bp.sm} {
    .inner {
      flex-wrap: wrap;
      gap: 1rem 1.5rem;
    }
    .top {
      margin-left: 0;
    }
  }
`;
