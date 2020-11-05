import React, { useRef } from 'react';

const Newsletter = () => {
  const input = useRef();
  const submit = e => {
    e.preventDefault();
    // console.log(input.current.value);
  };
  return (
    <section className="newsletter">
      <h2 id="a11y-email-field">
        Want to be up-to-date?
        <br /> <span className="regular">Subscribe to our mailing list!</span>
      </h2>
      <form onSubmit={submit}>
        <div className="input-group">
          <input
            placeholder="name@email.com"
            type="email"
            ref={input}
            aria-labelledby="a11y-email-field"
          />
          <button type="submit" className="button">
            signup&nbsp;&#x276F;
          </button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
