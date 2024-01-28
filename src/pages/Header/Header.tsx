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
      <header className="bg-primary py-7 text-primary shadow-soft">
        <HeaderContent />
      </header>

      <Outlet />
    </>
  );
}

export default Header;
