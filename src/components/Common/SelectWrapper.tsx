import SelectionControl from "../Controls/SelectionControl";

/**
 * Render the select with the sorting options
 *
 * @returns {JSX.Element}
 */
function SelectWrapper() {
  return (
    <div className="shadow-foggy relative w-full max-w-36 text-primary md:max-w-48 md:leading-7">
      <SelectionControl />
    </div>
  );
}

export default SelectWrapper;
