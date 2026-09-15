import styled from "styled-components";

export const ContactStyle = styled.div`
  overflow: hidden;
  position: relative;
  background: radial-gradient(
      120% 140% at 50% 0%,
      rgba(46, 111, 82, 0.35) 0%,
      rgba(46, 111, 82, 0) 60%
    ),
    var(--bg);
  .slant-div {
    height: 42.3565rem;
  }
  p {
    color: var(--text);
  }
  .interest {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }
  .interest .inner {
    border-radius: 1.25rem;
    background: #ede6d6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    // height: 50%;
  }
  .case {
    border-radius: 2.5rem;
    background: var(--accent);
    width: fit-content;
  }
  .one,
  .two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .two {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    .link {
      display: flex;
      align-items: center;
      text-decoration-line: underline;
      text-decoration-color: var(--accent);
      p {
        color: #1a1a17;
      }
    }
  }
  .two .phone {
    border-radius: 0.625rem;
    background: var(--accent);
    color: var(--text);
    text-align: center;
    font-family: var(--minor-font);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    height: 2.8125rem;
    padding: 0rem 0.625rem 0rem 0.625rem;
    transition: background 0.3s ease;
  }
  .two .phone:hover {
    background: var(--accent-strong);
  }
  h4 {
    color: #1a1a17;
    text-align: center;
    font-family: var(--head-font);
    font-optical-sizing: auto;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.5rem; /* 155.556% */
    margin-top: 1rem;
  }
  .one p {
    text-align: center;
    margin-top: 0.5rem;
    color: #1a1a17;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: var(--minor-font);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: 0.09375rem;
  }
  .two {
    margin-top: 2rem;
  }
  .link{
    background: transparent;
  }
  @media (max-width: 998px) {
    margin-top: 4rem;
    .marq-two {
      margin-top: 55%;
      transform: rotate(-4.492deg);
    }
    .marq-one {
      margin-top: 10%;
      transform: rotate(-4.492deg);
    }
    .inner {
      padding: 3rem 1.5rem 3rem 1.5rem;
    }
  }
  @media (max-width: 600px) {
    margin-top: 0rem;
    .marq-two {
      margin-top: 110%;
      transform: rotate(-12deg);
    }
    .marq-one {
      margin-top: 30%;
      transform: rotate(-12deg);
    }
    .interest .inner {
      width: 80%;
      //   height: 65%;
      padding: 2rem 1rem 2rem 1rem;
    }
    .two {
      gap: 1.5rem;
    }
    h4 {
      font-size: 1.25rem;
      line-height: 1.6875rem;
    }
    .one p {
      font-size: 0.875rem;
    }
    .two {
      margin-top: 3rem;
    }
  }
  @media (min-width: 998px) {
    margin-top: 8rem;
    .marq-two {
      margin-left: 30%;
      width: 100%;
      transform: rotate(-12deg);
      margin-top: 29%;
    }
    .marq-one {
      transform: rotate(-12deg);
      width: 100%;
    }
    .two .phone {
      font-size: 1.25rem;
    }
    .inner {
      padding: 4rem 2rem 4rem 2rem;
    }
    .one p {
      width: 60%;
    }
  }
`;

export const MarqueeTextStyle = styled.h3`
  text-align: center;
  font-family: var(--head-font);
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 440;
  line-height: 3.9375rem; /* 131.25% */
  display: flex;
  align-items: center;
  gap: 1.06rem;
  padding-right: 1.06rem;
  text-transform: capitalize;
  color: var(--text);

  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;
