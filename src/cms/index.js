import CMS from 'netlify-cms-app';
import Header from './previews/Header';
import Activity from './previews/Activity';
import Footer from './previews/Footer';
import Story from './previews/Story';
import Tags from './previews/Tags';
import Team from './previews/Team';

CMS.registerPreviewTemplate('header', Header);
CMS.registerPreviewTemplate('footer', Footer);
CMS.registerPreviewTemplate('tags', Tags);
CMS.registerPreviewTemplate('stories', Story);
CMS.registerPreviewTemplate('activities', Activity);
CMS.registerPreviewTemplate('team', Team);
