const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allContentfulBlogs {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
  `);

    if (result.errors) {
        throw result.errors;
    }

    const blogTemplate = path.resolve('./src/templates/blog-post.js');
    // console.log(result.data.allContentfulBlogs)
    result.data.allContentfulBlogs.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.slug}`,
            component: blogTemplate,
            context: {
                id: node.id,
            },
        });
    });
};
