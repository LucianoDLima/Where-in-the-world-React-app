/**
 * Render a list of continents as options for selection
 */
function OptionsList() {
  const continents = ['', 'All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <>
      {continents.map((continent, index) => (
        <option key={index} disabled={index === 0} value={continent}>
          {continent}
        </option>
      ))}
    </>
  );
}

export default OptionsList;
