import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({ theme: 'light-mode', setTheme: () => {} });

export const ThemeProvider = ({ children }) => {
  // Get theme preference from local storage
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || ''
  );

  // Update local storage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Update theme when user changes theme preferences in browser or device settings. Empty string is the dark mode, I set it as default because no one deserves to have their eyes burned
  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setTheme(e.matches ? '' : 'light-mode');
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
