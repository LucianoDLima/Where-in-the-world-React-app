// import React, { useContext } from 'react';
// import { ThemeContext } from '../../context/ThemeContext';
// import lightModeIcon from '../../images/dark-mode.svg';
import darkModeIcon from '../../images/light-mode.svg';

const ThemeButton = () => {
  // const { theme, setTheme } = useContext(ThemeContext);

  // Toggle button for theme change
  // const toggleTheme = () => {
  //   setTheme(theme ? '' : 'light-mode');
  // };
  // Toggle button activate if you press Enter key too
  // const toggleThemeOnEnter = (e) => e.key === 'Enter' ? toggleTheme() : null
  

  return (
    <div
      className={`theme-container`}
      // onClick={toggleTheme}
      // onKeyDown={toggleThemeOnEnter}
      // tabIndex="0"
    >
      <img
        src={darkModeIcon}
      />
      <p>darkmode</p>
    </div>
  );
};

export default ThemeButton;
