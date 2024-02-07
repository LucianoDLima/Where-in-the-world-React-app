import HeaderContent from "../components/Layout/Header/HeaderContent";

/**
 * Render the header section
 *
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <>
      <header className="bg-primary py-7 text-primary shadow-soft">
        <HeaderContent />
      </header>
    </>
  );
}

export default Header;
