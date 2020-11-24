import React from 'react';

import StyleInjector from './StyleInjector';
import { ActivityTemplate } from '../../templates/Activity';

const init = {
  name: 'Noname',
  featured_image: 'https://via.placeholder.com/850x550',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl ante, quis mattis magna sagittis nec. Morbi luctus nisl a nisi tincidunt interdum. Duis at pharetra purus. Etiam imperdiet, nunc id ullamcorper hendrerit, tellus felis ultricies tortor, vitae hendrerit augue mauris eu velit.'
};

const ActivityPage = ({ entry, fieldsMetaData, getAsset }) => {
  const { data } = entry.toJS();
  data.contact_info = data.contact_info || {};
  data.featured_image = getAsset(entry.getIn(['data', 'featured_image'])).toString(0);
  data.contact_info.website = fieldsMetaData.getIn(['name', 'data.website']);
  const merged = { ...init, ...data };
  return (
    <StyleInjector>
      <ActivityTemplate data={merged} />
    </StyleInjector>
  );
};

export default ActivityPage;
