import { Link } from 'react-router-dom';
import  { useState } from 'react';


const Header = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <div className="container-full-width">
        <div className="crypt-header">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <div className="row">
                <div className="col-xs-2">
                  <Link to="/overview">
                    <div className="crypt-logo">
                    <img style={{ width: '50px' }} src="src/assets/images/logo.png" alt="Logo" />

                    </div>
                  </Link>
                </div>
                
              </div>
            </div>
            
            <div className="col-xl-8 col-lg-8 col-md-8 d-none d-md-block d-lg-block">
              <ul className="crypt-heading-menu fright">
                <li className=''><Link to="/overview">Overview</Link></li>
                <li className="crypt-box-menu menu-green">
                  <Link to="/login">Login</Link>
                </li>
                <li className="crypt-box-menu menu-red">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
            <i className="menu-toggle pe-7s-menu d-xs-block d-sm-block d-md-none d-sm-none" onClick={toggleMobileMenu}></i>
          </div>
        </div>
      </div>
      {/* Mobil Menü */}
      <div className={`crypt-mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
        <ul className="crypt-heading-menu">
        <li className=''><Link to="/overview">Overview</Link></li>

          <li className="crypt-box-menu menu-red"><Link to="register">Register</Link></li>
          <li className="crypt-box-menu menu-green"><Link to="login">Login</Link></li>
        </ul>
      
      </div>
    </header>
  );
};

export default Header;
