import CMS from 'netlify-cms-app';
import { v4 as uuid } from 'uuid';

import Header from './previews/Header';
import Activity from './previews/Activity';
import Footer from './previews/Footer';
import Story from './previews/Story';
import Tags from './previews/Tags';
import Team from './previews/Team';
import Home from './previews/Home';
import About from './previews/About';

// generate IDs
CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    const data = entry.get('data');
    if (entry.get('collection') === 'activities') {
      let members = data.get('members');
      members = members.map(member => {
        if (member.get('id')) return member;
        return member.set('id', uuid());
      });
      return data.set('members', members);
    }

    if (entry.get('collection') === 'settings' && entry.get('slug') === 'tags') {
      // lowercase
      const tags = data.get('tags').map(tag => tag.set('name', tag.get('name').toLowerCase()));

      // sort
      return data.set(
        'tags',
        tags.sortBy(tag => tag.get('name'))
      );
    }

    return data;
  }
});

CMS.registerPreviewTemplate('header', Header);
CMS.registerPreviewTemplate('footer', Footer);
CMS.registerPreviewTemplate('tags', Tags);
CMS.registerPreviewTemplate('stories', Story);
CMS.registerPreviewTemplate('activities', Activity);
CMS.registerPreviewTemplate('team', Team);
CMS.registerPreviewTemplate('homepage', Home);
CMS.registerPreviewTemplate('about', About);
