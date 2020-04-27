import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"

export default ({ data }) => {  
  return (
    <Layout>
      <SEO title="Blog" />
      <div class="title-head">
        <h1>Blog</h1>
        <p>Exploring the World of Artificial Intelligence.</p>
      </div>
      <div class="Blog_row" >
        {data.allWordpressPost.edges.map(({ node }) => (
          <div class="Blog_col" key={node.slug}>
            <Link to={node.slug}>
              <img src={node.featured_media.source_url} alt={node.featured_media.alt_text} />
              <p class="post-categories">{node.categories[0].slug}</p>
              <p class="post-header">{node.title}</p>
              <div class="post-content" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
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
          }
        }
      }
    }
  }
`