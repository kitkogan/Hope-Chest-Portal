import React, {Component} from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
       <h1>Events and Calendar</h1>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(Calendar);