import React from 'react';

import StyleInjector from './StyleInjector';
import { TeamTemplate } from '../../pages/team';

const init = {
  volunteers: {},
  values_section: {},
  job: {}
};

const Team = ({ entry, getAsset }) => {
  const { data } = entry.toJS();

  if (data.directors) {
    data.directors = data.directors.map(member => ({
      ...member,
      picture: member.picture && getAsset(member.picture).toString()
    }));
  }

  if (data.team) {
    data.team = data.team.map(member => ({
      ...member,
      picture: member.picture && getAsset(member.picture).toString()
    }));
  }

  const merged = { ...init, ...data };

  merged.volunteers.featured_image = merged.volunteers.featured_image || {};

  if (merged.volunteers.featured_image.image) {
    merged.volunteers.featured_image.image = getAsset(
      entry.getIn(['data', 'volunteers', 'featured_image', 'image'])
    ).toString();
  } else {
    merged.volunteers.featured_image.image = 'https://via.placeholder.com/850x550/';
  }

  return (
    <StyleInjector>
      <TeamTemplate data={merged} />
    </StyleInjector>
  );
};

export default Team;
