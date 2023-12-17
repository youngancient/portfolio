import styled from "styled-components";

export const ContactStyle = styled.div`
  overflow: hidden;
  position: relative;
  background: url(/assets/cta.svg) no-repeat center center;
  background-size: cover;
  .slant-div {
    height: 42.3565rem;
  }
  p {
    color: #fff;
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
    background: #a4a4a4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    // height: 50%;
  }
  .case {
    border-radius: 2.5rem;
    background: #1f2124;
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
      text-decoration-color: #000;
      p {
        color: #000;
      }
    }
  }
  .two button {
    border-radius: 0.625rem;
    background: #1f2124;
    color: #fff;
    text-align: center;
    font-family: var(--minor-font);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
    height: 2.8125rem;
    padding: 0rem 0.625rem 0rem 0.625rem;
  }
  h4 {
    color: #000;
    text-align: center;
    font-family: var(--head-font);
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.5rem; /* 155.556% */
    text-transform: capitalize;
    margin-top: 1rem;
  }
  .one p {
    text-align: center;
    margin-top: 0.5rem;
    color: #000;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: var(--minor-font);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: 0.09375rem;
    text-transform: capitalize;
  }
  .two {
    margin-top: 2rem;
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
    .two button {
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
  font-style: normal;
  font-weight: 500;
  line-height: 3.9375rem; /* 131.25% */
  display: flex;
  align-items: center;
  gap: 1.06rem;
  padding-right: 1.06rem;
  text-transform: capitalize;
  background: var(
    --lol,
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.78) 0%,
      rgba(255, 255, 255, 0) 135.07%
    )
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;
