import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const localizer = momentLocalizer(moment);

class EventCalendar extends Component {
  //to change the date and time, replace the information in the first parenthesis after "moment"
  //start is the first day of the event and the time it will begin
  //end is when the last day of the event and the time it will stop
  //to add an event, copy and paste an event from openening bracket { to closing bracket } after the last event and include a comma after the closing bracket, then replace with dates, title, description, and location
  //to remove an event, delete from opening bracket { to closing bracket }, along with the following comma
  //time is fomatted as following: year, month, day, hour(24 hour military time), minute, seconds

  state = {
    showHide: false,
    events: [
      {
        start: moment("2020-04-06 8:00").toDate(),
        end: moment("2020-04-10 12:00").toDate(),
        title: "Rise n' Shine with Coffee",
        desc:
          "Details: 20 % of all proceeds made during this event will be donated to Hope Chest.",
        location: "Location: 501 4th St Minneapolis MN 55555",
      },
      {
        start: moment("2020-04-17 18:00").toDate(),
        end: moment("2020-04-17 22:00").toDate(),
        title: "Virtual Ball",
        desc:
          "$10 will be added to the fundraiser for each person in attendance.",
        location: "Location: 501 4th St Minneapolis MN 55555",
      },
      {
        start: moment("2020-04-21 14:00").toDate(),
        end: moment("2020-04-21 20:00").toDate(),
        title: "Minneapolis Cook Off",
        desc:
          "Proceeds from every ticket purchased will be dontated to Hope Chest.",
        location: "Location: 501 4th St Minneapolis MN 55555",
      },
      {
        start: moment("2020-04-27 18:00").toDate(),
        end: moment("2020-05-01 21:00").toDate(),
        title: "Happy Hour",
        desc:
          "20% of all proceeds made from our raffel this week will be donated to Hope Chest.",
        location: "Location: 501 4th St Minneapolis MN 55555",
      },
      {
        start: moment("2020-04-28 16:00").toDate(),
        end: moment("2020-04-28 20:00").toDate(),
        title: "Shopping Night",
        desc:
          "20% of all proceeds made during this event will be donated to Hope Chest.",
        location: "Location: 501 4th St Minneapolis MN 55555",
      },
      {
        start: moment("2020-05-09 10:00").toDate(),
        end: moment("2020-05-10 12:00").toDate(),
        title: "Brunch with Mom: Mother's Day Weekend",
        desc:
          "20% of all proceeds made during this event will be donated to Hope Chest.",
        location: "Location: 501 4th St Minneapolis MN 55555",
      },
      {
        start: moment("2020-05-14 12:00").toDate(),
        end: moment("2020-05-14 14:00").toDate(),
        title: "Pink-Out Track Competition",
        desc: "Show support by wearing pink.",
        location: "Location: 501 4th St ",
      },
      {
        start: moment("2020-05-26 14:00").toDate(),
        end: moment("2020-05-26 16:00").toDate(),
        title: "Auction of the Arts",
        desc:
          "20% of all proceeds made during this event will be donated to Hope Chest.",
        location: "Location: 501 4th St Minneapolis MN 55555",
      },
    ],
  };

  //sweet alert for selected event
  //event clicked from the calendar will open a modal for the
  //user to view the description and location of the event
  handleSelect = (event) => {
    Swal.fire({
      title: event.title,
      text: event.desc,
      footer: event.location,
      confirmButtonText: "Back",
      showCloseButton: true,
    });
  };

  //rendering calendar fron react-big-calendar
  //maps each event listed in state -> events
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

export default EventCalendar;
