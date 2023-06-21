import { Link } from "gatsby"
import * as React from "react"

import Default from "../components/layouts/Default"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Default>
    <Seo title="404: Страница не найдена" />
    <h1>404: Страница не найдена</h1>
    <p>
      Вы только что перешли по ссылке, которой не существует. Попробуйте начать{" "}
      <Link to="/">сначала</Link>.
    </p>
  </Default>
)

export default NotFoundPage
