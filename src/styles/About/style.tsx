import styled from "styled-components";

export const AboutStyles = styled.div`
  width: 100vw;
  .first {
    display: flex;
    position: relative;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.625rem;
    border: 1px solid var(--border);
    background: var(--surface);
    p {
      color: var(--text);
      font-feature-settings: "clig" off, "liga" off;
      font-family: var(--minor-font);
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 133.333% */
      letter-spacing: 0.09375rem;
    }
  }
  .line1,
  .line2 {
    position: absolute;
  }
  .line1 {
    left: 0rem;
  }
  .line2 {
    right: 0rem;
  }
  .second {
    margin-top: 3rem;
  }
  .picture img {
    filter: grayscale(100%) contrast(115%);
    transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
  .picture:hover img {
    filter: grayscale(0%) contrast(100%);
    transform: scale(1.03);
  }
  @media (max-width: 600px) {
    margin-top: 12rem;
    padding: 1rem;
    .line1,
    .line2 {
      top: -8rem;
    }
    .picture {
      width: 100%;
      max-height: 400px;
      overflow: hidden;
      border-radius: 0rem 0rem 0.625rem 0.625rem;
    }
    .picture img {
      width: 100%;
      height: 100%;
      max-height: 400px;
      object-fit: cover;
      object-position: center top;
      display: block;
      border-radius: 0rem 0rem 0.625rem 0.625rem;
    }
    .text {
      padding: 1.69rem 0.72rem;
      padding-bottom: 2rem;
      border-radius: 0.625rem 0.625rem 0rem 0rem;
    }
    h1 {
      padding-left: 1rem;
    }
    .line1,
    .line2 {
      display: none;
    }
  }
  @media (min-width: 600px) {
    margin-top: 10rem;
    padding: 4rem;
    .line1,
    .line2 {
      top: -8rem;
    }
    h1 {
      padding-left: 2rem;
    }
    .text {
      padding: 2.63rem 4.81rem 2.5rem 2.5rem;
      border-radius: 0.625rem 0.625rem 0rem 0rem;
    }
    .picture {
      width: 100%;
      max-height: 450px;
      overflow: hidden;
      border-radius: 0rem 0rem 0.625rem 0.625rem;
    }
    .picture img {
      width: 100%;
      height: 100%;
      max-height: 450px;
      object-fit: cover;
      object-position: center top;
      display: block;
      border-radius: 0rem 0rem 0.625rem 0.625rem;
    }
  }
  
  @media (min-width: 998px) {
    .second {
      display: flex;
      align-items: stretch;
    }
    .text {
      flex: 1;
      padding: 2.63rem 4.81rem 2.5rem 2.5rem;
      border-radius: 0.625rem 0rem 0rem 0.625rem;
    }
    .picture {
      flex: 0 0 38%;
      max-width: 450px;
      max-height: none;
      overflow: hidden;
      border-radius: 0rem 0.625rem 0.625rem 0rem;
    }
    .picture img {
      width: 100%;
      height: 100%;
      max-height: none;
      object-fit: cover;
      object-position: center top;
      display: block;
      border-radius: 0rem 0.625rem 0.625rem 0rem;
    }
  }
`;

export const SkillcompStyle = styled.div`
  margin-top: 4rem;
  width: 100vw;
  border-radius: 0.625rem;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.0625rem;
  .make {
    font-weight: 700;
    text-align: left;
  }
  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(90px, 100%), 1fr));
    column-gap: 1.5rem;
    row-gap: 2.75rem;
  }
  @media (max-width: 360px) {
    .icons {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(80px, 100%), 1fr));
      column-gap: 2rem;
      row-gap: 2.85rem;
    }
    .make{
      font-size: 0.85rem;
      // line-height: 1.5rem; 
    }
  }
  @media (max-width: 767px) {
    padding: 1.5rem;
    padding-bottom: 3rem;
  }
  @media (min-width: 767px) {
    padding: 3.5625rem 12.875rem 5.625rem 9.1875rem;
    .icons{
        column-gap: 2.5rem;
        row-gap: 2.5rem;
    }
  }
`;
export const Line = styled.div`
  width: 2px;
  height: 16.46875rem;
  flex-shrink: 0;
  background: var(--accent-strong);
  opacity: 0.55;
  @media (max-width: 767px) {
    height: 12.6875rem;
  }
`;

interface ISkillStyle {
  color: string;
}
export const SkillStyle = styled.div<ISkillStyle>`
cursor: pointer;
position: relative;
  p {
    color: #fff;
    background: ${(props) => props.color};
    padding: 0.3125rem 0.625rem 0.4375rem 0.625rem;
    text-align: center;
    border-radius: 0.75rem;
    font-family: var(--minor-font);
    position: absolute;
    min-width: 80px;
    left: 0;
    right: 0;
  }
  @media (max-width: 360px) {
    p{
      padding: 0.3125rem 0.25rem 0.4375rem 0.25rem;
    }
  }
`;
