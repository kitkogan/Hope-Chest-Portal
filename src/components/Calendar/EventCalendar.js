import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    events: this.props.reduxState.calendarReducer,
    //   [{
    //   start: moment().toDate(),
    //   end: moment()
    //     .add(1, "days")
    //     .toDate(),
    //   title: "Some title"
    // }]
  };

  //get events on page load
  componentDidMount = () => {
    this.getCalendar();

    let event = this.props.reduxState.calendarReducer;
    for (let i = 0; i < event.length; i++) {
      event[i].start = moment.utc(event[i].start).toDate();
      event[i].end = moment.utc(event[i].end).toDate();
      event[i].event_name;
      event[i].event_description;
      event[i].event_website;
    }
  };

  //fetching events from calendar reducer
  getCalendar = () => {
    console.log(
      "in getCalendar on CALENDAR component",
      this.props.reduxState.user.id
    );
    this.props.dispatch({
      type: "GET_CALENDAR",
      payload: this.props.reduxState.user.id,
    });
  };

  //not in use right now but might be useful later
  handleModalShowHide() {
    console.log("modal show hide function");
    this.setState({ showHide: !this.state.showHide });
  }

  //sweet alert for selected event
  handleSelect = (event) => {
    Swal.fire({
      title: event.title,
      text: "Event description goes here",
      showCancelButton: true,
      confirmButtonText: "More Details",
      cancelButtonText: "Unpublish",
      reverseButtons: false,
      showCloseButton: true,
    }).then((result) => {
      if (result.value) {
        this.props.history.push("/admin-details");
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

  render() {
    return (
      <div className="Calendar">
        <h1>Events and Calendar</h1>
        <Calendar
          popup
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.props.reduxState.calendarReducer}
          // onSelectSlot={this.handleSelect}
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
