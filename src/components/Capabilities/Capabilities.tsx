import styled from "styled-components";
import { Section, SectionTitle } from "../../styles/shared";
import { bp } from "../../styles/breakpoints";
import { Domain, ProjectList } from "../Project/data";

const capabilities: { domain: Domain; title: string; body: string; tools: string }[] = [
  {
    domain: "ai",
    title: "AI & automation",
    body: "Agents and workflows that take repetitive work off a team: research, drafting, reporting, support. A person approves what matters, and every run is logged and costed.",
    tools: "Claude API and Agent SDK, MCP, n8n, Inngest, Supabase, pgvector",
  },
  {
    domain: "web3",
    title: "Blockchain",
    body: "Smart contracts, dApps and protocol tooling, from multichain airdrops to contributions to Rootstock's official CLI.",
    tools: "Solidity, Hardhat, ethers.js, Solana, Rootstock",
  },
  {
    domain: "web2",
    title: "Web products",
    body: "Full-stack apps and dashboards built to production standard: authentication, data isolation, and interfaces people use every day.",
    tools: "TypeScript, React, Next.js, Node, Express, Prisma, Postgres",
  },
];

interface Props {
  onFilter: (d: Domain) => void;
}

export const Capabilities = ({ onFilter }: Props) => {
  return (
    <Section aria-labelledby="build-title">
      <div className="inner">
        <SectionTitle id="build-title">What I build</SectionTitle>
        <Columns>
          {capabilities.map((c) => {
            const count = ProjectList.filter((p) => p.domains.includes(c.domain)).length;
            return (
              <li key={c.domain}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <p className="tools">{c.tools}</p>
                <a
                  href="#work"
                  onClick={() => onFilter(c.domain)}
                  className="see"
                >
                  See {count} projects
                </a>
              </li>
            );
          })}
        </Columns>
      </div>
    </Section>
  );
};

const Columns = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: var(--rule);
  border-bottom: var(--rule);
  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.75rem 1.75rem 2rem;
    & + li {
      border-left: var(--rule);
    }
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
  h3 {
    font-size: clamp(1.75rem, 2.6vw, 2.25rem);
    font-weight: 800;
    font-stretch: 80%;
    letter-spacing: -0.02em;
    line-height: 1;
  }
  p {
    max-width: 40ch;
  }
  .tools {
    color: var(--graphite);
    font-size: 0.9375rem;
  }
  .see {
    margin-top: auto;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.2em;
    &:hover {
      text-decoration-thickness: 4px;
    }
  }
  @media ${bp.md} {
    grid-template-columns: 1fr;
    li,
    li:first-child,
    li:last-child {
      padding: 1.75rem 0;
    }
    li + li {
      border-left: 0;
      border-top: var(--rule);
    }
  }
`;
