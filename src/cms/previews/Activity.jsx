/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ActivityCard from '../../components/Activity';
import StyleInjector from './StyleInjector';

const Activity = ({ entry, getAsset }) => {
  const { data } = entry.toJS();

  data.logo = getAsset(entry.getIn(['data', 'logo'])).toString();

  return (
    <StyleInjector>
      <div style={{ marginBottom: '10px' }}>
        <small>Hover the box bellow to see the tags.</small>
      </div>
      <ActivityCard {...data} />
    </StyleInjector>
  );
};

export default Activity;
