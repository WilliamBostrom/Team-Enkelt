import { Link } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";

// styles
import Temple from "../assets/temple.svg";
import "./Navbar.css";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  return (
    <header className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="Dojo" />
          <span>Team Enkelt</span>
        </li>
        <li>{!user && <Link to="/login">Login</Link>}</li>
        <li>{!user && <Link to="/signup">Signup</Link>}</li>
        {user && (
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
        )}
      </ul>
    </header>
  );
}

export default Navbar;
