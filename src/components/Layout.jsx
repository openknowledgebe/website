import React from 'react';
import Header from './Header';
import NavItems from './NavItems';

// normalize CSS across browsers
import '../normalize.css';
// custom CSS styles
import '../style.css';

import { facebookIcon, githubIcon, twitterIcon } from '../images/icons';

const Layout = ({ children }) => {
  return (
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
            International License. Refer to our attributions page for attributions of other work on
            the site.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
