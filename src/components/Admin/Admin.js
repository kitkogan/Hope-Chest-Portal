import React, {Component} from 'react';
import { connect } from 'react-redux';
// import "../Admin/HCAdmin.png";

class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        <h1>Welcome Admin!</h1>
          <select>
            <option >UNAPPROVE</option>
            <option>APPROVE</option>
        </select>
        {/* <img className="admin" src="../public/HCAdmin.png" alt="Logo" /> */}
      </div>
    )
  } 
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(Admin);