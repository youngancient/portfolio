import styled from "styled-components";

export const FooterStyles = styled.footer`
  h4 {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: var(--head-font);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.125rem; /* 208.333% */
    letter-spacing: 0.09375rem;
    text-transform: capitalize;
  }
  .copyryt {
    p {
      text-align: left;
    }
  }
  .f-links {
    display: flex;
    gap: 1.5rem;
  }
  .other-links {
    display: flex;
    gap: 2.25rem;
    align-items: center;
  }
  .resume p {
    text-decoration: underline;
  }
  .resume {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 1rem;
    }
    .f-links {
      gap: 1rem;
      padding-left: 1.5rem;
      background: #151515;
      padding-top: 0.5rem;
    }
    .desktop-logo {
      display: none;
    }
    .footer-bar {
      display: flex;
      flex-direction: column-reverse;
    }
    .x {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: 0rem 1.5rem 0rem 0.5rem;
    }
    .copyryt {
      padding: 2rem 0rem 2rem 2rem;
    }
  }
  @media (min-width: 600px) {
    .mobile-logo {
      display: none;
    }
    .footer-bar {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 1.25rem;
        background: #151515;
    }
    .cont {
      margin-top: 2rem;
      padding: 0rem 4.125rem 0rem 4.125rem;
    }
    .copyryt p {
      text-align: center;
    }
  }
  @media (min-width: 998px) {
    margin-top: 4rem;
  }
`;
