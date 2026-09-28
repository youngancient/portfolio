import styled from "styled-components";
import { Lede, Section, SectionTitle } from "../../styles/shared";
import { bp } from "../../styles/breakpoints";

const habits = [
  {
    habit: "A person approves before anything goes out.",
    proof: "Manager approval in Flow and Forge. Hound can pause for you to check its reading of a request before it searches.",
  },
  {
    habit: "Every model call is costed, and budgets are reserved before spending.",
    proof: "Flow logs spend per pipeline stage. Hound reserves budget before each paid call, so a search can't overspend.",
  },
  {
    habit: "A failed run picks up where it stopped.",
    proof: "Hound and Flow both resume from the failed step instead of starting over.",
  },
  {
    habit: "Outputs are grounded in sources, not invented.",
    proof: "Flow drops source passages that fail a relevance threshold. Hound shows the sources behind every lead.",
  },
  {
    habit: "Failures reach the team straight away.",
    proof: "Hound, Flow and Forge post failures to a Discord channel.",
  },
];

export const Production = () => {
  return (
    <Section aria-labelledby="prod-title">
      <div className="inner">
        <SectionTitle id="prod-title">Built to run in production</SectionTitle>
        <Lede>
          A demo that works once is easy. These are the habits that keep an AI system safe to leave
          running, and they show up in everything I ship.
        </Lede>
        <List>
          {habits.map((h) => (
            <li key={h.habit}>
              <p className="habit">{h.habit}</p>
              <p className="proof">{h.proof}</p>
            </li>
          ))}
        </List>
      </div>
    </Section>
  );
};

const List = styled.ul`
  margin-top: clamp(1.75rem, 3vw, 2.5rem);
  border-top: var(--rule);
  li {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1.5rem;
    padding: 1.25rem 0;
    border-bottom: 2px solid var(--ink);
  }
  .habit {
    font-size: clamp(1.25rem, 2vw, 1.625rem);
    font-weight: 800;
    font-stretch: 85%;
    letter-spacing: -0.015em;
    line-height: 1.2;
  }
  .proof {
    color: var(--graphite);
    max-width: 55ch;
  }
  @media ${bp.md} {
    li {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
`;
