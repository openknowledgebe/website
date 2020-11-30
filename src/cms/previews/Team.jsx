import React from 'react';

import StyleInjector from './StyleInjector';
import { TeamTemplate } from '../../pages/team';

const init = {
  header: {
    about_volunteers: {}
  }
};

const Team = ({ entry, getAsset }) => {
  const { data } = entry.toJS();

  if (data.directors) {
    data.directors = data.directors.map(member => {
      return {
        ...member,
        picture: member.picture && getAsset(member.picture).toString()
      };
    });
  }

  if (data.team) {
    data.team = data.team.map(member => {
      return {
        ...member,
        picture: member.picture && getAsset(member.picture).toString()
      };
    });
  }

  const merged = { ...init, ...data };

  if (merged.header.featured_image) {
    merged.header.featured_image = getAsset(
      entry.getIn(['data', 'header', 'featured_image'])
    ).toString();
  } else {
    merged.header.featured_image = 'https://via.placeholder.com/850x550/';
  }

  merged.header.about_volunteers = merged.header.about_volunteers || {};

  return (
    <StyleInjector>
      <TeamTemplate data={merged} />
    </StyleInjector>
  );
};

export default Team;
