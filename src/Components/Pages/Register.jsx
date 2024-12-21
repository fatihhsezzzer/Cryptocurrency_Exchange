import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="cryptorio-forms cryptorio-forms-dark text-center pt-5 pb-5">
            <div className="logo">
              <img src="images/logo.png" alt="logo-image" />
            </div>
            <h3 className="p-4">Register</h3>
            <div className="cryptorio-main-form">
              <form action="#" className="text-left">
                <label htmlFor="email">Email</label>
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
                  placeholder="6-20 letters and numbers"
                />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="password"
                  placeholder="6-20 letters and numbers"
                />
                <div className="my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="terms-agree"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="terms-agree"
                    >
                      I agree to the terms of services
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  value="SignUp"
                  className="crypt-button-red-full"
                />
              </form>
              <p className="float-left">
                <Link to="/login.html">Log In</Link>
              </p>
              <p className="float-right">
                <Link to="/forgot.html">Recover Password</Link>
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
