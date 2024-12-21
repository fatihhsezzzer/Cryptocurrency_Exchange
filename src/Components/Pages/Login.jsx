import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="cryptorio-forms cryptorio-forms-dark text-center pt-5 pb-5">
            <div className="logo">
              <img src="images/logo.png" alt="logo-image" />
            </div>
            <h3 className="p-4">Welcome To Login</h3>
            <div className="cryptorio-main-form">
              <form action="#" className="text-left">
                <label htmlFor="email">Account Name</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email/cellphone"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Please Input Your Password"
                />
                <input
                  type="submit"
                  value="Log In"
                  className="crypt-button-red-full"
                />
              </form>
              <p className="float-left">
                <Link to="/register.html">Sign Up</Link>
              </p>
              <p className="float-right">
                <Link to="/forgot.html">Forgot Password</Link>
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
