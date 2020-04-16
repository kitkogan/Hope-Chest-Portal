import React, {Component} from 'react';
import { connect } from 'react-redux';



class Confirmation extends Component {
  render() {
    return (
      <div className="ConfirmationPage">
       <h1>Confirmation Page</h1>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(Confirmation);