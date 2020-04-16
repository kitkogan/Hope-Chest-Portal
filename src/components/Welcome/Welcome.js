import React, {Component} from 'react';
import { connect } from 'react-redux';



class Welcome extends Component {
  render() {
    return (
      <div className="welcomePage">
       <h1>Welcome Page</h1>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(Welcome);