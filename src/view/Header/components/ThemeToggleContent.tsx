import ThemeIcon from '../../../components/Icons/ThemeIcon';

/**
 * Render the items inside the theme toggle
 * The svg changes color based on current set theme
 */
function ThemeToggleContent() {
  return (
    <>
      <ThemeIcon className='pointer-events-none stroke-text-primary' />
      <p className='pointer-events-none text-xs capitalize md:text-base'>Dark mode</p>
    </>
  );
}

export default ThemeToggleContent;
