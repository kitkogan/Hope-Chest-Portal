import React, { Component } from "react";
import { connect } from "react-redux";
import "./Form.css";

class FormPg1 extends Component {
  state = {
    contact: {
    contact_first_name: "",
    contact_last_name: "",
    contact_phone: "",
    contact_email: "",
    company_name: "",
    company_website: "",
    company_street_address: "",
    company_city: "",
    company_state: "",
    company_zip: "",
    show_contact_option: "",
    event_contact_first_name: "",
    event_contact_last_name: "",
    event_contact_phone: "",
    event_contact_email: "",
    user_id: this.props.reduxState.user.id
  } 
}; //state holds the values of each input field from the form
  handleChange = (event, typeOf) => {
    // console.log(event.target.value, typeOf);
    this.setState({
      [typeOf]: event.target.value,
    });
  }; //sets corresponding state of each input field when the user enters a value

  populateInputs=()=>{
    this.setState({
      contact: {
        contact_first_name: "Kathy",
        contact_last_name: "Johnson",
        contact_phone: "(234) 345-5673",
        contact_email: "kathy.johnson@gmail.com",
        company_name: "Plush",
        company_website: "https://www.plush.com/",
        company_street: "PO Box 43",
        company_city: "Minneapolis",
        company_state: "MN",
        company_zip: "55440",
        show_contact_option: "",
        event_contact_first_name: "Kathy",
        event_contact_last_name: "Johnson",
        event_contact_phone: "(234) 345-5673",
        event_contact_email: "kathy.johnson@gmail.com",
        user_id: this.props.reduxState.user.id
      }
    })
  }

  goToFormPage2 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "POST_FORM1",
      payload: this.state.contact
    })        
    console.log("in gotoformpage2", this.state, "userId", this.props.reduxState.user.id);
    this.props.history.push("/form-page-2");
  }; //when the user clicks next, this function will run and take the user to the second page of the form
  
  render() {
    return (
      <div className="FormPages">
        <h1>Event Submission Form</h1>
        <h2>Progress bar here!!!</h2>
         <h3>Contact Information</h3>
        <p className="PHead">
          Please enter the requested information in each field. If any
          information is unavailable, please put "N/A" or "TBD" on the form,
          otherwise the form cannot be submitted. All * fields are required.
        </p>
        <div className="invisibleClick" onClick = {this.populateInputs}>
          
        <form className='formPage' onSubmit={this.goToFormPage2}>
          <label>First Name: * </label>
          <input
            type="text"
            placeholder="First Name"
            onChange={(event) => this.handleChange(event, "contact_first_name")}
            value = {this.state.contact.contact_first_name}
          />
          
          <br />
          <label>Last Name: * </label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(event) => this.handleChange(event, "contact_last_name")}
            value = {this.state.contact.contact_last_name}
          />
          <br />
          <label>Phone Number: * </label>
          <input
            type="tel"
            placeholder="Phone Number"
            onChange={(event) => this.handleChange(event, "contact_phone")}
            value = {this.state.contact.contact_phone}
          />
          <br />
          <label>Email: * </label>
          {/*
          Add in required to first 6 inputs.
          I hard-coded a value in email and website to make testing easier.
          If I don't get to it before you, please delete it when we're done! thanks!
          */}
          <input
            type="email"
            placeholder="Email"
            // value="test@test.com"
            onChange={(event) => this.handleChange(event, "contact_email")}
            value = {this.state.contact.contact_email}
          />
          <br />
          <label>Company Name: * </label>
          <input
            type="text"
            placeholder="Company Name"
            onChange={(event) => this.handleChange(event, "company_name")}
            value = {this.state.contact.company_name}
          />
          <br />
          <label>Company Website: * </label>
          <input
            type="url"
            placeholder="Company Website"
            // value="http:www.google.com"
            onChange={(event) => this.handleChange(event, "company_website")}
            value = {this.state.contact.company_website}
          />
          <div className="secondaryLabel">
            <label>Company Address</label>
          </div>
          <label>Street Address: </label>
          <input
            type="text"
            placeholder="Street Address"
            onChange={(event) =>
              this.handleChange(event, "company_street_address")
            }
            value = {this.state.contact.company_street}
          />
          <br />
          <label>City: </label>
          <input
            type="text"
            placeholder="City"
            onChange={(event) => this.handleChange(event, "company_city")}
            value = {this.state.contact.company_city}
          />
          <br />
          <label>State: </label>
          <input
            type="text"
            placeholder="State"
            onChange={(event) => this.handleChange(event, "company_state")}
            value = {this.state.contact.company_state}
          />
          <br />
          <label>Zip: </label>
          <input
            type="number"
            placeholder="Zip"
            onChange={(event) => this.handleChange(event, "company_zip")}
            value = {this.state.contact.company_zip}
          />
          <div className="secondaryLabel">
            <label>Contact Person</label>
          </div>
          <div
            className="radioInput"
            onChange={(event) =>
              this.handleChange(event, "show_contact_option")
            }
          >
            <input
              type="radio"
              id="sameContact"
              value="Same contact"
              name="contact"
            />
            <label htmlFor="sameContact">Same as above </label><br/>
            <input
              type="radio"
              id="newContact"
              value="New contact"
              name="contact"
            />
            <label for="newContact">Enter new contact information</label>
          </div>
          {this.state.show_contact_option === "New contact" ? (
            <>
              <br />
              <label>First Name: </label>
              <input
                type="text"
                placeholder="First Name"
                onChange={(event) =>
                  this.handleChange(event, "event_contact_first_name")
                }
                value = {this.state.contact.event_contact_first_name}
              />
              <br />
              <label>Last Name: </label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={(event) =>
                  this.handleChange(event, "event_contact_last_name")
                }
                value = {this.state.contact.event_contact_last_name}
              />
              <br />
              <label>Phone Number: </label>
              <input
                type="tel"
                placeholder="Phone Number"
                onChange={(event) =>
                  this.handleChange(event, "event_contact_phone")
                }
                value = {this.state.contact.event_contact_phone}
              />
              <br />
              <label>Email: </label>
              <input
                type="email"
                placeholder="Email"
                onChange={(event) =>
                  this.handleChange(event, "event_contact_email")
                }
                value = {this.state.contact.event_contact_email}
              />
            </>
          ) : (
            <></>
          )}
          <br />
          <center>
          <input className="nextButton" type="submit" value="Next" /></center>
        </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(FormPg1);
