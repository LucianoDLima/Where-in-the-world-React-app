import { ReactNode } from 'react';

type MainWrapperProps = {
  children: ReactNode;
};

function MainWrapper({ children }: MainWrapperProps) {
  return <main className='mx-auto max-w-screen-xl px-4 text-primary'>{children}</main>;
}

export default MainWrapper;
