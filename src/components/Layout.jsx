import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import NavItems from './NavItems';
import { facebookIcon, githubIcon, twitterIcon } from '../images/icons';

// normalize CSS across browsers
import '../styles/normalize.css';
// custom CSS styles
import '../style.css';

const GlobalStyle = createGlobalStyle`
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
    --breakpoint-medium: 699px;
    --breakpoint-interm: 1000px; 
    --breakpoint-large: 1200px;
  }

  /* Reset */
  address {
    font-style: normal;
  }

  /* Fonts */

  @font-face {
    font-family: 'Work Sans';
    src: url('./fonts/WorkSans-VariableFont_wght.ttf');
    font-display: swap;
  }

  @font-face {
    font-family: 'Chivo';
    src: url('./fonts/Chivo-Regular.ttf');
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

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <div id="app">
        <Header />
        <main>{children}</main>
        <footer>
          <div>
            <div className="contact">
              <h3>Contact</h3>
              <address>
                Open knowledge Belgium VZW / asbl <br />
                Cantersteen 12
                <br />
                1000 Brussel
                <br />
                BE 0845 419 930 <br />
              </address>
            </div>
            <div className="socials">
              <h3>Online & social channels</h3>
              <div className="flex">
                <a
                  href="https://twitter.com/openknowledgebe"
                  className="mg-r-b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="Twitter" />
                </a>
                <a
                  href="https://github.com/openknowledgebe"
                  className="mg-r-b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="Github" />
                </a>
                <a
                  href="https://www.facebook.com/OpenKnowledgeBE"
                  className="mg-r-b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <NavItems className="footer-nav unstyled-links work-sans" />
            <div className="license">
              {'<'}/{'>'} Source code available under the MIT license. Content on this site, made by
              Open Knowledge Foundation, is licensed under a Creative Commons Attribution 4.0
              International License. Refer to our attributions page for attributions of other work
              on the site.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
