import { ChangeEvent, useState } from "react";
import SelectLabel from "../Common/SelectLabel";
import OptionsList from "../Common/OptionsList";

/**
 * Handle sorting/filtering the countries based on the options provided
 *
 * @returns {JSX.Element}
 */
function SelectionControl() {
  const [currentOption, setCurrenOption] = useState<string | undefined>();
  const labelTarget = "country-options";

  function handleLabel(e: ChangeEvent<HTMLSelectElement>): void {
    setCurrenOption(e.target.value);
    console.log(e.bubbles);
  }

  return (
    <>
      <SelectLabel
        label={currentOption ? "" : "Filter by Region"}
        htmlFor={labelTarget}
      />

      <select
        className="w-full appearance-none rounded-sm bg-primary py-3 ps-5 md:py-4 "
        autoComplete="off"
        id={labelTarget}
        defaultValue=""
        onChange={handleLabel}
      >
        <OptionsList />
      </select>
    </>
  );
}

export default SelectionControl;
