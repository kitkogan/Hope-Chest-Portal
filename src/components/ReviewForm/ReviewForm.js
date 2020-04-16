import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReviewForm extends Component {
  render() {
    return (
      <div className="ReviewForm">
       <h1>Review Form</h1>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(ReviewForm);