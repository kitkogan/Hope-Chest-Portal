import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReviewForm extends Component {

  submitForm=()=>{
    console.log('in submitForm on ReviewForm');
  }

  back=()=>{
    console.log('going back to form page 3');
    this.props.history.push("/form-page-3");
  }

  render() {
    return (
      <div className="ReviewForm">
       <h1>Event Submission Review</h1>
       <br/>
       <br/>
      <button onClick={()=> this.back()}>Back</button>
      <button onClick={()=> this.submitForm()}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(ReviewForm);