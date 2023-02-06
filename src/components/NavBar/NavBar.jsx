import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/FH-logo.png'

const NavBar = () => {
  return ( 
  <>
    <div className='container-fluid' style={{ backgroundColor: '#FFFFFF' }}>
      <nav className="navbar navbar-expand-xl">
        <Link to='/'>
          <img src={Logo} alt='home logo' width='100' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#toggleMobileMenu' aria-controls="toggleMobileMenu" aria-expanded='false' aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="toggleMobileMenu">
          <ul className='navbar-nav ms-auto text-center' style={{fontSize: '25px'}}>
            <li className='nav-link'>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/merch'>
                Merch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </>
  );
}

export default NavBar;