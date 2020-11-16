import { createGlobalStyle, css } from 'styled-components';

export const underline = css`
  position: absolute;
  content: '';
  left: 0;
  bottom: -0.1rem;
  height: 0.2rem;
  background-color: var(--color-secondary);
`;

/* unit = pixel */
export const breakpoints = {
  medium: 699,
  intermidiate: 1000,
  large: 1200
};

const global = css`
  :root {
    --color-primary: #301948;
    --color-secondary: #641bff;
    --color-secondary-opacity: #641bffe6;
    --logo-box-hovered: rgba(100, 27, 255, 0.8);
    --fonts-copy: 'Chivo', sans-serif;
    --fonts-title: 'Work Sans', sans-serif;
    --nav-height: 9.8rem;
    --bg-light: #ffff;
    --max-zindex: 1000;
    --high-zindex: 999;
    --page-lr-margin: 5%; /* page left and right margin */
  }

  /* Reset */
  address {
    font-style: normal;
  }

  /* HTML elements */
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #___gatsby,
  #___gatsby > * {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    color: var(--color-primary);
    font-family: var(--fonts-copy);
    line-height: 1.6;
  }

  #app {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  /* Titles */
  h1,
  h2,
  h3 {
    font-family: var(--fonts-title);
  }

  h1,
  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  /* Sections */
  section,
  header,
  footer {
    padding: 2rem var(--page-lr-margin);
  }

  section,
  footer {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  section[data-state='reversed'],
  footer {
    box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.05);
  }

  /* Utils */
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .work-sans {
    font-family: var(--fonts-title);
  }

  .bold {
    font-weight: 700;
  }

  .bold6 {
    font-weight: 600;
  }

  .regular {
    font-weight: 400;
  }

  .lighter {
    font-weight: 200;
  }

  .flex {
    display: flex;
  }

  /* big right margin */
  .mg-r-b {
    margin-right: 2.5rem;
  }

  .box {
    box-shadow: 0px 0px 15.8797px rgba(0, 0, 0, 0.05);
  }

  .box:hover {
    box-shadow: none;
  }

  /* Display Utilities */
  .d-none-sm {
    // do not display on small screens
    display: none !important;
  }

  @media (min-width: ${breakpoints.medium}px) {
    .d-block-md {
      display: block !important;
    }

    .d-inline-block-md {
      display: inline-block !important;
    }

    .d-none-md {
      display: none !important;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${global}
`;
