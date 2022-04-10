import * as React from "react"

import Default from "../components/layouts/Default"
import Seo from "../components/seo"
import RealtyTemplate from '../components/templates/RealtyPage';

const RealtyPage = () => (
  <Default>
    <Seo title="Каталог недвижимости" />
    <RealtyTemplate />
  </Default>
)

export default RealtyPage
