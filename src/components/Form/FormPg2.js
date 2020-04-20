import React, {Component} from 'react';
import { connect } from 'react-redux';

class FormPg2 extends Component {
  state = {
    event_name: "",
    event_website: "",
    event_date: "",
    event_time: "",
    event_location_name: "",
    event_location_street: "",
    event_location_city: "",
    event_location_state: "",
    event_location_zip: "",
    event_type: "",
    event_description: "",
    event_first_time: "",
  };

// display text input for Event Type "other" select option
  // otherEventType = () => {
  //   if (this.value === "other") {
  //     this.form["other"].style.visibility = "visible";
  //   } else {
  //     this.form["other"].style.visibility = "hidden";
  //   }
  // };

  //Saves user inputs upon entry
  handleChange = (event, typeOf) => {
    console.log(event.target.value, typeOf);
    this.setState({
      [typeOf]: event.target.value,
    });
  };


  //Stores user event inputs and advances user to form page 3 on "Next" button click
  goToFormPage3 = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "EVENT_INFO", payload: this.state});
    console.log("in gotoformpage3", this.state);
    this.props.history.push("/form-page-3");
  };
  //Sends user back to form page 1 on "back" button click
  backButton = () => {
    this.props.history.push("/form-page-1");
  };

  render() {
    return (
      <div className="FormPg2">
        <center>
          <h1 className="heading">Event Submission Form</h1>
          <h2>Progress bar here</h2>
          <p>
            Please enter your event information as you would like it to appear
            in the events calendar.
          </p>
          <form onSubmit={this.goToFormPage3}>
            <label>Event Name: </label>
            <input
              type="text"
              placeholder="Event Name"
              onChange={(event) => this.handleChange(event, "eventName")}
            />
            <label>Event Website: </label>
            <input
              type="text"
              placeholder="Event Website"
              onChange={(event) => this.handleChange(event, "website")}
            />
            <label>Date: </label>
            <input
              type="text"
              placeholder="Date"
              onChange={(event) => this.handleChange(event, "date")}
            />
            <br></br>
            <label>Event Time: </label>
            <input
              type="text"
              placeholder="Event Time"
              onChange={(event) => this.handleChange(event, "time")}
            />
            <br></br>
            <label>Event Location Name: </label>
            <input
              type="text"
              placeholder="Event Location Name"
              onChange={(event) => this.handleChange(event, "locationName")}
            />
            <br></br>
            <label>Event Location Address:</label>
            <input
              type="text"
              placeholder="Street Address"
              onChange={(event) => this.handleChange(event, "locationAddress")}
            />
            <br></br>
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              onChange={(event) => this.handleChange(event, "city")}
            />
            <br></br>
            <label>Event State:</label>
            <input
              type="text"
              placeholder="State"
              onChange={(event) => this.handleChange(event, "state")}
            />
            <br></br>
            <label>Zip:</label>
            <input
              type="number"
              placeholder="Zip"
              onChange={(event) => this.handleChange(event, "zip")}
            />
            <br></br>
                 {/* {this.state.show_contact_option === "New contact" ? (
            <>
              <label>First Name: </label>
              <input
                type="text"
                placeholder="First Name"
                onChange={(event) =>
                  this.handleChange(event, "contact_first_name")
                }
              /> */}
            <select
              id="Event Type"
              name="Event Type"
              onChange={(event) => this.handleChange(event, "eventType")}
            >
              <option id="Event Type">Event Type</option>
              <option id="Shopping Night">Shopping Night</option>
              <option id="Sport/Pink Out Nights">Sport/Pink Out Nights</option>
              <option id="Gas and Auto Incentive">
                Gas and Auto Incentive
              </option>
              <option id="Taproom Night">Taproom Night</option>
              <option id="Grocery Promotion">Grocery Promotion</option>
              <option id="Birthday Event">Birthday Event</option>
              <option id="Bakery and Food Promotion">
                Bakery and Food Promotion
              </option>
              <option id="Floral Promotion">Floral Promotion</option>
              <option id="Other">Other</option> 
            </select>
            <br/>
            {this.state.eventType === "Other" ? (
              <>
              <label>Other Event Type:</label>
              <input type="text" placeholder="other" onChange={(event) => this.handleChange(event, "other" )}
              />
              </>
            ) : (
            <></>
            )}
            <p>
              Please include a 30-50 word description of the event below. This
              is how it will be displayed on the event calendar.
            </p>
            <textarea
              required
              type="text"
              placeholder="Please include a 30-50 word description of the event below. This is how it will be displayed on the event calendar."
              rows="10"
              cols="50"
              onChange={(event) => this.handleChange(event, "description")}
            />
            <select
              onChange={(event) => this.handleChange(event, "firstTimeEvent")}
            >
              <option id="Is this a First Time event?">
                Is this a First Time event?
              </option>
              <option id="Yes">Yes</option>
              <option id="No">No</option>
            </select>
            <br></br>
            <button onClick={this.backButton}>Back</button>
            <input
              type="submit"
              value="Next"
            />
          </form>
        </center>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(FormPg2);