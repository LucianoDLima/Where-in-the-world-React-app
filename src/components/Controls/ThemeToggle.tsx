import { useTheme, useThemeUpdate } from "../../Context/useTheme";
import ThemeToggleContent from "../Common/ThemeToggleContent";

/**
 * Render the theme toggle
 * Responsible for switching between existing themes
 *
 * @returns {JSX.Element}
 */
function ThemeToggle() {
  const { darkTheme } = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <button
      className="flex items-center gap-2"
      onClick={toggleTheme}
      aria-label={`Change to ${darkTheme ? "dark theme" : "light theme"}`}
    >
      <ThemeToggleContent />
    </button>
  );
}

export default ThemeToggle;
