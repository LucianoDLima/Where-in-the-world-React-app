// import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, image, to, className, click }: any) => {
  return (
    <Link to={to} className={className}>
      <button className={`main-button `} onClick={click}>
      {/* The style was loading even if no image, which was causing issues, which is why the condition */}
      {image && <img src={image}/>}
        {text}
      </button>
    </Link>
  );
};

export default Button;
