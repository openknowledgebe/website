import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import Footer from './previews/Footer';
import Post from './previews/Post';
import Tags from './previews/Tags';

CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewTemplate('footer', Footer);
CMS.registerPreviewTemplate('tags', Tags);
CMS.registerPreviewTemplate('post_stories', Post);
