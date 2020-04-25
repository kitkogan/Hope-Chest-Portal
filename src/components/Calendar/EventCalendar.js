import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { render } from 'react-dom';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class EventCalendar extends Component {
  state = {
    showHide: false,
    events: [ {
      start: moment().toDate(),
      end: moment()
        .add(1, "days")
        .toDate(),
      title: "Some title"
    }]
  };

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    return (
      <div className="Calendar">
        <h1>Events and Calendar</h1>
        <img className="hclogo" src="./calendar.png" alt="Logo" />

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => this.handleModalShowHide()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Display Modal
        </Button>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
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
