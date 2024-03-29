import * as React from "react"

import Default from "../components/layouts/Default"
import Seo from "../components/seo"
import HomePage from "../components/templates/HomePage"

const IndexPage = () => (
  <Default>
    <Seo title="Агентство недвижимости «ФАВОРИТ» в Чехове" />
    <HomePage />
  </Default>
)

export default IndexPage
