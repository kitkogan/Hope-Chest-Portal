import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const localizer = momentLocalizer(moment);

class EventCalendar extends Component {
  //year, month, day, hour(24 hour military time), minute, seconds
  state = {
    showHide: false,
    events: [
      {
        start: moment("2020-04-06 8:00").toDate(),
        end: moment("2020-04-10 12:00").toDate(),
        title: "Rise n' Shine with Coffee",
        desc:
          "Details: 20 % of all proceeds made during this event will be donated to Hope Chest.",
        location: "Location: 501 4th St "
      },
      {
        start: moment("2020-04-17 18:00").toDate(),
        end: moment("2020-04-17 22:00").toDate(),
        title: "Virtual Ball",
        desc:
          "$10 will be added to the fundraiser for each person in attendance.",
      },
      {
        start: moment("2020-04-21 14:00").toDate(),
        end: moment("2020-04-21 20:00").toDate(),
        title: "Minneapolis Cook Off",
        desc:
          "Proceeds from every ticket purchased will be dontated to Hope Chest.",
      },
      {
        start: moment("2020-04-27 18:00").toDate(),
        end: moment("2020-05-01 21:00").toDate(),
        title: "Happy Hour",
        desc:
          "20% of all proceeds made from our raffel this week will be donated to Hope Chest.",
      },
      {
        start: moment("2020-04-28 16:00").toDate(),
        end: moment("2020-04-28 20:00").toDate(),
        title: "Shopping Night",
        desc:
          "20% of all proceeds made during this event will be donated to Hope Chest.",
      },
      {
        start: moment("2020-05-09 10:00").toDate(),
        end: moment("2020-05-10 12:00").toDate(),
        title: "Brunch with Mom: Mother's Day Weekend",
        desc:
          "20% of all proceeds made during this event will be donated to Hope Chest.",
      },
      {
        start: moment("2020-05-14 12:00").toDate(),
        end: moment("2020-05-14 14:00").toDate(),
        title: "Pink-Out Track Competition",
        desc: "Show support by wearing pink.",
      },
      {
        start: moment("2020-05-26 14:00").toDate(),
        end: moment("2020-05-26 16:00").toDate(),
        title: "Auction of the Arts",
        desc:
          "20% of all proceeds made during this event will be donated to Hope Chest.",
      },
    ],
  };

  //get events on page load
  componentDidMount = () => {
    this.getCalendar();
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
    console.log(this.state);
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
      text: event.desc,
      footer: event.location,
      confirmButtonText: "Back",
      showCloseButton: true,
    }).then((result) => {
      if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    });
  };

  render() {
    return (
      <div className="Calendar">
        <h1 className="headCal">Events Calendar</h1>
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
