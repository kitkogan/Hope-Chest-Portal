import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";

const Nav = (props) => (
  //links to home and other components of the app
  <div className="nav">
    <Link to="/home">
      <img className="hclogo" src="/HopeChestPNG.png" alt="Logo" />
    </Link>

    <div className="row">
      <Link to="/home" className="col-lg">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? "Home" : "Login / Register"}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link to="/form-page-1" className="col-lg">
            Start Fundraiser
          </Link>

          <Link to="/calendar" className="col-lg">
            Events/Calendar
          </Link>
          {/*if the user's admin privilage is true,
          show admin in the nav bar, if not,
          don't show admin in nav bar*/}
          {props.user.admin ? (
            <Link to="/admin" className="col-lg">
              Admin
            </Link>
          ) : (
            <></>
          )}
          <LogOutButton />
        </>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
