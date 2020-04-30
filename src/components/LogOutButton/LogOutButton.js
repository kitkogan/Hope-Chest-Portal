import React from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";

const LogOutButton = (props) => (
  <Link
    className="col-lg"
    // This Link shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    // className={props.className}
    onClick={() => {
      props.dispatch({ type: "LOGOUT" });
      props.history.push("/");
    }}
  >
    Log Out
  </Link>
);

export default withRouter(connect()(LogOutButton));
