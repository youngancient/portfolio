import styled from "styled-components";

export const HeaderStyle = styled.header`
width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .other-links {
    display: flex;
    gap: 2.25rem;
    align-items: center;
    a {
      color: #fff;
      text-align: center;
      font-family: var(--minor-font);
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.5rem; /* 280% */
      text-transform: capitalize;
    }
    p {
      // text-decoration: underline;
      position: relative;
      display: inline-block;
    }
    p::after {
      content: "";
      position: absolute;
      bottom: -5px; /* Adjust this value to control the space under the text */
      left: 0;
      width: 100%;
      height: 2px; /* Adjust this value to control the thickness of the line */
      background-color: #fff; /* Adjust this value to set the color of the line */
      transform: scaleX(0); /* Initially, the line is invisible */
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    p:hover::after {
      transform: scaleX(1); /* When hovered, the line becomes visible */
      transform-origin: bottom left;
    }
  }
  .for-desktop {
    display: flex;
    gap: 1rem;
  }
  .resume {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }
  @media (min-width: 600px) {
    .mobile-logo{
      display: none;
    }
  }
  @media (max-width: 600px) {
    padding: 0rem 0rem;
    padding-right: 1.5rem;
    .for-desktop {
        display: none;
    }
    a p{
      font-size: 1rem;
    }
    justify-content: space-between;
  }
  .mobile-logo{
    display: none;
  }
`;
