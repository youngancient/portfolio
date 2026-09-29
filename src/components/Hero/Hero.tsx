import { HeroStyles } from "../../styles/Hero/style";
import { Button, Display, Lede, Mark } from "../../styles/shared";
import { ScaleGraph } from "./ScaleGraph";

const credentials = [
  { strong: "3+ years", rest: "shipping software to production" },
  { strong: "First Class", rest: "BSc Mathematics, University of Lagos" },
  { strong: "70+ users", rest: "on Lattiss, my application tracker" },
];

export const Hero = () => {
  return (
    <HeroStyles id="top">
      <div className="inner">
        <div className="copy">
          <Display>
            I build software that lets businesses grow <Mark>without hiring</Mark> for every repetitive task.
          </Display>
          <Lede>
            Software engineer working across AI automation, blockchain and web products, from the
            first version to the one that scales.
          </Lede>
          <div className="ctas">
            <Button href="#work">See the work</Button>
            <Button href="#contact" $variant="outline">
              Start a project
            </Button>
          </div>
        </div>
        <ScaleGraph />
      </div>
      <ul className="credentials">
        {credentials.map((c) => (
          <li key={c.strong}>
            <strong>{c.strong}</strong> {c.rest}
          </li>
        ))}
      </ul>
    </HeroStyles>
  );
};
