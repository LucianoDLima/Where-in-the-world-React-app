import SelectWrapper from './components/SelectWrapper';
import SearchWrapper from './components/SearchWrapper';

/**
 * Render the search input and the region selection options
 */
function FilterWrapper() {
  return (
    <div className='mx-auto my-6 flex max-w-screen-xl flex-col justify-between gap-6 px-4 sm:flex-row md:my-12'>
      <SearchWrapper />
      <SelectWrapper />
    </div>
  );
}

export default FilterWrapper;
