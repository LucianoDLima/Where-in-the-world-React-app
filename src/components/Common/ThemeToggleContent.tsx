import { useTheme } from "../../Context/useTheme";

/**
 * Render the items inside the theme toggle
 * The svg changes color based on current set theme
 *
 * @returns {JSX.Element}
 */
function ThemeToggleContent() {
  const { darkTheme } = useTheme();

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="stroke-text-primary pointer-events-none"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z"
          fill="white"
          strokeWidth={darkTheme ? 0 : 1.5}
        />
      </svg>

      <p className="pointer-events-none text-xs capitalize md:text-base">
        Dark mode
      </p>
    </>
  );
}

export default ThemeToggleContent;
