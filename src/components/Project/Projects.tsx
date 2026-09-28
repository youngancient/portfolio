import { useState } from "react";
import { Highlight, Section, SectionTitle, TextLink } from "../../styles/shared";
import { FilterBar, Ledger, OpenSource } from "../../styles/Project/style";
import { Contributions, Domain, IProject, ProjectList, domainLabels } from "./data";
import { DemoPlayer } from "./DemoPlayer";

export type Filter = Domain | "all";

const filters: Filter[] = ["all", "ai", "web3", "web2"];

const Result = ({ text, mark }: { text: string; mark?: string }) => {
  if (!mark || !text.includes(mark)) return <>{text}</>;
  const [before, after] = text.split(mark);
  return (
    <>
      {before}
      <Highlight>{mark}</Highlight>
      {after}
    </>
  );
};

const yearLabel = (p: IProject) => (p.status === "in-progress" ? "In progress" : p.year);

interface Props {
  filter: Filter;
  onFilter: (f: Filter) => void;
}

export const Projects = ({ filter, onFilter }: Props) => {
  const [open, setOpen] = useState<string | null>(null);
  const visible = ProjectList.filter((p) => filter === "all" || p.domains.includes(filter));

  return (
    <Section id="work" aria-labelledby="work-title">
      <div className="inner">
        <SectionTitle id="work-title">Work</SectionTitle>

        <FilterBar role="group" aria-label="Filter projects">
          {filters.map((f) => {
            const count =
              f === "all" ? ProjectList.length : ProjectList.filter((p) => p.domains.includes(f)).length;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => {
                  onFilter(f);
                  setOpen(null);
                }}
              >
                {f === "all" ? "All" : domainLabels[f]} <span className="count">{count}</span>
              </button>
            );
          })}
        </FilterBar>

        <Ledger>
          {visible.map((p) => {
            const isOpen = open === p.slug;
            const panelId = `panel-${p.slug}`;
            return (
              <li key={p.slug} className={isOpen ? "row open" : "row"}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : p.slug)}
                    >
                      <span className="name">
                        {p.name}
                        <span className="kind">{p.kind}</span>
                      </span>
                      <span className="result">
                        <Result text={p.result} mark={p.mark} />
                      </span>
                      <span className="domains">
                        {p.domains.map((d) => domainLabels[d]).join(", ")}
                      </span>
                      <span className="year">{yearLabel(p)}</span>
                      <span className="toggle" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="panel" id={panelId}>
                      <DemoPlayer project={p} />
                      <div className="details">
                        {p.problem && <p className="problem">{p.problem}</p>}
                        <dl>
                          <dt>Role</dt>
                          <dd>{p.role}</dd>
                          <dt>Stack</dt>
                          <dd>{p.stack.join(", ")}</dd>
                        </dl>
                        {p.notes && (
                          <ul className="notes">
                            {p.notes.map((n) => (
                              <li key={n}>{n}</li>
                            ))}
                          </ul>
                        )}
                        <div className="links">
                          {p.href && p.status === "live" && (
                            <TextLink href={p.href} target="_blank" rel="noopener noreferrer">
                              Visit site
                            </TextLink>
                          )}
                          {p.github && (
                            <TextLink href={p.github} target="_blank" rel="noopener noreferrer">
                              Source code
                            </TextLink>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
              </li>
            );
          })}
        </Ledger>

        {(filter === "all" || filter === "web3") && (
          <OpenSource aria-labelledby="oss-title">
            <h3 id="oss-title">Open source, Rootstock</h3>
            <ul>
              {Contributions.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    <span className="repo">
                      {c.repo} <span className="pr">#{c.pr}, merged</span>
                    </span>
                    <span className="summary">{c.summary}</span>
                    <span className="size">{c.size}</span>
                  </a>
                </li>
              ))}
            </ul>
          </OpenSource>
        )}
      </div>
    </Section>
  );
};
