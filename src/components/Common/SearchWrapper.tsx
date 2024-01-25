import SearchInput from "../Controls/SearchInput";
import SearchLabel from "./SearchLabel";

/**
 * Render the search component
 *
 * @returns {JSX.Element}
 */
function SearchWrapper() {
  const labelsTarget = "search";

  return (
    <div className="shadow-foggy relative w-full max-w-md text-primary ">
      <SearchLabel htmlFor={labelsTarget} srLabel="Search for a country" />
      <SearchInput id={labelsTarget} />
    </div>
  );
}

export default SearchWrapper;
