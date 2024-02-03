interface ListItems {
  label: string;
  value: string | string[];
}

type DescriptionContent = {
  list: ListItems[];
};

/**
 * Render a list of texts that go inside the description container
 *
 * @param {DescriptionContent} props
 * @returns {JSX.Element}
 */
function DescriptionContent({ list }: DescriptionContent) {
  return (
    <ul className="grid text-sm font-semibold @[28rem]:grid-cols-2 @[40rem]:gap-x-2">
      {list.map((item, index) => (
        <li
          key={index}
          className={`capitalize ${index === list.length - 1 ? "" : "mb-2"}`}
        >
          {item.label}
          <span className="font-thin normal-case">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}

export default DescriptionContent;
