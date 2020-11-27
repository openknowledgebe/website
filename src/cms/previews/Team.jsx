import React from 'react';

import StyleInjector from './StyleInjector';
import { TeamTemplate } from '../../pages/team';

const init = {
  header: {
    about_volunteers: {}
  }
};

const Team = ({ entry }) => {
  const { data } = entry.toJS();

  const merged = { ...init, ...data };
  return (
    <StyleInjector>
      <TeamTemplate data={merged} />
    </StyleInjector>
  );
};

export default Team;
