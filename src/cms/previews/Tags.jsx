import React from 'react';
import styled from 'styled-components';

import StyleInjector from './StyleInjector';
import { Tag } from '../../components/UI';

const TagExt = styled(Tag)`
  background-color: #f9f6ff;
`;

function Tags({ entry }) {
  const { data } = entry.toJS();
  return (
    <StyleInjector>
      {data.tags.map(({ name }) => (
        <div key={name} style={{ margin: '10px 0' }}>
          <TagExt>{name}</TagExt>
        </div>
      ))}
    </StyleInjector>
  );
}

export default Tags;
