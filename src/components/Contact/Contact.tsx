import Marquee from "react-fast-marquee";
import { ContactStyle, MarqueeTextStyle } from "../../styles/Contact/style";
import { Asterik, DarkOpenIcon } from "../Icons/Icons";
import { NormalText } from "../../styles/Hero/style";

interface IText {
  text: string;
}
export const MarqueeText: React.FC<IText> = ({ text }) => {
  return (
    <MarqueeTextStyle>
      <Asterik /> {text}
    </MarqueeTextStyle>
  );
};
export const Contact = () => {
  return (
    <ContactStyle>
      <div className="slant-div">
        <div className="marq-one">
          <Marquee pauseOnHover={true} direction="left">
            <MarqueeText text="Hello World" />
            <MarqueeText text="Hello World" />
            <MarqueeText text="Hello World" />
            <MarqueeText text="Hello World" />
            <MarqueeText text="Hello World" />
          </Marquee>
        </div>
        <div className="marq-two">
          <Marquee pauseOnHover={true} direction="right">
            <MarqueeText text="Hello World" />
            <MarqueeText text="Hello World" />
            <MarqueeText text="Hello World" />
            <MarqueeText text="Hello World" />
            <MarqueeText text="Hello World" />
          </Marquee>
        </div>
      </div>
      <div className="interest">
        <div className="inner">
        <div className="one">
          <div className="case">
            <img src="/assets/briefcase.svg" alt="briefcase icon" />
          </div>
          <h4>Interested in Touching Grass with me?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elementum magna nulla enim
            fringilla.{" "}
          </p>
        </div>
        <div className="two">
          <button type="button">Contact Me</button>
          <a href="#" className="link">
            <NormalText>Send A Mail</NormalText><DarkOpenIcon />
          </a>
        </div>
        </div>
      </div>
    </ContactStyle>
  );
};
