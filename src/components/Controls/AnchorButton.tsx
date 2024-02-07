// import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from '../Icons/ArrowIcon';
import { ComponentPropsWithoutRef } from 'react';

interface AnchorButtonProps extends ComponentPropsWithoutRef<'svg'> {
  text: string;
  hasIcon: boolean;
  to: string;
}

const AnchorButton = ({ text, hasIcon, to }: AnchorButtonProps) => {
  return (
    <Link
      to={to}
      className='flex max-w-24 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 shadow-foggy'
    >
      {hasIcon && <ArrowIcon className='w-5 fill-text-primary' />}
      <p className='text-sm '>{text}</p>
    </Link>
  );
};

export default AnchorButton;
