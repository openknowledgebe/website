import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../../styles/globals';

// Nasty workaround to make Styled Components work with the custom preview
function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <>
          <GlobalStyle />
          {children}
        </>
      </StyleSheetManager>
    )
  );
}
StyleInjector.propTypes = {
  children: PropTypes.node.isRequired
};
export default StyleInjector;
