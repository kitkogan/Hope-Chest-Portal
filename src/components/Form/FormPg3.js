import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class FormPg3 extends Component {
  state = {
      fund_description: "",
      contribution_amount: "",
      contribution_submission: "",
      promotion: "",
      other_comment: "",
      image: "",
      user_id: this.props.reduxState.user.id
  };

  handleChange = (event, typeOf) => {
    this.setState({
      [typeOf]: event.target.value,
    });
  };

  handleBackClick = (event) => {
    event.preventDefault();
    // console.log('state', this.state.newRestaurant.name)
    this.props.history.push("/form-page-2");
  };

  addInformation = (event) => {
    console.log('in submitForm on ReviewForm', this.props.reduxState.form);
    this.props.dispatch({ type: "POST_FORM3", payload: this.state });
    // create new form object and dispatch to payload to saga
    const formIntake = {
      form: this.props.reduxState.form,
      form2: this.props.reduxState.form2,
      form3: this.props.reduxState.form3
    };
    console.log('formIntake', formIntake);
    this.props.dispatch({
            type:'SUBMIT_FORM',
            payload: formIntake
    })
    this.props.history.push("/review");
  };

  render() {
    return (
      <div className="FormPages">
        <h1>Event Submission Form</h1>
        <br />
        <h3>Share your promotional and donation plans</h3>

        <form onSubmit={this.addInformation}>
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
            onChange={(event) => this.handleChange(event, "contribution_amount")}
          />
          <br />

          <label htmlFor="contribution submission">
            How do you anticipate submitting your contributions?
          </label>
          <br />
          <select
            type="dropdown"
            onChange={(event) => this.handleChange(event, "contribution_submission")}
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

          <label htmlFor="image">Upload your logo:</label>
          <br />
          <input
            type="image"
            alt="logo"
            onChange={(event) => this.handleChange(event, "image")}
          />
          <br />
          <button className="back" onClick={this.handleBackClick}>
            Back
          </button>
          <input className="submit" type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

// export default connect(mapStateToProps)(FormPg3);
export default connect(mapStateToProps)(withRouter(FormPg3));
