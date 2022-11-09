import React from 'react';

import StyleInjector from './StyleInjector';
import HeaderTemplate from '../../components/Header';

function Header({ entry, getAsset }) {
  const { data } = entry.toJS();

  data.logo = getAsset(data.logo).toString();

  return (
    <StyleInjector>
      <HeaderTemplate data={data} />
    </StyleInjector>
  );
}

export default Header;
