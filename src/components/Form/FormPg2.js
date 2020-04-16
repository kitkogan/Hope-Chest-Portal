import React, {Component} from 'react';
import { connect } from 'react-redux';

class FormPg2 extends Component {
  backButton = () => {
    this.props.history.push("/form-page-1")
  }

  nextButton = () => {
    this.props.history.push("/form-page-3");
  }

  render() {
    return (
      <div className="FormPg2">
        <center>
          <h1>Event Submission Form</h1>
          {/* Progress bar here */}
          <form>
            <h2>Event Information</h2>
            <input placeholder="Event Name"></input>
            <input placeholder="Date"></input>
            <input placeholder="Event Time"></input>
            <input placeholder="Event Location Name"></input>
            <label>Event Location Address</label>
            <input placeholder="Street Address"></input>
            <input placeholder="City"></input>
            <input placeholder="State"></input>
            <input placeholder="Zip"></input>
            <select id="Event Type" name="Event Type">
              <option id="Event Type">Event Type</option>
              <option id="Shopping Night">Shopping Night</option>
              <option id="Sport/Pink Out Nights">Sport/Pink Out Nights</option>
              <option id="Gas and Auto Incentive">Gas and Auto Incentive</option>
              <option id="Taproom Night">Taproom Night</option>
              <option id="Grocery Promotion">Grocery Promotion</option>
              <option id="Birthday Event">Birthday Event</option>
              <option id="Bakery and Food Promotion"> Bakery and Food Promotion</option>
              <option id="Floral Promotion">Floral Promotion</option>
              <option id="Other">Other</option>
              {/* add other text input here for Other selection */}
            </select>
            <p>
              Please include a 30-50 word description of the event below. This
              is how it will be displayed on the event calendar.
            </p>
            <textarea
              placeholder="Please include a 30-50 word description of the event below. This is how it will be displayed on the event calendar."
              rows="10"
              cols="50"
            />
            <select>
              <option id="0">Is this a First Time event?</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </form>
          <button onClick={this.backButton}>Back</button>
          <button onClick={this.nextButton}>Next</button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(FormPg2);