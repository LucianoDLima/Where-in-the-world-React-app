/**
 * Props for the SelectLabel component
 *
 * @property {string} label - Label text
 * @property {string} htmlFor - Labels id target
 */
type SelectLabelProps = {
  label: string;
  htmlFor: string;
};

/**
 * Render the label and arrow icon for the filter control
 *
 * @param {SelectLabelProps} props
 * @returns {JSX.Element}
 */
function SelectLabel({ label, htmlFor }: SelectLabelProps) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="filter-title pointer-events-none absolute left-7 top-2/4 -translate-y-2/4 text-xs md:text-sm"
      >
        <p>{label}</p>
      </label>

      <div className="filter-arrow-icon pointer-events-none absolute right-3 top-2/4 -translate-y-2/4 md:right-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="fill-text-primary"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
          />
        </svg>
      </div>
    </>
  );
}

export default SelectLabel;
