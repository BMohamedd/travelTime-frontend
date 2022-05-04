import React from "react";
import { useDispatch } from "react-redux";
import { LOGOUT_SUCCESS } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faDoorClosed,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: LOGOUT_SUCCESS });
    navigate("register");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <h1
          className="navbar-brand"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("")}
        >
          <i className="text-italic">
            {" "}
            <FontAwesomeIcon icon={faPlane} size="sm" /> TravelTime
          </i>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <p
                className="nav-link m-0"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                <FontAwesomeIcon icon={faHome} size="sm" /> Home
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link m-0"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("profile")}
              >
                <FontAwesomeIcon icon={faUser} size="sm" /> Profile
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link m-0"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faDoorClosed} size="sm" /> Logout
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
