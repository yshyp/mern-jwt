import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Header from '../components/LoginHeader';
import Footer from '../components/LoginFooter';
import BgImage from '../assets/media/auth/bg4.jpg';
import DarkBgImage from '../assets/media/auth/bg4-dark.jpg';
import GoogleIcon from '../assets/media/svg/brand-logos/google-icon.svg';
import AppleIcon from '../assets/media/svg/brand-logos/apple-black.svg';
import AppleIconDark from '../assets/media/svg/brand-logos/apple-black-dark.svg';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const defaultThemeMode = "light";
    let themeMode;

    if (document.documentElement) {
      if (document.documentElement.hasAttribute("data-bs-theme-mode")) {
        themeMode = document.documentElement.getAttribute("data-bs-theme-mode");
      } else {
        themeMode = localStorage.getItem("data-bs-theme") || defaultThemeMode;
      }

      if (themeMode === "system") {
        themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      document.documentElement.setAttribute("data-bs-theme", themeMode);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      {/* Page Background Image */}
      <style>{`
        body { background-image: url(${BgImage}); }
        [data-bs-theme="dark"] body { background-image: url(${DarkBgImage}); }
      `}</style>

      <Header />
      <main className="d-flex flex-column flex-lg-row flex-column-fluid">
        {/* Aside */}
        <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
          <div className="d-flex flex-center flex-lg-start flex-column">            
          </div>
        </div>
        {/* Body */}
        <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
          <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
            <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
              <form onSubmit={handleSubmit} className="form w-100">
                <div className="text-center mb-11">
                  <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                  <div className="text-gray-500 fw-semibold fs-6">Please enter your details</div>
                </div>
                <div className="row g-3 mb-9">
                  <div className="col-md-6">
                    <a href="https://www.google.com/" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src={GoogleIcon} className="h-15px me-3" />Sign in with Google
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="https://appleid.apple.com/" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src={AppleIcon} className="theme-light-show h-15px me-3" />
                      <img alt="Logo" src={AppleIconDark} className="theme-dark-show h-15px me-3" />Sign in with Apple
                    </a>
                  </div>
                </div>
                <div className="separator separator-content my-14">
                  <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                </div>
                <div className="fv-row mb-8">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="fv-row mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                  <div></div>
                  <a href="/forgot-password" className="link-primary">Forgot Password?</a>
                </div>
                <div className="d-grid mb-10">
                  <button type="submit" className="btn btn-primary">
                    <span className="indicator-label">Sign In</span>
                    <span className="indicator-progress">Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>
                <div className="text-gray-500 text-center fw-semibold fs-6">
                  Not a Member yet? <a href="/sign-up" className="link-primary">Sign up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Right Side Image and Content */}
        <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center">
          <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
