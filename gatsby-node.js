const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const realtyTemplate = path.resolve(
    `./src/components/templates/SingleRealty.js`
  )
  const categoryTemplate = path.resolve(
    `./src/components/templates/CategoryPage.js`
  )

  const result = await graphql(
    `
      {
        allStrapiRealties {
          nodes {
            strapiId
            id
            category {
              slug
              name
            }
          }
        }
        allStrapiCategories {
          nodes {
            id
            slug
            name
            strapiId
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
      },
    })
  })

  result.data.allStrapiCategories.nodes.forEach(cat => {
    const path = `/realty/${cat.slug}/`
    createPage({
      path,
      component: categoryTemplate,
      context: {
        id: cat.strapiId,
        slug: cat.slug,
      }
    })
  })
}
