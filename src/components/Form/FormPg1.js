import React, { Component } from "react";
import { connect } from "react-redux";
import "./Form.css";

class FormPg1 extends Component {
  //state holds the values of each input field from the form
  state = {
    contact_first_name: "",
    contact_last_name: "",
    contact_phone: "",
    contact_email: "",
    company_name: "",
    company_website: "",
    company_street: "",
    company_city: "",
    company_state: "",
    company_zip: "",
    show_contact_option: "",
    user_id: this.props.reduxState.user.id,
  };

  //sets corresponding state of each input field when the user enters a value
  //and captures newly entered info.
  handleChange = (event, typeOf) => {
    this.setState({
      [typeOf]: event.target.value,
    });
  };

  //when the user clicks next, this function will run and take the user to the second page of the form
  goToFormPage2 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "POST_FORM1",
      payload: this.state,
    });
    this.props.history.push("/form-page-2");
  };

  render() {
    return (
      <div className="FormPages">
        <h1>Event Submission Form</h1>
        <center>
          <div className="myProgress">
            <div className="myBar">33%</div>
          </div>
        </center>
        <h3>Contact Information</h3>
        <p className="PHead">
          Please enter the requested information in each field. If any
          information is unavailable, please put "N/A" or "TBD" on the form,
          otherwise the form cannot be submitted. All * fields are required.
        </p>
        <div className="invisibleClick" onClick={this.populateInputs}>
          <form className="formPage" onSubmit={this.goToFormPage2}>
            <label>First Name: * </label>
            <input
              required
              type="text"
              placeholder="First Name"
              onChange={(event) =>
                this.handleChange(event, "contact_first_name")
              }
            />

            <br />
            <label>Last Name: * </label>
            <input
              required
              type="text"
              placeholder="Last Name"
              onChange={(event) =>
                this.handleChange(event, "contact_last_name")
              }
            />
            <br />
            <label>Phone Number: * </label>
            <input
              required
              type="tel"
              placeholder="Phone Number"
              onChange={(event) => this.handleChange(event, "contact_phone")}
            />
            <br />
            <label>Email: * </label>
            <input
              required
              type="email"
              placeholder="Email"
              onChange={(event) => this.handleChange(event, "contact_email")}
            />
            <br />
            <label>Company Name: * </label>
            <input
              required
              type="text"
              placeholder="Company Name"
              onChange={(event) => this.handleChange(event, "company_name")}
            />
            <br />
            <label>Company Website: * </label>
            <input
              required
              type="url"
              placeholder="Company Website"
              onChange={(event) => this.handleChange(event, "company_website")}
            />
            <div className="secondaryLabel">
              <label>Company Address</label>
            </div>
            <label>Street Address: </label>
            <input
              type="text"
              placeholder="Street Address"
              onChange={(event) =>
                this.handleChange(event, "company_street")
              }
            />
            <br />
            <label>City: </label>
            <input
              type="text"
              placeholder="City"
              onChange={(event) => this.handleChange(event, "company_city")}
            />
            <br />
            <label>State: </label>
            <input
              type="text"
              placeholder="State"
              onChange={(event) => this.handleChange(event, "company_state")}
            />
            <br />
            <label>Zip: </label>
            <input
              type="number"
              placeholder="Zip"
              onChange={(event) => this.handleChange(event, "company_zip")}
            />
            <center>
              <input className="nextButton" type="submit" value="Next" />
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

export default connect(mapStateToProps)(FormPg1);
