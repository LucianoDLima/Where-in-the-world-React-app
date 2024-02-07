import { useTheme, useThemeUpdate } from '../../context/useTheme';
import ThemeToggleContent from '../../view/Header/components/ThemeToggleContent';

/**
 * Render the theme toggle
 * Responsible for switching between existing themes
 */
function ThemeToggle() {
  const { darkTheme } = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <button
      className='flex items-center gap-2'
      onClick={toggleTheme}
      aria-label={`${darkTheme ? 'Dark mode' : 'Light mode'} on. Change to ${darkTheme ? 'light theme' : 'dark theme'}`}
    >
      <ThemeToggleContent />
    </button>
  );
}

export default ThemeToggle;
