import gsap from "gsap";
import { HeroStyles, NormalText } from "../../styles/Hero/style";
import { Arrowdown } from "../Icons/hero";
// import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const textCont = useRef(null);
  const emoji = useRef(null);

  useEffect(() => {
    const textcontEl = textCont.current;

    const mainText = new SplitType(".h h1", {
      types: "lines",
    });
    gsap.fromTo(
      mainText.lines,
      { y: 150, rotateZ: "-90deg", opacity: 0 },
      {
        y: 0,
        autoAlpha: 1,
        opacity: 1,
        rotateZ: 0,
        scrollTrigger: {
          trigger: textcontEl,
          start: "top center",
        },
        stagger: 0.1,
        duration: 0.6,
        ease: "easeOut",
      }
    );
    //   gsap.set(mainText.lines, {
    //     opacity: 0,
    //     yPercent: 100,
    //     transformStyle: "preserve-3d",
    // });
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
    gsap.from(emoji.current, {
      x: 300,
      ease: "back",
      // delay: 1,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
    });
    gsap.from(".arr", {
      y: 40,
      duration: 1.5,
      ease: "power2",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <HeroStyles className="container">
      <div className="desktop-img" ref={textCont}>
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
            <h1>
              I tell stories
            </h1>
            <h1>
              with code
            </h1>
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
