import * as React from "react"
import tw from "twin.macro"

import Layout from "../components/layouts/layout"
import Seo from "../components/seo"

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-gray-900 lg:text-white p-2 rounded
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <Button>Activate</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
