import React, {useState} from 'react'

function Dropdown() {
  const [state, setState] = useState(false)

  const showDropdown = () => {
    setState(true);
  }

  const hideDropdown = () => {
    setState(false);
  }
  return (
    <div className='dropdown'>
      <div className='dp-menu' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        Dropdown
        {state ? (
          <ul className='dp-list' onMouseEnter={showDropdown}>
            <li>Open</li>
            <li>Save</li>
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default Dropdown