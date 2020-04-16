import React, {Component} from 'react';
import { connect } from 'react-redux';

class FormPg1 extends Component {
  render() {
    return (
      <div className="FormPg1">
       <h1>Form Page 1</h1>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(FormPg1);