const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    const collection = parent.sourceInstanceName;

    // Create slug for a story
    if (collection === 'story') {
      const slug = createFilePath({
        node,
        getNode,
        basePath: `content/stories`,
        trailingSlash: false
      });
      createNodeField({
        node,
        name: `slug`,
        value: `/stories${slug}`
      });

      createNodeField({
        node,
        name: `o_slug`,
        value: `${slug.substring(1)}`
      });
    }

    // Create slug for an activity
    if (collection === 'activity') {
      const slug = createFilePath({
        node,
        getNode,
        basePath: `content/activities`,
        trailingSlash: false
      });
      createNodeField({
        node,
        name: `slug`,
        value: `/activities${slug}`
      });

      createNodeField({
        node,
        name: `o_slug`,
        value: `${slug.substring(1)}`
      });
    }

    createNodeField({
      node,
      name: 'collection',
      value: collection
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const Story = require.resolve(`./src/templates/Story.jsx`);
  const Activity = require.resolve(`./src/templates/Activity.jsx`);
  const result = await graphql(`
    {
      stories: allMarkdownRemark(filter: { fields: { collection: { eq: "story" } } }) {
        edges {
          node {
            frontmatter {
              title
              date
              author
              tags
            }
            excerpt(pruneLength: 304)
            html
            fields {
              slug
            }
          }
        }
      }
      activities: allMarkdownRemark(filter: { fields: { collection: { eq: "activity" } } }) {
        edges {
          node {
            frontmatter {
              name
              to
              catchphrase
              featured_image {
                image
                alt
              }
              contact_info {
                email
                socials {
                  github
                  twitter
                  facebook
                  linkedin
                }
              }
              members {
                name
                task
                picture
                id
                contact_info {
                  email
                  twitter
                  linkedin
                }
              }
              tags
            }
            excerpt
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { stories, activities } = result.data;
  stories.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: Story,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug
      }
    });
  });
  activities.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: Activity,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug
      }
    });
  });
};

// Define some fields to avoid breaking the website
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      contact_info: ContactInfo
      members: [Members]
      tags: [String]
      featured_image: FeaturedImage
      header: Header
      team: [Members]
      directors: [Members]
      stories: Stories
    }

    type Header {
      featured_image: FeaturedImage
    }

    type Stories {
      featured_image: FeaturedImage
    }

    type Members {
      id: ID
      picture: String
      task: String
      contact_info: ContactInfo
    }

    type ContactInfo {
      twitter: String
      linkedin: String
      socials: Socials
    }

    type Socials {
      github: String
      twitter: String
      facebook: String
      linkedin: String
    }

    type FeaturedImage {
      alt: String
    }
  `;
  createTypes(typeDefs);
};
