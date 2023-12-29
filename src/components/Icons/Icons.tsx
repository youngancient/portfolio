import styled from "styled-components";

interface IconType {
  background?: string;
}
interface IconStyleType {
  background?: string;
}
export const Github: React.FC<IconType> = ({ background }) => {
  return (
    <GithubStyle background={background}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <g clipPath="url(#clip0_237_411)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.47616 0C4.06555 0 0.5 3.66667 0.5 8.20283C0.5 11.8288 2.78457 14.8982 5.95388 15.9845C6.35012 16.0662 6.49527 15.808 6.49527 15.5908C6.49527 15.4007 6.4822 14.7488 6.4822 14.0697C4.26343 14.5587 3.80139 13.0918 3.80139 13.0918C3.44482 12.1412 2.91649 11.8968 2.91649 11.8968C2.19029 11.3943 2.96939 11.3943 2.96939 11.3943C3.77494 11.4487 4.19763 12.2363 4.19763 12.2363C4.91061 13.4857 6.05951 13.1327 6.52171 12.9153C6.58767 12.3857 6.7991 12.019 7.02359 11.8153C5.25396 11.6252 3.39208 10.919 3.39208 7.76817C3.39208 6.87183 3.70882 6.1385 4.21069 5.56817C4.13151 5.3645 3.85412 4.52233 4.29004 3.39517C4.29004 3.39517 4.96351 3.17783 6.48204 4.23717C7.13218 4.05761 7.80265 3.96627 8.47616 3.9655C9.14963 3.9655 9.83616 4.06067 10.4701 4.23717C11.9888 3.17783 12.6623 3.39517 12.6623 3.39517C13.0982 4.52233 12.8207 5.3645 12.7415 5.56817C13.2566 6.1385 13.5602 6.87183 13.5602 7.76817C13.5602 10.919 11.6984 11.6115 9.91551 11.8153C10.2061 12.0733 10.4569 12.5622 10.4569 13.3363C10.4569 14.4363 10.4438 15.3192 10.4438 15.5907C10.4438 15.808 10.5891 16.0662 10.9852 15.9847C14.1545 14.898 16.4391 11.8288 16.4391 8.20283C16.4522 3.66667 12.8736 0 8.47616 0Z"
            fill="url(#paint0_linear_237_411)"
            fillOpacity="0.78"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_237_411"
            x1="8.46957"
            y1="0"
            x2="8.46957"
            y2="21.612"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_237_411">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </GithubStyle>
  );
};
export const GithubStyle = styled.div<IconStyleType>`
  background: ${(props) => (props.background ? props.background : "#27232C")};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    z-index: 5;
    position: relative;
  }
`;
export const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
    >
      <path
        d="M0 16.5C0 25.3366 7.16344 32.5 16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5Z"
        fill="#27232C"
      />
      <path
        d="M24 11.5C23.4 11.8 22.8 11.9 22.1 12C22.8 11.6 23.3 11 23.5 10.2C22.9 10.6 22.2 10.8 21.4 11C20.8 10.4 19.9 10 19 10C16.9 10 15.3 12 15.8 14C13.1 13.9 10.7 12.6 9 10.6C8.1 12.1 8.6 14 10 15C9.5 15 9 14.8 8.5 14.6C8.5 16.1 9.6 17.5 11.1 17.9C10.6 18 10.1 18.1 9.6 18C10 19.3 11.2 20.3 12.7 20.3C11.5 21.2 9.7 21.7 8 21.5C9.5 22.4 11.2 23 13 23C19.1 23 22.5 17.9 22.3 13.2C23 12.8 23.6 12.2 24 11.5Z"
        fill="white"
      />
    </svg>
  );
};
export const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
    >
      <path
        d="M0 16.5C0 25.3366 7.16344 32.5 16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5Z"
        fill="#27232C"
      />
      <path
        d="M16 9.70001C18.2 9.70001 18.5 9.70001 19.4 9.70001C20.2 9.70001 20.6 9.90001 20.9 10C21.3 10.2 21.6 10.3 21.9 10.6C22.2 10.9 22.4 11.2 22.5 11.6C22.6 11.9 22.7 12.3 22.8 13.1C22.8 14 22.8 14.2 22.8 16.5C22.8 18.8 22.8 19 22.8 19.9C22.8 20.7 22.6 21.1 22.5 21.4C22.3 21.8 22.2 22.1 21.9 22.4C21.6 22.7 21.3 22.9 20.9 23C20.6 23.1 20.2 23.2 19.4 23.3C18.5 23.3 18.3 23.3 16 23.3C13.7 23.3 13.5 23.3 12.6 23.3C11.8 23.3 11.4 23.1 11.1 23C10.7 22.8 10.4 22.7 10.1 22.4C9.80001 22.1 9.60001 21.8 9.50001 21.4C9.40001 21.1 9.30001 20.7 9.20001 19.9C9.20001 19 9.20001 18.8 9.20001 16.5C9.20001 14.2 9.20001 14 9.20001 13.1C9.20001 12.3 9.40001 11.9 9.50001 11.6C9.70001 11.2 9.80001 10.9 10.1 10.6C10.4 10.3 10.7 10.1 11.1 10C11.4 9.90001 11.8 9.80001 12.6 9.70001C13.5 9.70001 13.8 9.70001 16 9.70001ZM16 8.20001C13.7 8.20001 13.5 8.20001 12.6 8.20001C11.7 8.20001 11.1 8.40001 10.6 8.60001C10.1 8.80001 9.60001 9.10001 9.10001 9.60001C8.60001 10.1 8.40001 10.5 8.10001 11.1C7.90001 11.6 7.80001 12.2 7.70001 13.1C7.70001 14 7.70001 14.3 7.70001 16.5C7.70001 18.8 7.70001 19 7.70001 19.9C7.70001 20.8 7.90001 21.4 8.10001 21.9C8.30001 22.4 8.60001 22.9 9.10001 23.4C9.60001 23.9 10 24.1 10.6 24.4C11.1 24.6 11.7 24.7 12.6 24.8C13.5 24.8 13.8 24.8 16 24.8C18.2 24.8 18.5 24.8 19.4 24.8C20.3 24.8 20.9 24.6 21.4 24.4C21.9 24.2 22.4 23.9 22.9 23.4C23.4 22.9 23.6 22.5 23.9 21.9C24.1 21.4 24.2 20.8 24.3 19.9C24.3 19 24.3 18.7 24.3 16.5C24.3 14.3 24.3 14 24.3 13.1C24.3 12.2 24.1 11.6 23.9 11.1C23.7 10.6 23.4 10.1 22.9 9.60001C22.4 9.10001 22 8.90001 21.4 8.60001C20.9 8.40001 20.3 8.30001 19.4 8.20001C18.5 8.20001 18.3 8.20001 16 8.20001Z"
        fill="white"
      />
      <path
        d="M16 12.2C13.6 12.2 11.7 14.1 11.7 16.5C11.7 18.9 13.6 20.8 16 20.8C18.4 20.8 20.3 18.9 20.3 16.5C20.3 14.1 18.4 12.2 16 12.2ZM16 19.3C14.5 19.3 13.2 18.1 13.2 16.5C13.2 15 14.4 13.7 16 13.7C17.5 13.7 18.8 14.9 18.8 16.5C18.8 18 17.5 19.3 16 19.3Z"
        fill="white"
      />
      <path
        d="M20.4 13.1C20.9523 13.1 21.4 12.6523 21.4 12.1C21.4 11.5477 20.9523 11.1 20.4 11.1C19.8477 11.1 19.4 11.5477 19.4 12.1C19.4 12.6523 19.8477 13.1 20.4 13.1Z"
        fill="white"
      />
    </svg>
  );
};
export const Linkedin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
    >
      <path
        d="M0 16.5C0 25.3366 7.16344 32.5 16 32.5C24.8366 32.5 32 25.3366 32 16.5C32 7.66344 24.8366 0.5 16 0.5C7.16344 0.5 0 7.66344 0 16.5Z"
        fill="#27232C"
      />
      <path
        d="M11.6 24.5H8.2V13.8H11.6V24.5ZM9.9 12.3C8.8 12.3 8 11.5 8 10.4C8 9.3 8.9 8.5 9.9 8.5C11 8.5 11.8 9.3 11.8 10.4C11.8 11.5 11 12.3 9.9 12.3ZM24 24.5H20.6V18.7C20.6 17 19.9 16.5 18.9 16.5C17.9 16.5 16.9 17.3 16.9 18.8V24.5H13.5V13.8H16.7V15.3C17 14.6 18.2 13.5 19.9 13.5C21.8 13.5 23.8 14.6 23.8 17.9V24.5H24Z"
        fill="white"
      />
    </svg>
  );
};

export const DarkX = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M0.5 16.5C0.5 25.3366 7.66344 32.5 16.5 32.5C25.3366 32.5 32.5 25.3366 32.5 16.5C32.5 7.66344 25.3366 0.5 16.5 0.5C7.66344 0.5 0.5 7.66344 0.5 16.5Z"
        fill="#010101"
      />
      <path
        d="M24.5 11.5C23.9 11.8 23.3 11.9 22.6 12C23.3 11.6 23.8 11 24 10.2C23.4 10.6 22.7 10.8 21.9 11C21.3 10.4 20.4 10 19.5 10C17.4 10 15.8 12 16.3 14C13.6 13.9 11.2 12.6 9.5 10.6C8.6 12.1 9.1 14 10.5 15C10 15 9.5 14.8 9 14.6C9 16.1 10.1 17.5 11.6 17.9C11.1 18 10.6 18.1 10.1 18C10.5 19.3 11.7 20.3 13.2 20.3C12 21.2 10.2 21.7 8.5 21.5C10 22.4 11.7 23 13.5 23C19.6 23 23 17.9 22.8 13.2C23.5 12.8 24.1 12.2 24.5 11.5Z"
        fill="url(#paint0_linear_7_2938)"
        fillOpacity="0.78"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7_2938"
          x1="16.5"
          y1="10"
          x2="16.5"
          y2="27.5597"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const DarkLinkedin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M0.5 16.5C0.5 25.3366 7.66344 32.5 16.5 32.5C25.3366 32.5 32.5 25.3366 32.5 16.5C32.5 7.66344 25.3366 0.5 16.5 0.5C7.66344 0.5 0.5 7.66344 0.5 16.5Z"
        fill="#010101"
      />
      <path
        d="M12.1 24.5H8.7V13.8H12.1V24.5ZM10.4 12.3C9.3 12.3 8.5 11.5 8.5 10.4C8.5 9.3 9.4 8.5 10.4 8.5C11.5 8.5 12.3 9.3 12.3 10.4C12.3 11.5 11.5 12.3 10.4 12.3ZM24.5 24.5H21.1V18.7C21.1 17 20.4 16.5 19.4 16.5C18.4 16.5 17.4 17.3 17.4 18.8V24.5H14V13.8H17.2V15.3C17.5 14.6 18.7 13.5 20.4 13.5C22.3 13.5 24.3 14.6 24.3 17.9V24.5H24.5Z"
        fill="url(#paint0_linear_7_2940)"
        fillOpacity="0.78"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7_2940"
          x1="16.5"
          y1="8.5"
          x2="16.5"
          y2="30.1119"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const DarkInsta = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
        fill="#010101"
      />
      <path
        d="M16 9.20001C18.2 9.20001 18.5 9.20001 19.4 9.20001C20.2 9.20001 20.6 9.40001 20.9 9.50001C21.3 9.70001 21.6 9.80001 21.9 10.1C22.2 10.4 22.4 10.7 22.5 11.1C22.6 11.4 22.7 11.8 22.8 12.6C22.8 13.5 22.8 13.7 22.8 16C22.8 18.3 22.8 18.5 22.8 19.4C22.8 20.2 22.6 20.6 22.5 20.9C22.3 21.3 22.2 21.6 21.9 21.9C21.6 22.2 21.3 22.4 20.9 22.5C20.6 22.6 20.2 22.7 19.4 22.8C18.5 22.8 18.3 22.8 16 22.8C13.7 22.8 13.5 22.8 12.6 22.8C11.8 22.8 11.4 22.6 11.1 22.5C10.7 22.3 10.4 22.2 10.1 21.9C9.8 21.6 9.6 21.3 9.5 20.9C9.4 20.6 9.3 20.2 9.2 19.4C9.2 18.5 9.2 18.3 9.2 16C9.2 13.7 9.2 13.5 9.2 12.6C9.2 11.8 9.4 11.4 9.5 11.1C9.7 10.7 9.8 10.4 10.1 10.1C10.4 9.80001 10.7 9.60001 11.1 9.50001C11.4 9.40001 11.8 9.30001 12.6 9.20001C13.5 9.20001 13.8 9.20001 16 9.20001ZM16 7.70001C13.7 7.70001 13.5 7.70001 12.6 7.70001C11.7 7.70001 11.1 7.90001 10.6 8.10001C10.1 8.30001 9.6 8.60001 9.1 9.10001C8.6 9.60001 8.4 10 8.1 10.6C7.9 11.1 7.8 11.7 7.7 12.6C7.7 13.5 7.7 13.8 7.7 16C7.7 18.3 7.7 18.5 7.7 19.4C7.7 20.3 7.9 20.9 8.1 21.4C8.3 21.9 8.6 22.4 9.1 22.9C9.6 23.4 10 23.6 10.6 23.9C11.1 24.1 11.7 24.2 12.6 24.3C13.5 24.3 13.8 24.3 16 24.3C18.2 24.3 18.5 24.3 19.4 24.3C20.3 24.3 20.9 24.1 21.4 23.9C21.9 23.7 22.4 23.4 22.9 22.9C23.4 22.4 23.6 22 23.9 21.4C24.1 20.9 24.2 20.3 24.3 19.4C24.3 18.5 24.3 18.2 24.3 16C24.3 13.8 24.3 13.5 24.3 12.6C24.3 11.7 24.1 11.1 23.9 10.6C23.7 10.1 23.4 9.60001 22.9 9.10001C22.4 8.60001 22 8.40001 21.4 8.10001C20.9 7.90001 20.3 7.80001 19.4 7.70001C18.5 7.70001 18.3 7.70001 16 7.70001Z"
        fill="white"
        fillOpacity="0.78"
      />
      <path
        d="M16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
        fill="white"
      />
      <path
        d="M20.4 12.6C20.9523 12.6 21.4 12.1523 21.4 11.6C21.4 11.0477 20.9523 10.6 20.4 10.6C19.8477 10.6 19.4 11.0477 19.4 11.6C19.4 12.1523 19.8477 12.6 20.4 12.6Z"
        fill="white"
      />
    </svg>
  );
};
export const OpenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7.25C8.58579 7.25 8.25 6.91421 8.25 6.5C8.25 6.08579 8.58579 5.75 9 5.75H18C18.4142 5.75 18.75 6.08579 18.75 6.5V15.5C18.75 15.9142 18.4142 16.25 18 16.25C17.5858 16.25 17.25 15.9142 17.25 15.5V8.31066L6.53033 19.0303C6.23744 19.3232 5.76256 19.3232 5.46967 19.0303C5.17678 18.7374 5.17678 18.2626 5.46967 17.9697L16.1893 7.25H9Z"
        fill="white"
      />
    </svg>
  );
};
export const DarkOpenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z"
        fill="black"
      />
    </svg>
  );
};

export const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33276 12C3.33276 11.5858 3.66855 11.25 4.08276 11.25L18.2721 11.25L13.5524 6.53033C13.2595 6.23744 13.2595 5.76256 13.5524 5.46967C13.8453 5.17678 14.3202 5.17678 14.6131 5.46967L20.6131 11.4697C20.7537 11.6103 20.8328 11.8011 20.8328 12C20.8328 12.1989 20.7537 12.3897 20.6131 12.5303L14.6131 18.5303C14.3202 18.8232 13.8453 18.8232 13.5524 18.5303C13.2595 18.2374 13.2595 17.7626 13.5524 17.4697L18.2721 12.75L4.08276 12.75C3.66855 12.75 3.33276 12.4142 3.33276 12Z"
        fill="white"
      />
    </svg>
  );
};

export const Asterik = () => {
  return (
    <AsterikStyle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M12.9931 0.831114L9.88068 1.66509L12.6334 11.9385L3.16801 6.47366L1.57487 9.23306L11.0403 14.6979L0.766862 17.4507L1.60083 20.5631L11.8718 17.811L6.40444 27.2808L9.16537 28.8748L14.6337 19.4035L17.3864 29.6769L20.4989 28.843L17.7461 18.5695L27.218 24.0381L28.8111 21.2787L19.3392 15.8101L29.6127 13.0574L28.7787 9.94495L18.5052 12.6977L23.9698 3.23278L21.2089 1.63875L15.7452 11.1021L12.9931 0.831114Z"
          fill="url(#paint0_linear_7_1932)"
          fillOpacity="0.78"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7_1932"
            x1="11.4369"
            y1="1.2481"
            x2="21.5753"
            y2="39.085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </AsterikStyle>
  );
};

export const AsterikStyle = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      scale: 0.6;
    }
  }
`;
