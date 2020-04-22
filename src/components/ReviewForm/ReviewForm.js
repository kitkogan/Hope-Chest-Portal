import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReviewForm extends Component {
  // componentDidMount = () =>{
  //   this.getForm();
  // }

  

  // getForm = () => {
  //   console.log('in getForm1 on pg1 component');
  //   this.props.dispatch({
  //   type:'FETCH_EVENT'
  // });
  // }

  updateForm=()=>{
    console.log('in submitForm on ReviewForm', this.props.reduxState.form);
    // create new form object and dispatch to payload to saga
    const formIntake = {
      form: this.props.reduxState.form,
      form2: this.props.reduxState.form2,
      form3: this.props.reduxState.form3
    };
    console.log('formIntake', formIntake);
    this.props.dispatch({
            type:'UPDATE_FORM',
            payload: formIntake
  })
  }

  // buttonClick = () =>{
  //   let objectToSend = {
  //     feeling: this.props.reduxState.feeling,
  //     understanding: this.props.reduxState.understanding,
  //     supported: this.props.reduxState.supported,
  //     comments: this.props.reduxState.comments,
  //   }
  //      axios({
  //       method: 'POST',
  //       url: '/feedback',
  //       data: objectToSend
  //     }).then((response)=>{
  //       console.log('response from POST', response);
  //     }).catch((error)=> {
  //       console.log('ERROR submitting Feedback', error);
  //     })

  // }

  back=()=>{
    console.log('going back to form page 3');
    this.props.history.push("/form-page-3");
  }

  render() {
    console.log('checking reduxstate', this.props.reduxState.form3)
    return (
      <div className="ReviewForm">
        <h1>Event Submission Review</h1>
        <h3> Review Your Form </h3>
        {JSON.stringify(this.props.reduxState.form3)}
        {/* 
        <p>testing:{this.props.reduxState.form3} </p>
        {this.props.reduxState.form3 && (
          <>
          <ul>
            {this.props.reduxState.form3.map((intake) =>{
              return(
              <li>
                  {JSON.stringify(intake)}
              </li>);
            })}
            </ul>
            </>
        // ) : (<><h1>nothing to show</h1></>
          )} */}
        <button onClick={() => this.back()}>Back</button>
        <button onClick={() => this.submitForm()}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(ReviewForm);