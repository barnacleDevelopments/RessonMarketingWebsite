// In your gatsby-node.js file
const path = require("path");
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  function genPostPage(node, post) {
    createPage({
      path: `${node.fields.slug}`,
      component: path.resolve(`src/templates/article.tsx`),
      context: {
        title: post.title,
        slug: node.fields.slug
      }
    });
  }

  const postsResult = graphql(`
    query ArticleQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              content
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(results.errors)
    }
    // generate individual pages for each post
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const post = node.frontmatter;
      genPostPage(node, post)
    });
  })

  return Promise.all([postsResult])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    let path;
    if (node.frontmatter.path) {
      path = node.frontmatter.path;
    } else {
      path = createFilePath({ node, getNode });
    }

    createNodeField({
      name: `slug`,
      node,
      value: path,
    });
  }
};