import { Link } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";

// styles
import Temple from "../assets/temple.svg";
import "./Navbar.css";

function Navbar() {
  const { logout, isPending } = useLogout();
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
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logout
            </button>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
