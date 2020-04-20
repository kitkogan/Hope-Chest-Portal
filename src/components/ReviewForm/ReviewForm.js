import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReviewForm extends Component {
  componentDidMount = () =>{
    this.getForm1();
  }

  getForm1 = () => {
    console.log('in getForm1 on pg1 component');
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
    console.log('in revewForm Page checking formReducer', this.props.reduxState.formReducer)
    return (
      <div className="ReviewForm">
       <h1>Event Submission Review</h1>
       <br/>
      {/* <>
        {this.props.reduxState.formReducer.map(formReducer => {<li>{key=formReducer.events.id}
          {formReducer.type}</li>}
      </> */}

      {this.props.childTable.length > 0 && (
       <>

      <ul>
      {this.props.reduxState.formReducer.map(taco => (<li>{taco.contact_fist_name}</li>))}
      </ul>
     </>
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