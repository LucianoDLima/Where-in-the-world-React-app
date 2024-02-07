import { ComponentPropsWithRef } from 'react';
import SearchIcon from '../../../components/Icons/SearchIcon';

interface SearchLabelProps extends ComponentPropsWithRef<'label'> {}

/**
 * Render the label for the search input
 * The icon image changes color based on theme
 */
function SearchLabel({ htmlFor, ...props }: SearchLabelProps) {
  return (
    <label className='absolute left-7 top-2/4 -translate-y-2/4' htmlFor={htmlFor} {...props}>
      <SearchIcon className='fill-text-primary/75' />
    </label>
  );
}

export default SearchLabel;
