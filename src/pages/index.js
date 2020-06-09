import React from 'react';
import * as PropTypes from 'prop-types';
import { graphql } from "gatsby"

import Layout from '../components/global/Layout';
import Card from "../components/molecules/Card";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // const Tips = edges
  //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map(edge => <Card key={edge.node.id}  />)
  const tips = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => ({
      id: edge.node.id,
      title: edge.node.frontmatter.title,
      link: edge.node.frontmatter.slug
    }));

  return (
    <Layout className="index-page" title="Accessibili'Tips" description="Lorem ipsum">
      <div className="container">
        {
          tips.map(tip => <Card key={tip.id} title={tip.title} link={tip.link} />)
        }
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

export default IndexPage;
