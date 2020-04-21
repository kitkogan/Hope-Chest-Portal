
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './UserPage.css';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
// const UserPage = (props) => (
//   <div>
//     <h1 id="welcome">
//       Welcome, { props.user.email }!
//     </h1>
//     <p>Your ID is: {props.user.id}</p>
//     <LogOutButton className="log-in" />
//   </div>
// );
class UserPage extends Component {

  goToFormPage = (event) => {
    this.props.history.push("/form-page-1");
  }

  render() {
    return (
      <div className="UserPage">
       <h1>User Home Page</h1>
       <h2>
       Welcome, { this.props.reduxState.user.first_name }!
       Your ID is: {this.props.reduxState.user.id}
      </h2>
       <br/>
       <button className="start" onClick={this.goToFormPage}>Start a Fundraiser</button>
       <br/><br/><br/>
       <h1>My Upcoming Events</h1>
       
       
      </div>
    );
  }
}


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxState => ({
  reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
