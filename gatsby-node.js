exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    const collection = parent.sourceInstanceName;
    createNodeField({
      node,
      name: 'collection',
      value: collection
    });
  }
};
