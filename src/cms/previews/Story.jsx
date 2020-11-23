import React from 'react';

import StyleInjector from './StyleInjector';
import { StoryTemplate } from '../../templates/Story';
import { StoryCard } from '../../components/Story';

const Story = ({ entry }) => {
  const { data } = entry.toJS();

  const excerpt = data.excerpt || data.body;
  data.date = data.date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <StyleInjector>
      <StoryCard title={data.title} date={data.date} excerpt={excerpt} />
      <StoryTemplate data={data} />
    </StyleInjector>
  );
};

export default Story;
