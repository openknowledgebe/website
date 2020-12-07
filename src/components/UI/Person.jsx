import React from 'react';
import styled from 'styled-components';
import { twitterBlackIcon, mailIcon, linkedinIcon, headshotIcon } from '../../images/icons';

import Img from './Img';

const StyledPerson = styled.div`
  display: flex;
  flex-direction: column;
`;

const PersonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  & p {
    margin: 0;
  }

  & .socials {
    padding-top: 1rem;
  }

  & .socials > * {
    margin-left: 1rem;
  }
`;

const Person = ({ name, picture, socials, task }) => {
  return (
    <StyledPerson>
      {picture ? (
        <Img alt={name} src={picture} />
      ) : (
        <Img
          role="presentation"
          alt=""
          src={headshotIcon}
          css="background: #F8F6FE; padding: 5rem;"
        />
      )}
      <PersonFooter>
        <div>
          <h4>{name}</h4>
          {task && <p>{task}</p>}
        </div>
        {socials && (
          <div className="socials flex">
            {socials.email && (
              <a href={`mailto:${socials.email}`}>
                <img src={mailIcon} alt="Email address" />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                <img src={twitterBlackIcon} alt="twitter" />
              </a>
            )}
          </div>
        )}
      </PersonFooter>
    </StyledPerson>
  );
};

export default Person;
