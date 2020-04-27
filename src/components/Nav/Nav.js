import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";

const Nav = (props) => (
  <div className="nav">
    <center>
      <Link to="/home">
        <img className="hclogo" src="/HopeChestPNG.png" alt="Logo" />
      </Link>
    </center>
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
            {/* {this.props.admin ?
            <button> admin</button>
            :
            <button> not admin</button>} */}
          </Link>

          <Link to="/calendar" className="col-lg">
            Events/Calendar
          </Link>
          {props.user.admin ? (
            <Link to="/admin" className="col-lg">
              Event Status
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

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
  // admin,
});

export default connect(mapStateToProps)(Nav);
