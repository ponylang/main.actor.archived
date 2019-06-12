const path = require("path")
const processPath = require('./src/process-path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const docsPageTemplate = path.resolve(`src/templates/docs-page.js`)
    const packagePageTemplate = path.resolve(`src/templates/package-page.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            packages: allMarkdownRemark {
              group(field: fields___package) {
                package: fieldValue
              }
            }
            allMarkdownRemark {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      relativePath
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const { relativePath } = node.parent
          
          const processedPath = processPath(relativePath)

          createPage({
            path: `/packages/${processedPath}`,
            component: docsPageTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              id: node.id,
            },
          })
        })

        result.data.packages.group.forEach(({ package }) => {
          createPage({
            path: `/packages/${package}`,
            component: packagePageTemplate,
            context: {
              package,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNode, createNodeField } = actions

  const parent = getNode(node.parent)

  if (
    node.internal.type === "MarkdownRemark" &&
    parent.internal.type === "File"
  ) {
    const [package, version, ...rest] = parent.relativePath.split(path.sep)

    createNodeField({
      node,
      name: `package`,
      value: package,
    })
    createNodeField({ node, name: `version`, value: version })
  }
}
