// import React from 'react';
import { Link } from "react-router-dom";
import AnchorArrow from "../Common/AnchorArrow";

type AnchorButtonProps = {
  text: string;
  hasIcon: boolean;
  to: string;
};

const AnchorButton = ({ text, hasIcon, to }: AnchorButtonProps) => {
  return (
    <Link
      to={to}
      className="flex max-w-24 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 shadow-foggy"
    >
      {hasIcon && <AnchorArrow />}
      <p className="text-sm ">{text}</p>
    </Link>
  );
};

export default AnchorButton;
