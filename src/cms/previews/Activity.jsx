/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ActivityCard from '../../components/Activity';
import StyleInjector from './StyleInjector';

import { ActivityTemplate } from '../../templates/Activity';

const init = {
  name: 'Noname',
  featured_image: { image: 'https://via.placeholder.com/850x550/' },
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl ante, quis mattis magna sagittis nec. Morbi luctus nisl a nisi tincidunt interdum. Duis at pharetra purus. Etiam imperdiet, nunc id ullamcorper hendrerit, tellus felis ultricies tortor, vitae hendrerit augue mauris eu velit.'
};

const Activity = ({ entry, getAsset }) => {
  const { data } = entry.toJS();

  data.logo = getAsset(entry.getIn(['data', 'logo'])).toString();
  data.contact_info = data.contact_info || {};
  data.contact_info.website = data.to;
  data.featured_image.image = getAsset(entry.getIn(['data', 'featured_image', 'image'])).toString();

  if (data.members) {
    data.members = data.members.map(member => {
      return {
        ...member,
        picture: member.picture && getAsset(member.picture).toString()
      };
    });
  }

  const merged = { ...init, ...data };
  return (
    <StyleInjector>
      <div>
        <h2>Card Preview</h2>
        <div style={{ marginBottom: '10px' }}>
          <small>You may see this on the homepage or "our activities" page.</small>
          <br />
          <small>Hover the box bellow to see the tags.</small>
        </div>
        <ActivityCard {...data} />
      </div>
      <hr style={{ marginTop: '30px' }} />
      <div style={{ marginTop: '30x' }}>
        <h2>Page Preview</h2>
        <ActivityTemplate data={merged} />
      </div>
    </StyleInjector>
  );
};

export default Activity;
