import { ChangeEvent } from "react";
import SelectLabel from "../Layout/Filter/SelectLabel";
import OptionsList from "../Layout/Filter/OptionsList";
import { useDataFilterContext } from "../../context/useDataFilter";

/**
 * Handle sorting/filtering the countries based on the options provided
 *
 * @returns {JSX.Element}
 */
function SelectionControl() {
  const labelTarget = "country-options";
  const { filter, setFilter } = useDataFilterContext();

  function handleLabel(e: ChangeEvent<HTMLSelectElement>): void {
    const selectionValue = e.target.value;

    setFilter((prev) => ({
      ...prev,
      select: selectionValue,
    }));
  }

  return (
    <>
      <SelectLabel
        label={filter.select !== undefined ? "" : "Filter by Region"}
        htmlFor={labelTarget}
      />

      <select
        className="w-full appearance-none rounded-sm bg-primary py-3 ps-5 md:py-4 "
        autoComplete="off"
        id={labelTarget}
        defaultValue={filter.select !== undefined ? filter.select : ""}
        onChange={handleLabel}
      >
        <OptionsList />
      </select>
    </>
  );
}

export default SelectionControl;
