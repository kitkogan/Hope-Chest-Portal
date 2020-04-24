import React, {Component} from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(Admin);