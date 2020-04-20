import React, {Component} from 'react';
import { connect } from 'react-redux';
// import {Button, Modal} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

class Calendar extends Component {

//   state = {
//     showHide: false
//   }

//   handleModalShowHide(){
//     this.setState({ showHide: !this.state.showHide })
//   };
  
  render() {
    return (
      <div className="Calendar">
       <h1>Events and Calendar</h1>
{/* //        <Modal show={this.state.showHide}>
//           <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
//           <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//           <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
//               Close
//           </Button>
//           <Button variant="primary" onClick={() => this.handleModalShowHide()}>
//               Save Changes
//           </Button>
//           </Modal.Footer>
//         </Modal>
//         <Button variant="primary" onClick={() => this.handleModalShowHide()}>
// Display Modal</Button> */}
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(Calendar);