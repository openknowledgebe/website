import React, { useRef } from 'react';
import styled from 'styled-components';

import { Button, Input } from './UI';
import { breakpoints } from '../styles/globals';

const InputGroup = styled.div`
  display: flex;
`;

const StyledNewsletter = styled.section`
  & {
    color: var(--bg-light);
    background-color: var(--color-primary);
    margin-bottom: calc(6rem + 1.5%);
    display: flex;
    flex-direction: column;
  }

  & > form > div {
    max-width: 381px;
  }

  @media (min-width: ${breakpoints.medium}px) {
    & {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    & > * {
      width: 45%;
    }
  }
`;

const Newsletter = () => {
  const input = useRef();
  const submit = e => {
    e.preventDefault();
  };
  return (
    <StyledNewsletter>
      <h2 id="a11y-email-field">
        Want to be up-to-date?
        <br /> <span className="regular">Subscribe to our mailing list!</span>
      </h2>
      <form onSubmit={submit}>
        <InputGroup>
          <Input
            placeholder="name@email.com"
            type="email"
            ref={input}
            aria-labelledby="a11y-email-field"
          />
          <Button type="submit" className="button">
            signup&nbsp;&#x276F;
          </Button>
        </InputGroup>
      </form>
    </StyledNewsletter>
  );
};

export default Newsletter;
