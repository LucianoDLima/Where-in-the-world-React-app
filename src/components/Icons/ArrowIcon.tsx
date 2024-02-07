import { ComponentPropsWithoutRef } from 'react';

interface ArrowIconProps extends ComponentPropsWithoutRef<'svg'> {}

function ArrowIcon({ ...props }: ArrowIconProps) {
  return (
    <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g id='call-made'>
        <path
          id='Shape'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z'
        />
      </g>
    </svg>
  );
}

export default ArrowIcon;
