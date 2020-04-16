import React, {Component} from 'react';
import { connect } from 'react-redux';

class FormPg2 extends Component {
  render() {
    return (
      <div className="FormPg2">
       <h1>Form Page 2</h1>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(FormPg2);