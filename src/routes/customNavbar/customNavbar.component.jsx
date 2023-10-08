import { Outlet } from "react-router-dom";
import "./customNavbar.styles.css";

function CustomNavbar() {
  return (
    <>
    <div className="navbar-container">
      <a href="/" className="logo">
        Logo
      </a>
      <div className="navbar-links-container">
        <a href="/" className="navbar-link-item">
          Home
        </a>
        <a href="/signin" className="navbar-link-item">
          Sign In
        </a>
        <a href="/addbucket" className="navbar-link-item">
          Add in The Bucket
        </a>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default CustomNavbar;
