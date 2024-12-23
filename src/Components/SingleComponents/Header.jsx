import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserProvider'; 

const Header = () => {
  const { user, setUser } = useContext(UserContext); 

  const handleLogout = () => {
    setUser(null); 
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 
    alert('Başarıyla çıkış yaptınız!');
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
                      <img
                        style={{ width: '50px' }}
                        src="src/assets/images/logo.png"
                        alt="Logo"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-8 d-none d-md-block d-lg-block">
              <ul className="crypt-heading-menu fright">
                <li>
                  <Link to="/">Anasayfa</Link>
                </li>
                {user ? (
                  <>
                    <li className="crypt-box-menu">
                      Hoşgeldiniz, <strong>{user.username}</strong>
                    </li>
                    <li className="crypt-box-menu">
                      <button
                        onClick={handleLogout}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#d9534f',
                          cursor: 'pointer',
                          padding: 0,
                          fontSize: '14px',
                        }}
                      >
                        Çıkış Yap
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="crypt-box-menu menu-green">
                      <Link to="/login">Giriş Yap</Link>
                    </li>
                    <li className="crypt-box-menu menu-red">
                      <Link to="/register">Kayıt Ol</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <i
              className="menu-toggle pe-7s-menu d-xs-block d-sm-block d-md-none d-sm-none"
              onClick={() => {}}
            ></i>
          </div>
        </div>
      </div>
      {/* Mobil Menü */}
      <div className={`crypt-mobile-menu`}>
        <ul className="crypt-heading-menu">
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          {user ? (
            <>
              <li className="crypt-box-menu">
                Hoşgeldiniz, <strong>{user.username}</strong>
              </li>
              <li className="crypt-box-menu">
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#d9534f',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '14px',
                  }}
                >
                  Çıkış Yap
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="crypt-box-menu menu-red">
                <Link to="/register">Register</Link>
              </li>
              <li className="crypt-box-menu menu-green">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
