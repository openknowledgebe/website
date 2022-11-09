/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Image from 'gatsby-image';

function Img({ image, imageStyle, alt, ...rest }) {
  let src = image;
  if (typeof image === 'object') {
    if (image.childImageSharp) {
      // Surely a gatsby image
      return <Image {...image.childImageSharp} alt={alt} {...rest} />;
    }
    src = image.publicURL;
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{ display: 'block', maxWidth: '100%', ...imageStyle }}
      {...rest}
    />
  );
}

export default Img;
