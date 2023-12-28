import gsap from "gsap";
import { HeroStyles, NormalText } from "../../styles/Hero/style";
import { Arrowdown } from "../Icons/hero";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  const emoji = useRef(null);
  useGSAP(
    () => {
      gsap.from("h1", {
        y: 100,
        ease: "back",
        delay: 1,
        duration: 1.8,
        stagger: {
          each: 0.05,
          amount: 0.4,
        },
      });
      gsap.from(".strokes", {
        y: 500,
        ease: "back",
        delay: 1,
        duration: 1.8,
        stagger: {
          each: 0.05,
          amount: 0.4,
        },
      });
      gsap.from(".arr", {
        y: 40,
        duration: 1.5,
        ease: "power2",
        repeat: -1,
        yoyo: true,
      });
      gsap.from(emoji.current, {
        scrollTrigger: {
          trigger: emoji.current,
          toggleActions: "restart none none none",
        },
        x: 300,
        duration: 2,
        rotateZ: 360,
        ease: "back",
      });
    },
    { scope: container }
  );
  return (
    <HeroStyles ref={container}>
      <div className="desktop-img">
        <img
          src="/assets/first.svg"
          alt="desktop curve"
          className="first-curve mini strokes"
        />
        <img
          src="/assets/second.svg"
          alt="desktop curve"
          className="second-curve strokes"
        />
      </div>
      <div className="mobile-img">
        <img
          src="/assets/mobile-curve.svg"
          alt="curve"
          className="first-curve strokes"
        />
        <img
          src="/assets/mobile-curve.svg"
          alt="curve"
          className="second-curve strokes"
        />
      </div>
      <div className="hero-text">
        <div className="down">
          <div className="h">
            {/* <div className="words">
              {"I tell stories"
                .split("")
                .map((i) =>
                  i == " " ? (
                    <Letter space={true} letter={i} />
                  ) : (
                    <Letter space={false} letter={i} />
                  )
                )}
            </div> */}
            <h1>I tell stories</h1>
            <h1>with code</h1>
            <div className="emoji" ref={emoji}>
              <img src="/assets/emoji.svg" className="emoji" alt="emoji" />
            </div>
          </div>
          <div className="direct">
            <img src="/assets/subtract.svg" alt="" className="vshape" />
            <a href="#tools" className="">
              <div className="arr">
                <Arrowdown />
              </div>
            </a>
            <NormalText>See How I Tell Them Below</NormalText>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

interface ILetter {
  space: boolean;
  letter: string;
}
export const Letter: React.FC<ILetter> = ({ space, letter }) => {
  return space == true ? (
    <div className="text">&nbsp;</div>
  ) : (
    <div className="text">{letter}</div>
  );
};
