import React from 'react';
import styled from 'styled-components';
import { twitterBlackIcon, mailIcon, linkedinBlackIcon, headshotIcon } from '../../images/icons';

import Img from './Img';

const StyledPerson = styled.div`
  display: flex;
  flex-direction: column;

  & > .img {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f6fe;

    width: 300px;
    height: 215px;

    & > img {
      max-height: 100%;
    }
  }
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

function Person({ name, picture, socials, task }) {
  return (
    <StyledPerson>
      <div className="img">
        {picture ? (
          <Img alt={name} image={picture} />
        ) : (
          <Img role="presentation" alt="" src={headshotIcon} />
        )}
      </div>
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
                <img src={linkedinBlackIcon} alt="LinkedIn" />
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
}

export default Person;
