import React, {useState} from 'react'
import { StyledUl, StyledList, StyledDropdown, StyledDpContainer } from '../styles/Dropdown.style'

function Dropdown() {
  const [state, setState] = useState(false)

  const showDropdown = () => {
    setState(true);
  }

  const hideDropdown = () => {
    setState(false);
  }
  return (
    <StyledDpContainer>
      <StyledDropdown onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        File
        {state ? (
          <StyledUl onMouseEnter={showDropdown}>
            <StyledList>Open</StyledList>
            <StyledList>Save</StyledList>
          </StyledUl>
        ) : null}
      </StyledDropdown>
    </StyledDpContainer>
  )
}

export default Dropdown