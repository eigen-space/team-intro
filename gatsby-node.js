/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    const config = getConfig();
    if (stage.startsWith('develop') && config.resolve) {
        config.resolve.alias = { ...config.resolve.alias, 'react-dom': '@hot-loader/react-dom' };
    }
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path,
                  header
                }
              }
            }
          }
        }
    `);

    if (result.errors) {
        // eslint-disable-next-line no-console
        console.error(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            header: node.frontmatter.header,
            component: path.resolve('src/pages/index.tsx')
        });
    });
};
