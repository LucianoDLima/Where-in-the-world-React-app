type CardDescriptionProps = {
  country: string;
  population: string;
  region: string;
  capital: string;
};

/**
 * Render the country description
 *
 * @param {CardDescriptionProps} props
 * @returns {JSX.Element}
 */
function CardDescription({
  country,
  population,
  region,
  capital,
}: CardDescriptionProps) {
  const descriptions = [
    { label: "Population", value: population },
    { label: "Region", value: region },
    { label: "Capital", value: capital },
  ];

  return (
    <div className="px-6">
      <h2 className="mb-4 text-lg font-semibold">{country}</h2>

      <div className="flex flex-col gap-1 text-sm">
        {descriptions.map((description, index) => (
          <p
            key={index}
            className={`font-semibold ${index === descriptions.length - 1 ? "mb-6" : null}`}
          >
            {description.label}: <span>{description.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default CardDescription;
