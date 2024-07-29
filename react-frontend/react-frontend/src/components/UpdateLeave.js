import React, { Component } from "react";
import moment from "moment";
import EmployeeService from '../services/EmployeeService';

export default class UpdateLeave extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      id: this.props.match.params.id,
      input: {},
      errors: {}
    }
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        input: {
          "casualLeave": employee.casualLeave,
          "compensatoryOff": employee.compensatoryOff,
          "earnedLeave": employee.earnedLeave,
          "earnedLeaveCarryForward": employee.earnedLeaveCarryForward,
          "involuntaryAbsenceFromWork": employee.involuntaryAbsenceFromWork,
          "paternityLeave": employee.paternityLeave,
          "sickLeave": employee.sickLeave,
          "casualLeaveExpiry": moment(employee.casualLeaveExpiry).format("YYYY-MM-DD"),
          "earnedLeaveCarryForwardExpiry": moment(employee.earnedLeaveCarryForwardExpiry).format("YYYY-MM-DD")
        }
      });
    });
  }

  handleChange(event) {
    let input = this.state.input;
    console.log(this.state.input)
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("in handle submit", this.state);
    if (this.validate()) {
      console.log(this.state);
      let input = {};
      input["casualLeave"] = "";
      input["compensatoryOff"] = "";
      input["earnedLeave"] = "";
      input["earnedLeaveCarryForward"] = "";
      input["involuntaryAbsenceFromWork"] = "";
      input["paternityLeave"] = "";
      input["sickLeave"] = "";
      input["casualLeaveExpiry"] = "";
      input["earnedLeaveCarryForwardExpiry"] = "";
      this.setState({ input: input });
      this.saveOrUpdateEmployee(event);
    }
  }

  validate() {
    console.log("in validate", this.state.input);
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (typeof input["casualLeave"] !== "undefined") {

      var pattern = new RegExp('[0-9]');
      if (!pattern.test(input["casualLeave"])) {
        isValid = false;
        errors["casualLeave"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["compensatoryOff"] !== "undefined") {

      var pattern2 = new RegExp('[0-9]');
      if (!pattern2.test(input["compensatoryOff"])) {
        isValid = false;
        errors["compensatoryOff"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["earnedLeave"] !== "undefined") {

      var pattern3 = new RegExp('[0-9]');
      if (!pattern3.test(input["earnedLeave"])) {
        isValid = false;
        errors["earnedLeave"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["earnedLeaveCarryForward"] !== "undefined") {

      var pattern4 = new RegExp('[0-9]');
      if (!pattern4.test(input["earnedLeaveCarryForward"])) {
        isValid = false;
        errors["earnedLeaveCarryForward"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["involuntaryAbsenceFromWork"] !== "undefined") {

      var pattern5 = new RegExp('[0-9]');
      if (!pattern5.test(input["involuntaryAbsenceFromWork"])) {
        isValid = false;
        errors["involuntaryAbsenceFromWork"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["paternityLeave"] !== "undefined") {

      var pattern6 = new RegExp('[0-9]');
      if (!pattern6.test(input["paternityLeave"])) {
        isValid = false;
        errors["paternityLeave"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["sickLeave"] !== "undefined") {

      var pattern7 = new RegExp('[0-9]');
      if (!pattern7.test(input["sickLeave"])) {
        isValid = false;
        errors["sickLeave"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["casualLeaveExpiry"] !== "undefined") {

      var pattern8 = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
      if (!pattern8.test(input["casualLeaveExpiry"])) {
        isValid = false;
        errors["casualLeaveExpiry"] = "Please enter date in format YYYY-MM-DD.";
      }
    }

    if (typeof input["earnedLeaveCarryForwardExpiry"] !== "undefined") {

      var pattern9 = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
      if (!pattern9.test(input["earnedLeaveCarryForwardExpiry"])) {
        isValid = false;
        errors["earnedLeaveCarryForwardExpiry"] = "Please enter date in format YYYY-MM-DD.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employeeLeave = {
      casualLeave: this.state.input["casualLeave"],
      compensatoryOff: this.state.input["compensatoryOff"],
      earnedLeave: this.state.input["earnedLeave"],
      earnedLeaveCarryForward: this.state.input["earnedLeaveCarryForward"],
      involuntaryAbsenceFromWork: this.state.input["involuntaryAbsenceFromWork"],
      paternityLeave: this.state.input["paternityLeave"],
      sickLeave: this.state.input["sickLeave"],
      casualLeaveExpiry: this.state.input["casualLeaveExpiry"],
      earnedLeaveCarryForwardExpiry: this.state.input["earnedLeaveCarryForwardExpiry"]
    };
    // console.log('employee are => ' + JSON.stringify(employeeLeave));
    var employeeDetails = localStorage.getItem("employeeDetails")
    employeeDetails = JSON.parse(employeeDetails);
    var employee = { ...employeeDetails, ...employeeLeave };
    // console.log("Final Employee is", employee)
    EmployeeService.updateEmployee(employee, this.state.id).then(res => {
      this.props.history.push('/employees');
    });
    localStorage.removeItem("employeeDetails")
    // console.log("Local Storage Deleted Successfully", localStorage.getItem("employeeDetails"))
  }

  handleKeypress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  cancel() {
    this.props.history.push('/employees');
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Leave</h3>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label> Casual Leave: </label>
                    <input placeholder="Casual Leave:" name="casualLeave" className="form-control"
                      value={this.state.input["casualLeave"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.casualLeave}</div>
                  </div>
                  <div className="form-group">
                    <label> Compensatory Off: </label>
                    <input placeholder="CompensatoryOff" name="compensatoryOff" className="form-control"
                      value={this.state.input["compensatoryOff"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.compensatoryOff}</div>
                  </div>
                  <div className="form-group">
                    <label> Earned Leave: </label>
                    <input placeholder="Earned Leave" name="earnedLeave" className="form-control"
                      value={this.state.input["earnedLeave"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.earnedLeave}</div>
                  </div>
                  <div className="form-group">
                    <label> Earned Leave Carry Forward: </label>
                    <input placeholder="Earned Leave Carry Fwd" name="earnedLeaveCarryForward" className="form-control"
                      value={this.state.input["earnedLeaveCarryForward"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.earnedLeaveCarryForward}</div>
                  </div>
                  <div className="form-group">
                    <label> Involuntary Absence From Work: </label>
                    <input placeholder="Involuntary Absence From Work" name="involuntaryAbsenceFromWork" className="form-control"
                      value={this.state.input["involuntaryAbsenceFromWork"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.involuntaryAbsenceFromWork}</div>
                  </div>
                  <div className="form-group">
                    <label> Paternity Leave: </label>
                    <input placeholder="Paternity Leave" name="paternityLeave" className="form-control"
                      value={this.state.input["paternityLeave"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.paternityLeave}</div>
                  </div>
                  <div className="form-group">
                    <label> Sick Leave: </label>
                    <input placeholder="Sick Leave" name="sickLeave" className="form-control"
                      value={this.state.input["sickLeave"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.sickLeave}</div>
                  </div>
                  <div className="form-group">
                    <label> Casual Leave Expiry: </label>
                    <input placeholder="Casual Leave Expiry" name="casualLeaveExpiry" className="form-control"
                      value={this.state.input["casualLeaveExpiry"]} onChange={this.handleChange} />
                    <div className="text-danger">{this.state.errors.casualLeaveExpiry}</div>
                  </div>
                  <div className="form-group">
                    <label> Earned Leave Expiry: </label>
                    <input placeholder="Earned Leave Expiry" name="earnedLeaveCarryForwardExpiry" className="form-control"
                      value={this.state.input["earnedLeaveCarryForwardExpiry"]} onChange={this.handleChange} />
                    <div className="text-danger">{this.state.errors.earnedLeaveCarryForwardExpiry}</div>
                  </div>

                  <button className="btn btn-success"
                    // // onClick={this.saveOrUpdateEmployee}
                    disabled={!this.state.input["casualLeave"] || !this.state.input["casualLeaveExpiry"] || !this.state.input["compensatoryOff"]
                      || !this.state.input["earnedLeave"] || !this.state.input["earnedLeaveCarryForward"] || !this.state.input["earnedLeaveCarryForwardExpiry"]
                      || !this.state.input["involuntaryAbsenceFromWork"] || !this.state.input["paternityLeave"] || !this.state.input["sickLeave"]}
                  >Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}