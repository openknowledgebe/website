import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

// normalize CSS across browsers
import '../styles/normalize.css';
// custom CSS styles
import { GlobalStyle } from '../styles/globals';

const Layout = ({ children }) => {
  const { footerData, headerData } = useStaticQuery(graphql`
    query {
      footerData: allMarkdownRemark(filter: { fields: { collection: { eq: "footer" } } }) {
        edges {
          node {
            frontmatter {
              contact {
                heading
                contact_info
              }
              footer_nav {
                label
                to
              }
              attributions
              socials {
                heading
                github
                twitter
                facebook
                linkedin
              }
            }
          }
        }
      }
      headerData: allMarkdownRemark(filter: { fields: { collection: { eq: "header" } } }) {
        edges {
          node {
            frontmatter {
              nav_items {
                label
                to
              }
              logo {
                publicURL
              }
              org_name
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <div id="app">
        <Header
          data={{
            ...headerData.edges[0].node.frontmatter,
            logo: headerData.edges[0].node.frontmatter.logo.publicURL
          }}
        />
        <main>{children}</main>
        <Footer data={footerData.edges[0].node.frontmatter} />
      </div>
    </>
  );
};

export default Layout;

// if you change sizes here, you should also do the same in ../styles/globals.js dimensions object
export const query = graphql`
  fragment GeneralFeaturedImage on FeaturedImage {
    image {
      childImageSharp {
        fluid(maxWidth: 516, fit: CONTAIN) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      extension
      publicURL
    }
    alt
  }

  fragment ActivityFeaturedImage on FeaturedImage {
    image {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    alt
  }

  fragment Picture on Members {
    picture {
      childImageSharp {
        fixed(width: 300, height: 215, fit: INSIDE, grayscale: true) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
      extension
      publicURL
    }
  }

  fragment Logo on Frontmatter {
    logo {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      extension
      publicURL
    }
  }
`;
