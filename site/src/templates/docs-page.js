import React from "react"
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"
import processPath from '../process-path'
import Layout from "../components/layout"

export default ({ data, location }) => {

  const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: props => {
      let href = props.href;
      if(!href.startsWith('/') && !href.match(/^https?:\/\//)) {
        const { packageName, version } = data.doc.fields
        href = `/packages/${packageName}/${version}/${processPath(href)}`
        return <Link to={href} {...props}/>
      }
      return <a {...props}/>
    }
  },
}).Compiler

  return <Layout pathname={location.pathname}>{renderAst(data.doc.htmlAst)}</Layout>
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
        packageName: package
        version
      }
    }
  }
`
