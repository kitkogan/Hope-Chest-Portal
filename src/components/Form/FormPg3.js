import React, {Component} from 'react';
import { connect } from 'react-redux';

class FormPg3 extends Component {
  render() {
    return (
      <div className="FormPg3">
       <h1>Form Page 3</h1>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(FormPg3);