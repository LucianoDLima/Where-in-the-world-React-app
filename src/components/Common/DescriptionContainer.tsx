import { ReactNode } from "react";

type DescriptionContainerProps = {
  title: string;
  titleSize?: string;
  children: ReactNode;
  containerPadding?: string;
};

/**
 * Render container for the description content
 *
 * @param {DescriptionContainerProps} props
 * @returns {JSX.Element}
 */
function DescriptionContainer({
  title,
  titleSize,
  children,
  containerPadding,
}: DescriptionContainerProps) {
  return (
    <div
      className={`w-full pb-10 pt-6 ${containerPadding ? containerPadding : "px-6"} mx-auto max-w-[28rem]`}
    >
      <h2 className={`mb-4 font-semibold ${titleSize ? titleSize : "text-lg"}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default DescriptionContainer;
