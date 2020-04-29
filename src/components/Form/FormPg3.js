import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Form.css";

class FormPg3 extends Component {
  //state holds the value of each input on the form
  state = {
    fund_description: "",
    contribution_amount: "",
    contribution_submission: "",
    promotion: "",
    other_comment: "",
    user_id: this.props.reduxState.user.id,
    approved: false,
  };

  //track changes from each input the user enters, then assigns them to state
  handleChange = (event, typeOf) => {
    this.setState({
      [typeOf]: event.target.value,
    });
  };

  //when clicked, the user will be brought back to form page 2
  handleBackClick = (event) => {
    event.preventDefault();
    this.props.history.push("/form-page-2");
  };

  //when clicked, the user will be brought to the review page while input from all 3 form pages are sent to the database as well as the redux state
  goToReview = (event) => {
    this.props.dispatch({ type: "POST_FORM3", payload: this.state });
    const formIntake = {
      form: this.props.reduxState.form,
      form2: this.props.reduxState.form2,
      form3: this.state,
    };
    this.props.dispatch({
      type: "SUBMIT_FORM",
      payload: formIntake,
    });
    this.props.history.push("/review");
  };

  render() {
    return (
      <div className="FormPages">
        <h1>Event Submission Form</h1>
        <center>
          <div className="myProgress3">
            <div className="myBar3">100%</div>
          </div>
        </center>
        <br />
        <h3>Share your promotional and donation plans</h3>
        <div className="PHead"><hr></hr></div>
        
        <div className="invisibleClick" onClick={this.populateInputs}>
          <form className="formPage" onSubmit={this.goToReview}>
            <label htmlFor="funds collection description">
              Please describe how you will be collecting funds for Hope Chest:
            </label>
            <br />
            <textarea
              type="text"
              rows="5"
              cols="50"
              placeholder="Please describe how you will be collecting funds for Hope Chest"
              onChange={(event) => this.handleChange(event, "fund_description")}
            />
            <br />

            <label htmlFor="contribution amount">
              Estimated Amount of Contribution:
            </label>
            <br />
            <input
              type="number"
              step="0.01"
              min=".01"
              onChange={(event) =>
                this.handleChange(event, "contribution_amount")
              }
            />
            <br />

            <label htmlFor="contribution submission">
              How do you anticipate submitting your contributions?
            </label>
            <br />
            <select
              type="dropdown"
              onChange={(event) =>
                this.handleChange(event, "contribution_submission")
              }
            >
              <option value="0">Please select method</option>
              <option value="Electronic payment">Electronic payment</option>
              <option value="Check">Check</option>
              <option value="Cash">Cash</option>
            </select>
            <br />

            <label htmlFor="promotion">
              Please describe how you will be promoting the event:
            </label>
            <br />
            <textarea
              type="text"
              rows="5"
              cols="50"
              placeholder="Please describe how you will be promoting the event"
              onChange={(event) => this.handleChange(event, "promotion")}
            />
            <br />

            <label htmlFor="state">Other Comments/Questions:</label>
            <br />
            <input
              type="text"
              placeholder="Other Comments/Questions"
              onChange={(event) => this.handleChange(event, "other_comment")}
            />
            <br />
            <br />
            <center>
              <button className="back" onClick={this.handleBackClick}>
                Back
              </button>
              <input className="submit" type="submit" value="Review" />
            </center>
          </form>
        </div>
      </div>
    );
  }
}

//connecting to reduxState
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(withRouter(FormPg3));
