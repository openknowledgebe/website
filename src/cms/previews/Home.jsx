import React from 'react';

import StyleInjector from './StyleInjector';
import { HomeTemplate } from '../../pages/index';

const Home = ({ entry, getAsset, fieldsMetaData }) => {
  const { data } = entry.toJS();

  if (data.header?.featured_image?.image) {
    data.header.featured_image.image = getAsset(
      entry.getIn(['data', 'header', 'featured_image', 'image'])
    ).toString();
  }

  if (data.stories?.featured_image?.image) {
    data.stories.featured_image.image = getAsset(
      entry.getIn(['data', 'stories', 'featured_image', 'image'])
    ).toString();
  }

  if (data.activities?.featured_activities) {
    const activities = fieldsMetaData.getIn([
      'activities',
      'featured_activities',
      'activity',
      'activities'
    ]);

    data.activities.featured_activities = [
      ...new Set(data.activities.featured_activities.filter(Boolean))
    ];

    if (activities && activities.size >= data.activities.featured_activities.length) {
      data.activities.featured_activities = data.activities.featured_activities.map(activity => {
        const activityData = activities.getIn([activity]).toJS();
        activityData.slug = `${window.location.protocol}//${window.location.host}/activities/${activity}`;
        return activityData;
      });
    }
  }

  if (data.stories?.featured_stories) {
    const stories = fieldsMetaData.getIn(['stories', 'featured_stories', 'story', 'stories']);

    data.stories.featured_stories = [...new Set(data.stories.featured_stories.filter(Boolean))];

    if (stories && stories.size >= data.stories.featured_stories.length) {
      data.stories.featured_stories = data.stories.featured_stories.map(story => {
        const storyData = stories.getIn([story]).toJS();
        storyData.slug = `${window.location.protocol}//${window.location.host}/stories/${story}`;
        storyData.date = storyData.date.toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        return storyData;
      });
    }
  }

  return (
    <StyleInjector>
      <HomeTemplate data={data} />
    </StyleInjector>
  );
};

export default Home;
