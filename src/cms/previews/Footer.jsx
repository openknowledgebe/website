import React from 'react';

import StyleInjector from './StyleInjector';
import FooterTemplate from '../../components/Footer';

const Footer = ({ entry }) => {
  const { data } = entry.toJS();
  return (
    <StyleInjector>
      <FooterTemplate data={data} />
    </StyleInjector>
  );
};

export default Footer;
