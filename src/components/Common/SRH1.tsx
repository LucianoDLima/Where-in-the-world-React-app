/**
 * H1 for screen readers for better accessibility where a normal h1 would not be used
 *
 * @returns {JSX.Element}
 */
function SRH1() {
  return <h1 className="sr-only">Countries across the world</h1>;
}

export default SRH1;
