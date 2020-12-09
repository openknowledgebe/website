import React from 'react';

import StyleInjector from './StyleInjector';
import { AboutTemplate } from '../../pages/about';

const About = ({ entry, widgetFor }) => {
  const { data } = entry.toJS();

  data.body = widgetFor('body');

  return (
    <StyleInjector>
      <AboutTemplate data={data} preview />
    </StyleInjector>
  );
};

export default About;
