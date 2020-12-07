import React from 'react';

import StyleInjector from './StyleInjector';
import { StoryTemplate } from '../../templates/Story';
import { StoryCard } from '../../components/Story';

const Story = ({ entry, widgetFor }) => {
  const { data } = entry.toJS();

  const excerpt = data.excerpt || data.body;

  data.body = widgetFor('body');

  data.date = data.date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <StyleInjector>
      <div>
        <h2>Card Preview</h2>
        <StoryCard title={data.title} date={data.date} excerpt={excerpt} />
      </div>
      <hr />
      <div>
        <h2>Story Preview</h2>
        <StoryTemplate data={data} preview />
      </div>
    </StyleInjector>
  );
};

export default Story;
