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
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
    color: #fff;
    font-family: var(--minor-font);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem; /* 175% */
    text-transform: capitalize;
  }
  .one p,
  .one span {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: var(--minor-font);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 350% */
    text-transform: capitalize;
  }
  .one p {
    margin-top: 0.75rem;
  }
  .one span {
    margin-top: 0.5rem;
    color: rgba(255, 255, 255, 0.7);
  }
  a {
    display: flex;
    width: fit-content;
  }
  .btn {
    border-radius: 0.625rem;
    background: #151515;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: 0.625rem;
    p {
      color: #fff;
      text-align: center;
      font-family: var(--minor-font);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.5rem; /* 350% */
      text-transform: capitalize;
    }
  }
  @media (max-width: 998px) {
    .btn {
      width: 10.375rem;
      height: 3.375rem;
    }
    padding: 2.81rem 2.89rem 1.75rem 3.19rem;
    .one p{
      margin-bottom: 0.25rem;
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
    .one span{
      margin-top: 0.5rem;
    }
    .btn {
      width: 7.5625rem;
      height: 3rem;
    }
    .btn p {
      font-size: 0.8125rem;
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
