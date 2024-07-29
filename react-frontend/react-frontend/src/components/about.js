import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <form>
        <div
          style={{
            color: "black",
          }}
        >
          <center
            style={{
              backgroundColor: "yellow",
            }}
          >
            <h1>Employee Management Application</h1>
          </center>
          <div>
            <br />
            <center>
              <h1>Project Details</h1>
              <p>
                The entire system of Employee Management System (EMS) is
                designed to remove problems in existing system and the
                organization will meets its specific aims. One of the most
                important aims from the system to provide detail profile of each
                employee as a result the system is most important for improving
                other systems of the organization like Human Resources (HR).
                <br />
                An effective Employee Management System helps to generate
                accurate and timely employee information to fulfill the
                objectives. EMS keeps the records of employee information and
                the admin team can update the data of employee and if any
                employee leaves the organization then the information can also
                be deleted by admin.
              </p>
              <br />
              <br />
              <h1>Team Members</h1>
              <h6>Mayank Upadhyay</h6>
              <h6>Soumy Alguje</h6>
              <h6>Mohammad Aasif Chauhan</h6>
              <h6>Hemanth Puttabanthi</h6>
              <h6>Vishaka Sharma</h6>
            </center>
          </div>
        </div>
      </form>
    );
  }
}
