import React from 'react'
import { StyledNavBar } from '../styles/NavBar.style'
import { StyledNavLink } from '../styles/NavLink.style'

export const NavBar = () => {

  return (
    <StyledNavBar>
      <StyledNavLink to='/'>Editor</StyledNavLink>
      <StyledNavLink to='preview'>Preview</StyledNavLink>
      <StyledNavLink to='help'>Help</StyledNavLink>
    </StyledNavBar>
  )
}
