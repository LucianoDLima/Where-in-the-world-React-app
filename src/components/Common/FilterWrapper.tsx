import SelectWrapper from "./SelectWrapper";
import SearchWrapper from "./SearchWrapper";

/**
 * Render the search input and the region selection options
 *
 * @returns {JSX.Element}
 */
function FilterWrapper() {
  return (
    <div className="search-filter-container mx-auto my-6 flex max-w-screen-xl flex-col justify-between gap-6 px-4 sm:flex-row md:my-12 xl:px-0">
      <SearchWrapper />
      <SelectWrapper />
    </div>
  );
}

export default FilterWrapper;