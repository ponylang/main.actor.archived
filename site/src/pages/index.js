import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`ponylang`]} />
    <h2>Packages</h2>
    <div css={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ul>
        {data.allMarkdownRemark.group.map(({ fieldValue }) => (
          <li key={fieldValue}>
            <Link to={`/packages/${fieldValue}`}>{fieldValue}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    allMarkdownRemark {
      group(field: fields___package) {
        fieldValue
      }
    }
  }
`
