import React from 'react';

import StyleInjector from './StyleInjector';
import { HomeTemplate } from '../../pages/index';

const Home = ({ entry, getAsset, fieldsMetaData, boundGetAsset, config, isLoadingAsset }) => {
  if (isLoadingAsset) return <div>Loading...</div>;
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
        let activityData = activities.getIn([activity]);
        const logo = activityData.get('logo');
        const slug = activity.split('/')[0];
        activityData = activityData.set('path', `content/activities/${slug}/${logo}`);

        // hack to get the logo displayed
        activityData = activityData.set(
          'logo',
          boundGetAsset(
            config.get('collections').get(0).set('type', 'folder_based_collection'),
            activityData
          )(logo).toString()
        );

        return activityData
          .set('slug', `${window.location.protocol}//${window.location.host}/activities/${slug}`)
          .toJS();
      });
    }
  }

  if (data.stories?.featured_stories) {
    const stories = fieldsMetaData.getIn(['stories', 'featured_stories', 'story', 'stories']);

    data.stories.featured_stories = [...new Set(data.stories.featured_stories.filter(Boolean))];

    if (stories && stories.size >= data.stories.featured_stories.length) {
      data.stories.featured_stories = data.stories.featured_stories.map(story => {
        const storyData = stories.getIn([story]).toJS();
        const date = new Date(storyData.date);
        storyData.slug = `${window.location.protocol}//${
          window.location.host
        }/${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
          .getDate()
          .toString()
          .padStart(2, '0')}/${story.split(/-(.+)/)[1].split('/')[0]}`;
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
