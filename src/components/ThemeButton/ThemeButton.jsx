import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import lightModeIcon from '../../images/dark-mode.svg'
import darkModeIcon from '../../images/light-mode.svg'

const ThemeButton = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  // Toggle button for theme change
  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? '' : 'light-mode')
  }

  return (
    <div className={`theme-container`} onClick={toggleTheme}>
      <img src={theme !== 'light-mode' ? lightModeIcon : darkModeIcon} alt={theme ? 'Light mode icon' : 'Dark mode icon'}/>
      <p>{theme !== 'light-mode' ? 'Dark mode' : 'Light mode'}</p>
    </div>
  )
}

export default ThemeButton