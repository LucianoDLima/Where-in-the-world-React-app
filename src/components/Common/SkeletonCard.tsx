/**
 * Render a skeleton loading animation
 *
 * @returns {JSX.Element}
 */
function SkeletonCard() {
  const descriptionSkeles = [
    {
      className: `h-4 rounded-full bg-loading w-[90%]`,
    },
  ];

  return (
    <div className="flex w-full max-w-72 flex-col overflow-hidden rounded-md bg-primary text-primary shadow-foggy md:max-w-64">
      <div className="mb-10 h-40">
        <div className="flex h-full w-full animate-pulse items-center justify-center">
          <svg
            className="h-10 w-10 text-primary/60 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>

      <div className="animate-pulse px-6">
        <div className="mb-4 h-5 rounded-full bg-loading"></div>

        <div className="flex flex-col gap-2 text-sm">
          {Array.from({ length: 3 }).map((_, index, array) =>
            descriptionSkeles.map((skele, i) => (
              <span
                key={i}
                className={`${skele.className}${i === descriptionSkeles.length - 1 && index === array.length - 1 ? " mb-10" : ""}`}
              ></span>
            )),
          )}
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
