import { Link } from "react-router-dom";
import ThemeToggle from "../Controls/ThemeToggle";

/**
 * Render the content inside the header section
 *
 * @returns {JSX.Element}
 */
function HeaderContent() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl justify-between px-4">
      <Link
        to="./"
        className="text-center text-sm font-semibold md:text-2xl md:font-extrabold"
      >
        Where in the world?
      </Link>

      <ThemeToggle />
    </div>
  );
}

export default HeaderContent;
