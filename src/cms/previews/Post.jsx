import React from 'react';

import StyleInjector from './StyleInjector';
import { PostTemplate } from '../../templates/Post';

const Post = ({ entry }) => {
  const { data } = entry.toJS();
  return (
    <StyleInjector>
      <PostTemplate data={data} />
    </StyleInjector>
  );
};

export default Post;
