import React, { Component } from "react";
import { connect } from "react-redux";
import "./Form.css"

// const contact_first_name = req.body.contact_first_name;
// const contact_last_name  = req.body.contact_last_name;
// const contact_phone = req.body.contact_phone;
// const contact_email = req.body.contact_email;
// const company_name = req.body.company_name;
// const company_website = req.body.company_website;
// const company_street = req.body.company_street;
// const company_city = req.body.company_city;
// const company_state = req.body.company_state;
// const company_zip = req.body.company_zip;
class FormPg1 extends Component {

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
    contact_first_name: "",
    contact_last_name: "",
    contact_phone_number: "",
    contact_email: "",
  }; //state holds the values of each input field from the form

  handleChange = (event, typeOf) => {
    console.log(event.target.value, typeOf);
    this.setState({
      [typeOf]: event.target.value,
    });
  }; //sets corresponding state of each input field when the user enters a value

  goToFormPage2 = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "POST_EVENT", payload: this.state });
    console.log('in gotoformpage2', this.state);
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
        <form onSubmit={this.goToFormPage2}>
          <label>First Name: * </label>
          <input
            type="text"
            placeholder="First Name"
            onChange={(event) => this.handleChange(event, "contact_first_name")}
          />
          <br />
          <label>Last Name: * </label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(event) => this.handleChange(event, "contact_last_name")}
          />
          <br />
          <label>Phone Number: * </label>
          <input
            type="tel"
            placeholder="Phone Number"
            onChange={(event) => this.handleChange(event, "contact_phone")}
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
            // value="Email"
            onChange={(event) => this.handleChange(event, "contact_email")}
          />
          <br />
          <label>Company Name: * </label>
          <input
            type="text"
            placeholder="Company Name"
            onChange={(event) => this.handleChange(event, "company_name")}
          />
          <br />
          <label>Company Website: * </label>
          <input
            type="url"
            placeholder="Company Website"
            // value="http:www.google.com"
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
          <div className="secondaryLabel">
          <label>Contact Person</label>
          </div>
          <div className="radioInput"
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
            <label htmlFor="sameContact">Same as above </label>
            <input
              type="radio"
              id="newContact"
              value="New contact"
              name="contact"
            />
            <label htmlFor="newContact">Enter new contact information</label>
          </div>
          {this.state.show_contact_option === "New contact" ? (
            <>
              <br/>
              <label>First Name: </label>
              <input
                type="text"
                placeholder="First Name"
                onChange={(event) =>
                  this.handleChange(event, "contact_first_name")
                }
              />
              <br />
              <label>Last Name: </label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={(event) =>
                  this.handleChange(event, "contact_last_name")
                }
              />
              <br />
              <label>Phone Number: </label>
              <input
                type="tel"
                placeholder="Phone Number"
                onChange={(event) =>
                  this.handleChange(event, "contact_phone_number")
                }
              />
              <br />
              <label>Email: </label>
              <input
                type="email"
                placeholder="Email"
                onChange={(event) => this.handleChange(event, "contact_email")}
              />
            </>
          ) : (
            <></>
          )}
          <br />
          <input className="submit" type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(FormPg1);
