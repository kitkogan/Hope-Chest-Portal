import React, { Component } from "react";
import { connect } from "react-redux";


// import { render } from 'react-dom';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const localizer = momentLocalizer(moment);

class EventCalendar extends Component {
  state = {
    showHide: false,
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "An Event Title",
      },
    ],
  };

  handleModalShowHide() {
    console.log("modal show hide function");
    this.setState({ showHide: !this.state.showHide });
  }

  handleSelect = (event) => {
    Swal.fire({
      title: event.title,
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Edit",
      cancelButtonText: "Unplublish",
      reverseButtons: false,
      showCloseButton: true,
    }).then((result) => {
      if (result.value) {
        this.props.history.push("/review");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          "Unpublished!",
          "Your event has been successfully unpublished.",
          "success"
        );
      }
    });
  };

  componentDidMount = () => {
    this.getCalendar()
  }

  getCalendar = () => {
    console.log("in getCalendar on CALENDAR component", this.props.reduxState.user.id);
    this.props.dispatch({
      type: "GET_CALENDAR",
      payload: this.props.reduxState.user.id
    });
  };

  render() {
    return (
      <div className="Calendar">
        <h1>Events and Calendar</h1>
        <Calendar
          popup
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onSelectEvent={(event) => this.handleSelect(event)}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(EventCalendar);
