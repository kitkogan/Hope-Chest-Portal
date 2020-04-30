import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserPage.css";

class UserPage extends Component {
  //displays events on page load and pushes to form page 1
  componentDidMount = () => {
    this.displayEvent();
  };
  goToFormPage = (event) => {
    this.props.history.push("/form-page-1");
  };

  //displays events on the user home page
  displayEvent = () => {
    this.props.dispatch({
      type: "SET_EVENT1",
      userId: this.props.reduxState.user.id,
    });
  };

  render() {
    return (
      <div className="UserPage">
        <h1 className="head1">
          {" "}
          Welcome, {this.props.reduxState.user.first_name}!
        </h1>
        <div className="userHome">
          <br />
          <center>
            <button className="start" onClick={this.goToFormPage}>
              Start a Fundraiser
            </button>
          </center>
        </div>
        <br />
        <br />
        <br />
        <h1 className="head1">My Upcoming Events</h1>
        <div className="userEvent">
          <ul>
            {this.props.reduxState.userEvents.length > 0 &&
              this.props.reduxState.userEvents.map((events, index) => {
                return (
                  <li className="eventLi" key={index}>
                    <img className="eventImg" src="/userPic.jpg" alt="Logo" />
                    <br />
                    <>{events.event_name}</>
                    <br />
                    <>{events.event_date.substring(0, 10)}</>
                    <br />
                    <>{events.event_time}</>
                    <br />
                    <>{events.event_description} </>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (reduxState) => ({
  reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
