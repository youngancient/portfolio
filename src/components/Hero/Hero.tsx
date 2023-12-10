import { HeroStyles, NormalText } from "../../styles/Hero/style";
import { Arrowdown } from "../Icons/hero";

export const Hero = () => {
  return (
    <HeroStyles>
      <div className="desktop-img">
        <img
          src="/assets/first.svg"
          alt="desktop curve"
          className="first-curve mini"
        />
        <img
          src="/assets/second.svg"
          alt="desktop curve"
          className="second-curve"
        />
      </div>
      <div className="mobile-img">
        <img
          src="/assets/mobile-curve.svg"
          alt="curve"
          className="first-curve"
        />
        <img
          src="/assets/mobile-curve.svg"
          alt="curve"
          className="second-curve"
        />
      </div>
      <div className="hero-text">
        <div className="down">
          <div className="h">
            <h1>I tell stories with code</h1>
            <div className="emoji">
              <img src="/assets/emoji.svg" className="emoji" alt="emoji" />
            </div>
          </div>
          <div className="direct">
            <img src="/assets/subtract.svg" alt="" className="vshape" />
            <Arrowdown />
            <NormalText>See How I Tell Them Below</NormalText>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};
