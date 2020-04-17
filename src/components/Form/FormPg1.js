import React, { Component } from "react";
import { connect } from "react-redux";

class FormPg1 extends Component {
  state = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    company_name: "",
    company_website: "",
    company_street_address: "",
    company_city: "",
    company_state: "",
    company_zip: "",
    contact_first_name: "",
    contact_last_name: "",
    contact_phone_number: "",
    contact_email: "",
  };
  goToFormPage2 = () => {
    this.props.history.push("/form-page-2");
  };

  render() {
    return (
      <div className="FormPg1">
        <h1>Event Submission Form</h1>
        <h2>Progress bar here!!!</h2>
        <h3>Contact Information</h3>
        <p>
          Please enter the requested information in each field. If any
          information is unavailable, please put "N/A" or "TBD" on the form,
          otherwise the form cannot be submitted. All * fields are required,
        </p>
        <form onSubmit={this.goToFormPage2}>
          <label>* First Name: </label>
          <input required type="text" placeholder="First Name" />
          <label>* Last Name: </label>
          <input required type="text" placeholder="Last Name" />
          <label>* Phone Number: </label>
          <input required type="tel" placeholder="Phone Number" />
          <label>* Email: </label>
          <input required type="email" placeholder="Email" />
          <label>* Company Name: </label>
          <input required type="text" placeholder="Company Name" />
          <label>* Company Website: </label>
          <input required type="url" placeholder="Company Website" />
          <label className="address">Company Address</label>
          <label>Street Address: </label>
          <input type="text" placeholder="Street Address" />
          <label>City: </label>
          <input type="text" placeholder="City" />
          <label>State: </label>
          <input type="text" placeholder="State" />
          <label>Zip: </label>
          <input type="number" placeholder="Zip" />
          <label>Contact Person</label>
          <input type="radio" id="Same as above"></input>
          <input type="radio" id="Enter new contact information"></input>
          <label>First Name: </label>
          <input type="text" placeholder="First Name" />
          <label>Last Name: </label>
          <input type="text" placeholder="Last Name" />
          <label>Phone Number: </label>
          <input type="tel" placeholder="Phone Number" />
          <label>Email: </label>
          <input type="email" placeholder="Email" />
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(FormPg1);
