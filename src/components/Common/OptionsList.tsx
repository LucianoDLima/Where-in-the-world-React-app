/**
 * Render a list of continents as options for selection
 *
 * @returns {JSX.Element}
 */
function OptionsList() {
  const continents = [
    "",
    "All",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];

  return (
    <>
      {continents.map((continent, index) => (
        <option
          key={index}
          disabled={index === 0}
          value={continent}
        >
          {continent}
        </option>
      ))}
    </>
  );
}

export default OptionsList;
