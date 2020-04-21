import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReviewForm extends Component {
  // componentDidMount = () =>{
  //   this.getForm1();
  // }

  getForm1 = () => {
    console.log('in getForm1 on pg1 component');
    this.props.dispatch({
    type:'FETCH_EVENT'
  });
  }

  getForm2 = () => {
    console.log('in getForm2 on pg2 component');
    this.props.dispatch({
    type:'FETCH_EVENT'
  });
  }

  getForm3 = () => {
    console.log('in getForm3 on pg3 component');
    this.props.dispatch({
    type:'FETCH_EVENT'
  });
  }

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
        {/* {this.props.childTable.length > 0 && (
            <ul>
              {this.props.reduxState.formReducer.map(taco => (<li>{taco.contact_fist_name}</li>))}
            </ul>
        )} */}
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