import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState(''); // Hata mesajı için state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Her yeni denemede hata mesajını sıfırlıyoruz

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Girdiğiniz şifreler eşleşmiyor!');
      return;
    }

    const requestBody = {
      id: 0,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch('https://localhost:32769/api/Auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert('Kayıt Başarılı. Giriş Sayfasına Yönlendiriliyorsunuz...');
        navigate('/login');
      } else {
        const errorData = await response.json(); // Backend'den gelen hata mesajını al
        setErrorMessage(errorData.message || 'Kayıt başarısız! Lütfen tekrar deneyiniz.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Bir hata oluştu! Lütfen tekrar deneyiniz.');
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
            <h3 className="p-4">Kayıt Ol</h3>
            <div className="cryptorio-main-form">
              <form onSubmit={handleSubmit} className="text-left">
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <label htmlFor="username">Ad Soyad</label>
                <input
                  style={{ color: 'white' }}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Ad Soyad"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  style={{ color: 'white' }}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Adresiniz"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Şifre</label>
                <input
                  style={{ color: 'white' }}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Şifre"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="confirmPassword">Şifre Tekrar</label>
                <input
                  style={{ color: 'white' }}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Şifre Tekrar"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <div className="my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="terms-agree"
                      required
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="terms-agree"
                    >
                      Kullanıcı Sözleşmesini Onaylıyorum
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Kayıt Ol"
                  className="crypt-button-red-full"
                />
              </form>
              <p>
                <Link to="/login">Giriş Yap</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Register;
