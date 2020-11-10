import { createGlobalStyle } from 'styled-components';

import Chivo from '../fonts/Chivo-Regular.ttf';
import WorkSans from '../fonts/WorkSans-VariableFont_wght.ttf';

/* unit = pixel */
export const breakpoints = {
  medium: 699,
  intermidiate: 1000,
  large: 1200
};

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #301948;
        --color-secondary: #641bff;
        --color-secondary-opacity: #641bffE6;
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

    /* Fonts */

    @font-face {
        font-family: 'Work Sans';
        src: local('Work Sans') url(${WorkSans}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Chivo';
        src: local('Chivo') url(${Chivo}) format('truetype');
        font-display: swap;
        font-weight: 400;
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
        color: var(--primary-color);
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
`;
