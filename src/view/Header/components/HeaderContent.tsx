import ThemeToggle from '../../../components/Controls/ThemeToggle';

/**
 * Render the content inside the header section
 */
function HeaderContent() {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl justify-between px-4'>
      <a href='./' className='text-center text-sm font-semibold md:text-2xl md:font-extrabold'>
        Where in the world?
      </a>

      <ThemeToggle />
    </div>
  );
}

export default HeaderContent;
