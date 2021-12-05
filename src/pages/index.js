import * as React from "react"

import Default from "../components/layouts/Default"
import Seo from "../components/seo"

const IndexPage = () => (
  <Default>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Default>
)

export default IndexPage
