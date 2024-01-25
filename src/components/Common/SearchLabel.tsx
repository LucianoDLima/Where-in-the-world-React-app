/**
 * Props for the SearchLabel component
 *
 * @property {string} htmlFor - Label's target
 * @property {string} srLabel - Text for screen readers
 */
type SearchLabelProps = {
  htmlFor: string;
  srLabel: string;
};

/**
 * Render the label for the search input
 * The icon image changes color based on theme
 *
 * @returns {JSX.Element}
 */
function SearchLabel({ htmlFor, srLabel }: SearchLabelProps) {
  return (
    <label
      className="absolute left-7 top-2/4 -translate-y-2/4"
      htmlFor={htmlFor}
      aria-label={srLabel}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="fill-text-primary/75"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
        />
      </svg>
    </label>
  );
}

export default SearchLabel;
