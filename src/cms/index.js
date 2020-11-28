import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import Activity from './previews/Activity';
import ActivityPage from './previews/ActivityPage';
import Footer from './previews/Footer';
import Story from './previews/Story';
import Tags from './previews/Tags';
import Team from './previews/Team';

CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewTemplate('footer', Footer);
CMS.registerPreviewTemplate('tags', Tags);
CMS.registerPreviewTemplate('stories', Story);
CMS.registerPreviewTemplate('activities', Activity);
CMS.registerPreviewTemplate('activity_page', ActivityPage);
CMS.registerPreviewTemplate('team', Team);
