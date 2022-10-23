import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

function Header() {
  return (
    <Navbar
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="./logo.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
      Quiz App
    </NavbarBrand>
  </Navbar>
  )
}

export default Header