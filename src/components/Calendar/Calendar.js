import React, {Component} from 'react';
import { connect } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
       <h1>Events and Calendar</h1>
      <Modal show={true}>
        <Modal.Header>Hi</Modal.Header>
        <Modal.Body>asdfasdf</Modal.Body>
        <Modal.Footer>This is the footer</Modal.Footer>
      </Modal>
  );
};
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(Calendar);