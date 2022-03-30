import React from 'react'
import { StyledNavBar } from '../styles/NavBar.style'
import { StyledNavLink } from '../styles/NavLink.style'

export const NavBar = () => {

  const style = {
    color: 'green',
    fontWeight: 'bold'
}
  return (
    <StyledNavBar>
      <StyledNavLink activeStyle={style} to='/'>Editor</StyledNavLink>
      <StyledNavLink activeStyle={style} to='preview'>Preview</StyledNavLink>
      <StyledNavLink activeStyle={style} to='help'>Help</StyledNavLink>
    </StyledNavBar>
  )
}
