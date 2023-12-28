import styled from "styled-components";

export const HeroStyles = styled.div`
  width: 100vw;
  .desktop-img,
  .mobile-img {
    img {
      width: 100%;
    }
  }
  .first-curve,
  .second-curve {
    position: absolute;
    left: 0;
    top: 30%;
    // margin-top: -2rem;
  }

  .mini {
    scale: 0.8;
  }
  .words{
    display: flex,
  flex-direction: row,
  overflow: hidden
  }
  h1, .words {
    color: rgba(255, 255, 255, 0);
    text-align: center;
    font-family: var(--head-font);
    font-size: 8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 8.375rem; /* 104.688% */
    text-transform: capitalize;
    z-index: 5;
    margin: 0 auto;
  }
  h1,
  p {
    color: #fff;
  }
  .direct {
    display: flex;
    flex-direction: column;
    gap: 1.12rem;
    align-items: center;
    justify-content: center;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    p {
      z-index: 5;
    }
  }
  .hero-text {
    position: relative;
  }
  .vshape {
    position: absolute;
    bottom: 0;
    margin-left: -0.45rem;
  }
  .arr{
    cursor: pointer;
    z-index: 5;
  }
  
  .circle{
    position: absolute;
    left: 0;
    top: 0;
  }
  @media (min-width: 600px) {
    .mobile-img {
      display: none;
    }
    .down {
      margin-top: 15rem;
    }
    h1 {
      width: 70%;
      position: relative;
    }
    .emoji {
      position: absolute;
      top: 2rem;
      right: 0;
      img {
        scale: 0.75;
      }
    }
    .direct {
      margin-top: 4rem;
    }
  }
  @media (max-width: 998px) {
    h1 {
      font-size: 5rem;
      line-height: 5.21875rem;
    }
    .emoji img {
      transform: translateX(15%);
    }
  }
  @media (max-width: 600px) {
    .desktop-img {
      display: none;
    }
    h1 {
      font-size: 3.375rem;
      font-style: normal;
      font-weight: 500;
      line-height: 4.21875rem;
    }
    .second-curve {
      margin-top: -1.5rem;
      top: auto;
    }
    .first-curve {
      margin-top: 8.5rem;
      top: auto;
    }
    .down {
      margin-top: 5rem;
    }
    .emoji {
      display: flex;
      margin-top: 2rem;
      justify-content: right;
      img {
        scale: 0.75;
        transform: translateX(35%);
      }
    }
    .direct {
      margin-top: -2rem;
    }
    .vshape {
      bottom: -100%;
    }
  }
  @media (min-width: 600px) and (max-width: 728px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (min-width: 998px) {
    .down {
      margin-top: 25rem;
    }
    .direct {
      margin-top: 4rem;
    }
  }
`;

export const HeadText = styled.h1`
  text-align: center;
  font-family: var(--head-font);
  font-style: normal;
  font-weight: 500;
  line-height: 8.375rem; /* 104.688% */
  text-transform: capitalize;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.78) 0%,
    rgba(255, 255, 255, 0) 205.22%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 998px) {
    font-size: 6rem;
    line-height: 5.21875rem;
  }
  @media (max-width: 767px) {
    font-size: 5rem;
    line-height: 4.21875rem;
  }
  @media (max-width: 500px) {
    font-size: 3.375rem;
    line-height: 3.21875rem;
  }
  @media (min-width: 998px) {
    font-size: 8rem;
  }
`;

export const NormalText = styled.p`
  color: #fff;
  text-align: center;
  font-family: var(--minor-font);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.5rem; /* 280% */
  text-transform: capitalize;
  @media (max-width: 500px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`;
