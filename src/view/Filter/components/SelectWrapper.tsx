import SelectionControl from '../../../components/Controls/SelectionControl';

/**
 * Render the select with the sorting options
 */
function SelectWrapper() {
  return (
    <div className='relative w-full max-w-36 text-primary shadow-foggy md:max-w-48 md:leading-7'>
      <SelectionControl />
    </div>
  );
}

export default SelectWrapper;
