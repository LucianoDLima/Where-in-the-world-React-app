import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, image, to }) => {
  return (
    <Link to={to}>
      <button className="main-button">
      {/* The style was loading even if no image, which was causing issues, which is why the condition */}
      {image && <img src={image}/>}
        {text}
      </button>
    </Link>
  );
};

export default Button;
