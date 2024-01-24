// import React, { useContext } from 'react'
import Button from '../../components/Button/Button'
import arrowLight from '../../images/pointer-arrow-light.svg';
// import arrowDark from '../../images/pointer-arrow-dark.svg';
// import { ThemeContext } from '../../context/ThemeContext';

const Error = () => {
  // const {theme} = useContext(ThemeContext)
  return (
    <>
    <Button text='Back' image={arrowLight} to={-1}/>
    <h2 className='error-title'>Error 404, page not found.</h2>
    </>
  )
}

export default Error