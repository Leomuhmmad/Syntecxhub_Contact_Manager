import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";


const Navbar = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link className="navbar-brand" to="/">
          Contact MS
        </Link>
      </div>
      <div className="navbar-right">
        <Link className="navbar-link" to="/about">
          About
        </Link>
        {
          user ? <>
          <Link className="navbar-link" to="/login">
          Contact
        </Link>
        <Link className="navbar-link" to="/register">
          {user.name}
        </Link>
        <Link className="navbar-link" to="/register">
          logout
        </Link>
          </>
          : <>
        <Link className="navbar-link" to="/login">
          Login
        </Link>
        <Link className="navbar-link" to="/register">
          Register
        </Link>
          
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
