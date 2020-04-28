import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"
 
const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}
 
const PostsPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString()
  const nextUrl = (index + 1).toString()
 
  return (
    <Layout>
    <SEO title="Blog" />
    <div>
      {/* <h4>{pageCount} Pages</h4> */}
      <div class="title-head">
        <h1>Blog</h1>
        <p>Exploring the World of Artificial Intelligence.</p>
      </div>
      <div class="Blog_row" >
        {group.map(({ node }) => (
          <div class="Blog_col">
          <Link to={node.slug}>
            <img src={node.featured_media.source_url} alt={node.featured_media.alt_text} />
            <p class="post-categories">{node.categories[0].slug}</p>
            <p class="post-header">{node.title}</p>
            <div class="post-content" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Link>

          {console.log(node)}
          </div>
        ))}
      </div>
      <div className="Links">
        <NavLink test={first} url={previousUrl} text="Previous Page" />
        <NavLink test={last} url={nextUrl} text="Next Page" />
      </div>
      {/* <div className="previousLink">
        <NavLink test={first} url={`/posts/${previousUrl}`} text="Go to Previous Page" />
        <NavLink test={first} url={previousUrl} text="Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={`/posts/${nextUrl}`} text="Go to Next Page" />
        <NavLink test={last} url={nextUrl} text="Next Page" />
      </div> */}
    </div>
  </Layout>
  )
}
export default PostsPage