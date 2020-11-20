const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    const collection = parent.sourceInstanceName;

    if (collection === 'post') {
      const slug = createFilePath({
        node,
        getNode,
        basePath: `content/stories/articles`,
        trailingSlash: false
      });
      createNodeField({
        node,
        name: `slug`,
        value: `/stories${slug}`
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
  const Post = require.resolve(`./src/templates/Post.jsx`);
  const result = await graphql(`
    {
      posts: allMarkdownRemark(filter: { fields: { collection: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              title
              date
              author
            }
            excerpt(pruneLength: 304)
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

  const { posts } = result.data;
  posts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: Post,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug
      }
    });
  });
};
