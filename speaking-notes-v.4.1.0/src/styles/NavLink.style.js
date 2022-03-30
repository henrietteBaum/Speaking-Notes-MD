import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: whitesmoke;
  padding-right: 16px;
  padding-left: 16px;
  text-decoration: none;

  &:hover {
    color: yellow;
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
    color: orange;
    text-decoration: underline;
  }

`