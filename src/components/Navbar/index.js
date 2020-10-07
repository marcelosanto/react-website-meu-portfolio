import React from 'react'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  FaBars,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements'

export default () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>space</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}
