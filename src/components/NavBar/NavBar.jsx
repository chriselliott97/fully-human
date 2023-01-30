import {Link} from 'react-router-dom'

const NavBar = () => {
  return ( 
  <>
    <nav>
      <Link to='/'>
        Fully Human 
      </Link>
      <ul>
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link to='/merch'>
            Merch
          </Link>
        </li>
      </ul>
    </nav>
  </>
  );
}

export default NavBar;