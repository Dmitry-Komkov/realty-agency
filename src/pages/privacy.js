import * as React from "react"

import Default from "../components/layouts/Default"
import Seo from "../components/seo"
import PrivacyTemplate from "../components/templates/PrivacyTemplate"

const PrivacyPage = () => (
  <Default>
    <Seo title="Политика конфиденциальности" />
    <PrivacyTemplate />
  </Default>
)

export default PrivacyPage
