import React from "react"
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"
import processPath from '../process-path'
import Layout from "../components/layout"

import hljs from 'highlight.js/lib/highlight';
import pony from 'highlight.js/lib/languages/pony';
hljs.registerLanguage('pony', pony)
hljs.registerLanguage('pony-full-source', pony)

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
    },
    pre: ({children, ...props}) => {
      if(children && children.length === 1 && Boolean(children[0].props.className)){
        const codeElement = children[0]

        const codeLanguage = codeElement.props.className.match(/language-([\0-\uFFFF]*)/);

        if(codeLanguage !== null) {
          try {
                    const codeString = hljs.highlight(codeLanguage[1], codeElement.props.children.toString()).value
                    return <pre {...props}>
                      <code dangerouslySetInnerHTML={{__html: codeString}}></code>
                    </pre>}
                    catch (e) {
                                const codeString = hljs.highlightAuto(codeElement.props.children.toString()).value
          return <pre {...props}>
            <code dangerouslySetInnerHTML={{__html: codeString}}></code>
          </pre>
                    }
        } else {
          const codeString = hljs.highlightAuto(codeElement.props.children.toString()).value
          return <pre {...props}>
            <code dangerouslySetInnerHTML={{__html: codeString}}></code>
          </pre>
        }

      } else {
          return <pre {...props}/>
      }
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
