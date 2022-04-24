import * as React from "react"

import Default from "../components/layouts/Default"
import Seo from "../components/seo"
import RealtyTemplate from "../components/templates/RealtyPage"

const RealtyPage = () => {
  const description =
    "Каталог недвижимости в Чехове и Чеховском районе. Покупка и продажа квартир, домов, дач и участков. Юридическое сопровождение сделки. Выплата до 90% рыночной стоимости!"
  return (
    <Default>
      <Seo title="Каталог недвижимости" description={description} />
      <RealtyTemplate />
    </Default>
  )
}

export default RealtyPage
