import React from "react"
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

export default ({ data }) => {
  return <div>{renderAst(data.doc.htmlAst)}</div>
}

/**
 * If we want to render more data in this template, add it to the query here.
 * any value in the `createPage()` `context` argument will be usable here in
 * the query.
 */
export const query = graphql`
  query DocPageQuery($id: String!) {
    doc: markdownRemark(id: { eq: $id }) {
      htmlAst
      fields {
        package
        version
      }
    }
  }
`
