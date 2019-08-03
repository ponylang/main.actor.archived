import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "./layout.css"

const Breadcrumbs = ({pathname}) => {
  const segments = pathname.split('/').filter(val => val !== "").reduce((acc, segment) => {
    if(acc.length < 1) {
      return [[segment, segment]]
    }
    return [...acc, [segment, acc[acc.length-1][1] + '/' + segment]]
  },[]);

  return <ul css={{
    listStyleType: 'none',
    display: 'flex',
        margin:'0 auto',
        marginTop: '-26px',
    maxWidth: '960px',
    padding: '1.45rem 1.0875rem',
    alignItems: 'center',
  }}>{segments.map(([segment, sPath]) => (
    <li css={{
      margin: 0,
      '&:after': {
        content: "'>'",
        margin: '0 1rem'
      }
    }}><Link to={sPath} css={{color: 'rgba(40, 18, 3, 0.82)'}}>{segment}</Link></li>
    )
    )}</ul>

}
const Layout = ({ children, pathname }) => {
const hasBreadcrumbs = pathname && pathname.split('/').length > 1
return  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
                {hasBreadcrumbs && <div css={{    background: 'rgba(40, 18, 3, 0.32)',
    marginBottom: '1.45rem'
  }}>
        <Breadcrumbs pathname={pathname}/>
        </div>}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
