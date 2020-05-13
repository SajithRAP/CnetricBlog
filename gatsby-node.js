const path = require(`path`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query pageQuery {
      allWordpressPost(
        sort: { order: ASC, fields: [date] },
        filter: { 
          categories: {
            elemMatch: {
              name: {ne: "In The News"}
            }
          },
          slug: { ne: "null" } 
        }
      ){
        edges {
          node {
            title
            excerpt
            slug
            categories {
              slug
            }
            featured_media {
              source_url
              alt_text
              localFile {
                childImageSharp {
                  fluid {
                    originalImg
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    // createPaginatedPages({
    //   edges: result.data.allWordpressPost.edges,
    //   createPage: createPage,
    //   pageTemplate: 'src/templates/posts.js',
    //   pageLength: 5, // This is optional and defaults to 10 if not used
    //   pathPrefix: 'posts', // This is optional and defaults to an empty string if not used
    //   context: {}, // This is optional and defaults to an empty object if not used
    // })
    createPaginatedPages({
      edges: result.data.allWordpressPost.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: 6, // This is optional and defaults to 10 if not used
      pathPrefix: '', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}