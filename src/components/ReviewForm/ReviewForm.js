import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReviewForm extends Component {
  
  componentDidMount = () =>{
    this.getForm();
  }

  getForm = () => {
    console.log('in getForm on REVIEW FORM component');
    this.props.dispatch({
    type:'GET_FORM'
  });
  }

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

        <center>
        <p>Contact First Name: {this.props.reduxState.form.contact_first_name}</p>
        <p>Contact First Name: {this.props.reduxState.form.contact_last_name}</p>
        <p>Contact Phone: {this.props.reduxState.form.contact_phone}</p>
        <p>Contact Email: {this.props.reduxState.form.contact_email}</p>
        <p>Company Name: {this.props.reduxState.form.company_name}</p>
        <p>Company Website: {this.props.reduxState.form.company_website}</p>
        <p>Company Street: {this.props.reduxState.form.company_street}</p>
        <p>Company City: {this.props.reduxState.form.company_city}</p>
        <p>Company State: {this.props.reduxState.form.company_state}</p>
        <p>Company Zip Code: {this.props.reduxState.form.company_zip}</p>

        <p>Event Name: {this.props.reduxState.form2.event_name}</p>
        <p>Event Website: {this.props.reduxState.form2.event_website}</p>
        <p>Event Date: {this.props.reduxState.form2.event_date}</p>
        <p>Event Time: {this.props.reduxState.form2.event_time}</p>
        <p>Event Location Name: {this.props.reduxState.form2.event_location_name}</p>
        <p>Event Location Street: {this.props.reduxState.form2.event_location_street}</p>
        <p>Event Location City: {this.props.reduxState.form2.event_location_city}</p>
        <p>Event Location State:{this.props.reduxState.form2.event_location_state}</p>
        <p>Event Location Zip Code:{this.props.reduxState.form2.event_location_zip}</p>
        <p>Event Type:{this.props.reduxState.form2.event_type}</p>
        <p>Event Description: {this.props.reduxState.form2.event_description}</p>
        <p>First Time Event:{this.props.reduxState.form2.event_first_time}</p>
        
        <p>Funds: {this.props.reduxState.form3.funds_description}</p> 
        <p>Contribution Amount: {this.props.reduxState.form3.contribution_amount}</p>
        <p>Contribution Submission Method{this.props.reduxState.form3.contribution_submission}</p>
        <p>Promotion: {this.props.reduxState.form3.promotion}</p>
        <p>Other Comments: {this.props.reduxState.form3.other_comment}</p>
        <p>Logo: {this.props.reduxState.form3.image}</p>
        </center>
       
        {/* <div>
          {this.props.review.length > 0 && (
            <>
              <label className="tasks" htmlFor="Tasks">
                Select Responsibility or Behavior:
              </label>
              <select
                className="taskDropDown"
                onChange={this.handleAddTask("taskId")}
              >
                {this.props.tasks.map((taskNames) => {
                  return (
                    <option
                      className="formOption"
                      key={taskNames.id}
                      value={taskNames.id}
                    >
                      {taskNames.task_name}
                    </option>
                  );
                })}
              </select>
            </>
          )}
        </div> */}
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

