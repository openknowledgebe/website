/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
`;

export default StyledImg;

export const Img = ({ image, ...rest }) => {
  if (typeof image === 'object') {
    // Surely a gatsby image
    return <Image {...image} {...rest} />;
  }

  return <StyledImg src={image} {...rest} />;
};
