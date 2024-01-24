import { Outlet } from "react-router-dom";
import HeaderContent from "../../components/Common/HeaderContent";

/**
 * Render the header section
 * Outlet allows the router to render other components without re-rendering the header
 *
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <>
      <header className="mb-6 bg-primary px-4 py-7 text-primary shadow-[0px_3px_5px_0px_rgba(0,0,0,0.15)] md:mb-12 md:px-20 md:py-6">
        <HeaderContent />
      </header>

      <Outlet />
    </>
  );
}

export default Header;
