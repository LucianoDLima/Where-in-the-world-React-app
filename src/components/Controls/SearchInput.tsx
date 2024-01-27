import { ChangeEvent, useState } from "react";
import { useFilterContext } from "../../context/useFilters";

/**
 * Props for the SearchInput
 *
 * @property {string} id - Labels target
 */
type SearchInputProps = {
  id: string;
};

/**
 * Handle the user search input
 *
 * Responsabilities:
 * - Stores what the user types in the search input
 * - Uses the stored input to search in the already retrieved data (if available)
 * - If no data has been retrieved, triggers a fetch request based for the stored input
 *
 * @returns {JSX.Element}
 */
function SearchInput({ id }: SearchInputProps) {
  const { setFilter } = useFilterContext();

  function handleUserInput(e: ChangeEvent<HTMLInputElement>): void {
    const inputValue = e.target.value;

    setFilter((prev) => ({
      ...prev,
      search: inputValue,
    }));
  }

  return (
    <input
      type="search"
      className="w-full rounded-sm bg-primary px-16 py-4 text-xs placeholder:text-inherit md:px-20 md:py-5 md:text-sm"
      placeholder="Search for a country..."
      id={id}
      onChange={handleUserInput}
    />
  );
}

export default SearchInput;
