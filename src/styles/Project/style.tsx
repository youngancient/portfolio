import styled from "styled-components";

export const ProjectsStyle = styled.div`
  margin-top: 8rem;
  .head {
    p {
      font-weight: 700;
      font-size: 1.5rem;
    }
    p,
    h1 {
      text-align: left;
    }
  }
  .project-list {
    margin-top: 3.13rem;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding: 1.5rem;
    .project-list {
      gap: 2.5rem;
    }
  }
  @media (min-width: 767px) {
    padding: 4.125rem;
    .head {
      padding-left: 5rem;
    }
    .project-list {
      gap: 4rem;
    }
  }
`;

export const ProjectStyle = styled.div`
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  transition: border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  &:hover {
    border-color: var(--accent-strong);
  }
  .first {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .second {
    width: 100%;
    img {
      width: 100%;
    }
  }
  h3 {
    color: var(--text);
    font-family: var(--minor-font);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem; /* 175% */
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    align-items: center;
    a{
      margin-left: 0.75rem;
      margin-top: 0.25rem;
    }
    svg{
      scale: 1.25;
    }
  }
  .one p,
  .one span {
    color: var(--text);
    leading-trim: both;
    text-edge: cap;
    font-family: var(--minor-font);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 350% */
  }
  .one p {
    margin-top: 0.75rem;
  }
  .one span {
    margin-top: 0.5rem;
    color: var(--text-muted);
  }
  a {
    display: flex;
    width: fit-content;
  }
  .btn {
    border-radius: 0.625rem;
    background: var(--surface);
    border: 1px solid var(--border);
    transition: background 0.3s ease, border-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: 0.625rem;
    p {
      color: var(--text);
      text-align: center;
      font-family: var(--minor-font);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.5rem; /* 350% */
    }
  }
  .btn:hover {
    background: var(--accent);
    border-color: var(--accent-strong);
  }
  .text-anime,
  .name,
  .second {
    overflow: hidden;
  }
  @media (max-width: 998px) {
    .btn {
      width: 10.375rem;
      height: 3.375rem;
    }
    padding: 2.81rem 2.89rem 1.75rem 3.19rem;
    .one p {
      margin-bottom: 0.25rem;
    }
    .one {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .first {
      flex-direction: column;
      gap: 1.5rem;
      a {
        width: 100%;
      }
    }
    .btn {
      width: 100%;
      height: 3rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0.69rem 0.94rem 0.94rem 0.94rem;
    .second img {
      height: 16.25rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    .one p,
    .one span {
      font-size: 1rem;
      line-height: 1.125rem;
    }
    .one span {
      margin-top: 0.5rem;
    }
    .btn {
      width: 100%;
      height: 3rem;
    }
    .btn p {
      font-size: 0.8125rem;
    }
    .first {
      flex-direction: column;
      gap: 1.5rem;
      a {
        width: 100%;
      }
    }
  }

  @media (min-width: 998px) {
    padding: 2.81rem 2.89rem 1.75rem 3.19rem;
    .btn {
      width: 12.375rem;
      height: 4rem;
    }
  }
`;
