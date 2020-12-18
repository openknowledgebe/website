import React from 'react';
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

const Newsletter = ({ content }) => (
  <StyledNewsletter>
    <h2 id="a11y-email-field">
      {content?.heading}
      <br /> <span className="regular">{content?.subheading}</span>
    </h2>
    <form
      action="https://openknowledge.us8.list-manage.com/subscribe/post"
      method="POST"
      target="_blank"
    >
      <InputGroup>
        <Input
          type="email"
          name="MERGE0"
          required
          placeholder="name@example.com"
          aria-labelledby="a11y-email-field"
        />
        <input type="hidden" name="u" value="16c22b5f724fd6ef8c78c79fc" />
        <input type="hidden" name="id" value="1760a73ee6" />
        <Button type="submit" className="button">
          signup&nbsp;&#x276F;
        </Button>
      </InputGroup>
    </form>
  </StyledNewsletter>
);

export default Newsletter;
