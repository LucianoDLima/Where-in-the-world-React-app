import { ComponentPropsWithRef } from 'react';
import SmallArrowIcon from '../../../components/Icons/SmallArrowIcon';

interface SelectLabelProps extends ComponentPropsWithRef<'label'> {
  label: string;
}

/**
 * Render the label and arrow icon for the filter control
 */
function SelectLabel({ label, htmlFor }: SelectLabelProps) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className='filter-title pointer-events-none absolute left-7 top-2/4 -translate-y-2/4 text-xs md:text-sm'
      >
        <p>{label}</p>
      </label>

      <div className='filter-arrow-icon pointer-events-none absolute right-3 top-2/4 -translate-y-2/4 md:right-7'>
        <SmallArrowIcon className='fill-text-primary' />
      </div>
    </>
  );
}

export default SelectLabel;
