import * as React from "react"
import HeaderMid from "./HeaderMid"
import HeaderTop from "./HeaderTop"
import HeaderBottom from './HeaderBottom';

const Header = () => {

  return (
    <header>
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom />
    </header>
  )
}

export default Header
