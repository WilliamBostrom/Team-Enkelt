import { Link } from "react-router-dom";

// styles
import Temple from "../assets/temple.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="Dojo" />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
