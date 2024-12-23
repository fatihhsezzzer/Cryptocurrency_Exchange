import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Contexts/UserProvider';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(''); 
  const { setUser } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); 

    try {
      const response = await fetch('https://localhost:32769/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const result = await response.json();
        
        setUser({ username: result.username, email: result.email });
        localStorage.setItem('token', result.token);
        localStorage.setItem(
          'user',
          JSON.stringify({ username: result.username, email: result.email })
        );
        alert('Giriş başarılı!');
        navigate('/');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Giriş başarısız! Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Bir hata oluştu! Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="cryptorio-forms cryptorio-forms-dark text-center pt-5 pb-5">
            <div className="logo">
              <img style={{height:'100px'}} src="src/assets/images/logo.png" alt="logo" />
            </div>
            <h3 className="p-4">Giriş Yap</h3>
            <div className="cryptorio-main-form">
              <form onSubmit={handleSubmit} className="text-left">
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <label htmlFor="email">Email</label>
                <input  style={{ color: 'white' }}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Adresiniz"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Şifre</label>
                <input  style={{ color: 'white' }}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Şifre"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="submit"
                  value="Giriş Yap"
                  className="crypt-button-red-full"
                />
              </form>
              <p>
                <Link to="/register">Kayıt Ol</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;
