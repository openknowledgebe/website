import React from 'react';

import StyleInjector from './StyleInjector';
import { PostTemplate } from '../../templates/Post';
import { StoryCard } from '../../components/Story';

const Post = ({ entry }) => {
  const { data } = entry.toJS();

  const excerpt = data.excerpt || data.body;
  return (
    <StyleInjector>
      <StoryCard title={data.title} date={data.date} excerpt={excerpt} />
      <PostTemplate data={data} />
    </StyleInjector>
  );
};

export default Post;
