const { createFilePath } = require(`gatsby-source-filesystem`)

const chapterPath = `${__dirname}/content/chapters/`

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const parentFolderName = node.fileAbsolutePath.replace(chapterPath, "").replace("README.md", "")

    const defaultFilePath = createFilePath({ node, getNode, basePath: `pages` })
    const parts = defaultFilePath.split("/")
    const filename = parts[parts.length - 2]

    const filePath = filename === "README" ? `/${parentFolderName}` : `/${parentFolderName}${filename}.md`
    createNodeField({
      node,
      name: `slug`,
      value: filePath
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const chapterTemplate = require.resolve(`./src/templates/chapterTemplate.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields { 
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: chapterTemplate,
      context: {
        slug: node.fields.slug
      }
    })
  })
}
