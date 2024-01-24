import { Link, Outlet } from 'react-router-dom';
import ThemeButton from '../../components/ThemeButton/ThemeButton';
// import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  // const {theme} = useContext(ThemeContext)
  return (
    <>
    <header>
      <Link to='./'><h1>Where in the world?</h1></Link>
      

      <ThemeButton />
    </header>
    <Outlet />
    </>
  );
};

export default Header;
