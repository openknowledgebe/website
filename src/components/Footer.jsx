import React from 'react';
import styled from 'styled-components';

import NavItems from './NavItems';
import { facebookIcon, githubIcon, twitterIcon } from '../images/icons';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;

  & .footer-nav .nav-items {
    flex-direction: column;
  }

  & .socials {
    margin-top: 1.6rem;
  }

  & .footer-nav > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 699px) {
    & > div:first-of-type {
      display: flex;
      justify-content: space-between;
    }

    & .contact,
    & .socials {
      width: 45%;
    }

    & .socials {
      margin-top: 0;
    }

    & .footer-nav .nav-items {
      flex-direction: row;
    }
  }

  @media (min-width: 1200px) {
    & > div {
      display: flex;
      justify-content: space-between;
    }

    & .footer-nav .nav-items {
      margin-bottom: 0;
    }

    & .footer-nav .nav-items > li {
      margin-right: 1rem;
    }

    & .footer-nav,
    & .license {
      width: 45%;
    }

    & .footer-nav {
      align-self: flex-end;
    }

    & .license {
      position: relative;
      margin-top: -3rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
};

export default Footer;
