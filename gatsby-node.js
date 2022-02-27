const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const realtyTemplate = path.resolve(`./src/components/templates/RealtyPage.js`)

  const result = await graphql(
    `
      {
        allStrapiRealties {
          nodes {
            strapiId
            category {
              slug
              name
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  result.data.allStrapiRealties.nodes.forEach(realty => {
    const path = `/realty/${realty.category.slug}/${realty.strapiId}/`
    createPage({
      path,
      component: realtyTemplate,
      context: {
        id: realty.strapiId,
      }
    })
  })
}