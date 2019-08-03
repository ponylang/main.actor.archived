import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <div>
        <h1>{pageContext.package}</h1>
        <ul>
          {data.versions.group.map(({ version }) => (
            <li key={version}>
              <Link to={`/packages/${pageContext.package}/${version}`}>
                {version}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

/**
 * If we want to render more data in this template, add it to the query here.
 * any value in the `createPage()` `context` argument will be usable here in
 * the query.
 */
export const query = graphql`
  query PackagePageQuery($package: String!) {
    versions: allMarkdownRemark(
      filter: { fields: { package: { eq: $package } } }
    ) {
      group(field: fields___version) {
        version: fieldValue
      }
    }
  }
`
