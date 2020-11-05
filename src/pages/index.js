import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Newsletter from '../components/Newsletter';

const BlogIndex = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <div className="hero-copy">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget tellus eget orci
            viverra facilisis sed nec erat. Donec nec sem sodales, cursus risus non, aliquam massa.
            Proin mauris sapien, sollicitudin vitae imperdiet et, rutrum sit amet libero.
          </p>
          <Link to="/teams" className="unstyled-link bold6 underlined">
            <span>Get to know as</span>
          </Link>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/516x336" alt="placeholder" />
        </div>
      </section>
      <Newsletter />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
