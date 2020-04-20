import React, {Component} from 'react';
import { connect } from 'react-redux';

class FormPg3 extends Component {
  state = {
    funds: {
      description: '',
      amount: '',
      submission: '',
      promotion: '',
      comments: '',
      image: ''
    }
}

 
handleChange=(event, typeOf)=>{
    console.log(event.target.value, typeOf);
    this.setState({
      [typeOf]: event.target.value,

    })
}

handleBackClick=(event)=>{
  event.preventDefault()
  // console.log('state', this.state.newRestaurant.name)
  this.props.history.push("/form-page-2")
}
  

addInformation = (event) => {
    event.preventDefault()
    // console.log('state', this.state.newRestaurant.name)
    this.props.dispatch({ type: "EVENT_INFO",  payload: this.state.funds})
    console.log("in addInformation", this.state);
    this.props.history.push('/review-form')
    // this.emptyInputs()
  
}

  render() {
    return (
      <div className="FormPages">
       <h1>Event Submission Form</h1>
       <br/>
       <h2>Share your promotional and donation plans</h2>
       
      <form onSubmit={this.addInformation}>
       
        <label for="funds collection description">Please describe how you will be collecting funds for Hope Chest:</label><br/>
        <textarea type="text" onChange={((event)=>this.handleChange(event, 'description'))} /><br/>

        <label for="contribution amount">Estimated Amount of Contribution:</label><br/>
        <input type="text" onChange={((event)=>this.handleChange(event, 'amount'))} /><br/>


        <label for="contribution submission">How do you anticipate submitting your contributions?</label><br/>
        <select type="dropdown" onChange={((event)=>this.handleChange(event, 'submission'))}>
                <option value="0">Please select method</option>
                <option value="Electronic payment">Electronic payment</option>
                <option value="Check">Check</option>
                <option value="Cash">Cash</option>
                </select>


        <label for="promotion">Please describe how you will be promoting the event:</label><br/>
        <textarea type="text" onChange={((event)=>this.handleChange(event, 'promotion'))} /><br/>


        <label for="state">Other Comments/Questions :</label><br/>
        <input type="text" onChange={((event)=>this.handleChange(event, 'comments'))} /><br/>


        <label for="image">Upload your logo:</label><br/>
        <input type="image" alt="logo" onChange={((event)=>this.handleChange(event, 'image'))} /><br/>
        <button onClick={this.handleBackClick}>Back</button>
        <input type="submit"/>
      </form>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(FormPg3);