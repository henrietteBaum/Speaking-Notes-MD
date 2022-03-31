import React from 'react'
import { StyledNavBar } from '../styles/NavBar.style'
import { StyledNavLink } from '../styles/NavLink.style'
import Dropdown from './Dropdown'

export const NavBar = () => {

  return (
    <StyledNavBar>
      <StyledNavLink to='/'>Editor</StyledNavLink>
      <StyledNavLink to='preview'>Preview</StyledNavLink>
      <StyledNavLink to='help'>Help</StyledNavLink>
      <Dropdown />
    </StyledNavBar>
  )
}