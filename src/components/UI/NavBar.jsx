import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const NavBar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
      payload: user,
    });
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav">
          <Link className="navbar-brand" to="/">
            Asociaciones
          </Link>

          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/marvel">
              Marvel
            </NavLink>

            <NavLink className="nav-item nav-link" to="/dc">
              DC
            </NavLink>
            <NavLink className="nav-item nav-link" to="/search">
              Search
            </NavLink>
          </div>
        </div>
        <div className="">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item  nav-link text-info">
              {user.name.toUpperCase()}
            </span>
            <button className="nav-item nav-link btn" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
