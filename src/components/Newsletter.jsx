import React, { useRef } from 'react';
import { Button, Input } from './UI';

const Newsletter = () => {
  const input = useRef();
  const submit = e => {
    e.preventDefault();
  };
  return (
    <section className="newsletter">
      <h2 id="a11y-email-field">
        Want to be up-to-date?
        <br /> <span className="regular">Subscribe to our mailing list!</span>
      </h2>
      <form onSubmit={submit}>
        <div className="input-group">
          <Input
            placeholder="name@email.com"
            type="email"
            ref={input}
            aria-labelledby="a11y-email-field"
          />
          <Button type="submit" className="button">
            signup&nbsp;&#x276F;
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
