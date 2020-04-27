import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../components/post.css"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <div class="post-page">
        <div class="post-image text_center">
          <img src={post.featured_media.source_url} alt={post.featured_media.alt_text} />
        </div>
        <p class="post-category text_center">{post.categories[0].slug}</p>
        <h1 class="post-title text_center">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          featured_media {
            source_url
            alt_text
          }
          categories {
            slug
          }
        }
      }
    }
  }
`