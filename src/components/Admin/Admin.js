import React, { Component } from "react";
import { connect } from "react-redux";
import "./Admin.css";
import Table from "react-bootstrap/Table";

class Admin extends Component {
  //state holds the values of formId and Approval Status
  state = {
    formId: "",
    approvalStatus: false,
  };
  //this function loads the page with information done by the getAdminForm function
  componentDidMount = () => {
    this.getAdminForm();
  };

  //get info to put on the admin page
  getAdminForm = () => {
    this.props.dispatch({
      type: "GET_ADMIN",
      payload: this.props.reduxState.user.id,
      // id: this.props.reduxState.adminDetails.form_id,
    });
  };

  // Appproval status button function
  updateApprovalStatus = (formId, update, approved) => {
    this.props.dispatch({
      type: "SET_STATUS_1",
      payload: formId,
      update,
      approved,
    });
    this.getAdminForm();
  };

  //takes user to admin details page and loads the details
  details = (id) => {
    this.props.dispatch({
      type: "GET_ADMIN_FORM",
      formId: id,
    });
    this.props.history.push("/admin-details");
  };

  render() {
    return (
      <div className="Admin">
        <h1 className="adminHead">Events Waiting for Approval</h1>

        <Table striped bordered hover>
          <thead className="tableHead">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company Name</th>
              <th>Event Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.reduxState.admin.length > 0 && (
              <>
                {this.props.reduxState.admin.map((events, index) => {
                  return (
                    <tr className="adminTable" key={index}>
                      <td className="tdEvent">
                        {events.contact_first_name} {events.contact_last_name}
                      </td>
                      <td className="tdEvent">{events.contact_email}</td>
                      <td className="tdEvent">{events.contact_phone}</td>
                      <td className="tdEvent">{events.company_name}</td>
                      <td className="tdEvent">{events.event_type}</td>

                      <td
                        className="statusButton"
                        onClick={() =>
                          this.updateApprovalStatus(
                            events.formid,
                            events.user_id,
                            !events.approved
                          )
                        }
                      >
                        <center>
                          {events.approved ? (
                            <button className="approved">Approved</button>
                          ) : (
                            <button className="unapproved">Unapproved</button>
                          )}
                        </center>
                      </td>

                      <td>
                        <center>
                          <button
                            className="detailsButton"
                            onClick={() => this.details(events.formid)}
                          >
                            Details
                          </button>
                        </center>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

//connects to redux store
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(Admin);
