import React from 'react'
import Theme from './Theme'

function Header({isDarkMode,setDarkMode}) {
  return (
    <div>
        <Theme
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        />
    </div>
  )
}

export default Header;