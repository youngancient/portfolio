import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splitting from "splitting";
import { IO } from "./observe";
gsap.registerPlugin(ScrollTrigger);

export const splitAnimation = () => {
  const H = document.querySelectorAll("[data-animation='header']");
  const P = document.querySelectorAll("[data-animation='paragraph']");
  const paragraphsArray = Array.from(P);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paragraphsArray.forEach((item) => {
    const line = Splitting({
      target: item,
      by: "lines",
    });
  
    // @ts-expect-error: Headache wan kee me, but the issue is that forEach isnt a valid type for line
    line.forEach((splitResult) => {
      const wrappedLines = splitResult.words
        .map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (wordsArr:any) => `
                 <span class="word_wrap">
                       ${wordsArr.outerHTML}
                  </span>`
        )
        .join("");
      splitResult.el.innerHTML = wrappedLines;
    });
    
    gsap.set(item.querySelectorAll(".word"), {
        yPercent: 105,
        opacity: 0,
        rotateX: 50,
        transformStyle: "preserve-3d",
    });
    IO(item, { threshold: 0.8 }).then(() => {
        const elem = item.querySelectorAll(".word");
        gsap.to(elem, {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            stagger: elem.length > 100 ? 0.02 : 0.03,
            duration: elem.length > 100 ? 0.65 : 0.75,
            ease: "easeOut",
        });
    });
  });

  H.forEach((item) => {
    Splitting({
      target: item,
      by: "chars",
    });
    gsap.set(item.querySelectorAll(".char"), {
      opacity: 0,
      y: 100,
      rotateZ: "-120deg",
    });
    IO(item, { threshold: 1 }).then(() => {
      const elem = item.querySelectorAll(".char");
      gsap.to(elem, {
        opacity: 1,
        y: 0,
        rotateZ: "0deg" ,
        stagger: elem.length > 100 ? 0.01 : 0.02,
        duration: elem.length > 100 ? 0.5 : 0.6,
        ease: "circ.easeOut",
      });
    });
  });
};
