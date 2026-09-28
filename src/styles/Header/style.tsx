import styled from "styled-components";
import { bp } from "../breakpoints";

export const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--paper);
  border-bottom: var(--rule);

  .bar {
    max-width: var(--max);
    margin: 0 auto;
    padding: 0 var(--gutter);
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 800;
    font-stretch: 80%;
    font-size: 1.375rem;
    letter-spacing: -0.02em;
  }
  .desktop {
    display: flex;
    align-items: stretch;
    height: 100%;
    a {
      display: flex;
      align-items: center;
      padding: 0 1.25rem;
      font-weight: 600;
      border-left: var(--rule);
      transition: background 120ms ease, color 120ms ease;
      &:hover {
        background: var(--ink);
        color: var(--paper);
      }
    }
    .resume {
      background: var(--ink);
      color: var(--paper);
      margin-right: calc(var(--gutter) * -1);
      padding: 0 var(--gutter) 0 1.5rem;
      &:hover {
        background: var(--highlighter);
        color: var(--ink);
      }
    }
  }
  .menu-btn {
    display: none;
    font-weight: 700;
    border: var(--rule);
    padding: 0.35rem 0.9rem;
  }
  @media ${bp.sm} {
    .desktop {
      display: none;
    }
    .menu-btn {
      display: block;
    }
  }
`;

export const MenuSheet = styled.div`
  position: fixed;
  inset: 64px 0 0 0;
  background: var(--ink);
  color: var(--paper);
  padding: 2rem var(--gutter);
  nav {
    display: flex;
    flex-direction: column;
  }
  a {
    font-weight: 800;
    font-stretch: 78%;
    font-size: clamp(3rem, 16vw, 5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    padding: 0.25rem 0;
    border-bottom: 3px solid var(--paper);
  }
  a:focus-visible {
    outline-color: var(--paper);
  }
`;
