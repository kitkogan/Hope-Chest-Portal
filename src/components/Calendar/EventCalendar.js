import React, { Component } from "react";
import { connect } from "react-redux";

// import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { render } from 'react-dom';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

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
    console.log('modal show hide function');
    this.setState({ showHide: !this.state.showHide });
  }

  handleSelect = ({ start, end }) => {
    // const title = window.prompt('New Event name')
      const title = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      title.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          title.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          title.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
  }



  render() {
    return (
      <div className="Calendar">
        <h1>Events and Calendar</h1>
        {/* <Modal show={this.state.showHide}>
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
        </Modal> */}
        {/* <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Display Modal
        </Button> */}
        <Calendar
          popup
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          // onSelectSlot={this.handleSelect}
          onSelectEvent={event => this.handleSelect(event)}
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
