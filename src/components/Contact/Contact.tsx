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
  const callPhone = () => {
    const phoneNo: string = "+2348149756765";
    window.location.href = "tel:" + phoneNo;
  };
  const sendMail = () => {
    const emailAddress: string = "judetochyokoye@gmail.com";
    window.location.href = "mailto:" + emailAddress;
  };
  return (
    <ContactStyle>
      <div className="slant-div">
        <div className="marq-one">
          <Marquee pauseOnHover={true} direction="left">
            <MarqueeText text="Ready to Ignite Your Project" />
            <MarqueeText text="Let's Make It Happen" />
            <MarqueeText text="Crafting Digital Excellence" />
            <MarqueeText text="Unleash Possibilities" />
          </Marquee>
        </div>
        <div className="marq-two">
          <Marquee pauseOnHover={true} direction="right">
            <MarqueeText text="Turning Ideas into Reality" />
            <MarqueeText text="Empower Your Ideas" />
            <MarqueeText text="From Concept to Code" />
            <MarqueeText text="Building Tomorrow's Web" />
          </Marquee>
        </div>
      </div>
      <div className="interest">
        <div className="inner">
          <div className="one">
            <div className="case">
              <img src="/assets/briefcase.svg" alt="briefcase icon" />
            </div>
            <h4 data-animation='header'>Project Dreams? Let's Make Them Real</h4>
            <p data-animation='paragraph'>
              Dreaming of a project? I turn dreams into reality. I bring
              aspirations to life.
            </p>
          </div>
          <div className="two">
            <button type="button" onClick={callPhone} className="phone">
              Contact Me
            </button>
            <button type="button" className="link" onClick={sendMail}>
              <NormalText>Send A Mail</NormalText>
              <DarkOpenIcon />
            </button>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
};
