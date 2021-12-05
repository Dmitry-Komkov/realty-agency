import * as React from "react"
import HeaderMid from "./HeaderMid"
import HeaderTop from "./HeaderTop"
import HeaderBottom from './HeaderBottom';

const Header = () => {
  const [mobMenuOpen, setMobMenuOpen] = React.useState(false)

  return (
    <header>
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom toggleMenu={setMobMenuOpen} menu={mobMenuOpen} />
    </header>
  )
}

export default Header
