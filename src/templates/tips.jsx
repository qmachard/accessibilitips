import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/global/Layout";

const Tips = ({data}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout className="index-page" title={frontmatter.title} description="Lorem ipsum" previous="/">
      <div className="container">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default Tips;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`