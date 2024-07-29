import React, { Component } from "react";
import EmployeeService from '../services/EmployeeService';

export default class UpdateSalary extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
          "basic": employee.basic,
          "hra": employee.hra,
          "specialAllowance": employee.specialAllowance,
          "total": employee.total,
          "deductionType": employee.deductionType,
          "modeOfPay": employee.modeOfPay,
          "designation": employee.designation,
          "individualIncentives": employee.individualIncentives,
          "pfAmountDeduction": employee.pfAmountDeduction
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
      input["modeOfPay"] = "";
      input["designation"] = "";
      input["basic"] = "";
      input["hra"] = "";
      input["specialAllowance"] = "";
      input["individualIncentives"] = "";
      input["pfAmountDeduction"] = "";
      input["total"] = "";
      input["deductionType"] = "";
      this.setState({ input: input });
      this.saveOrUpdateEmployee(event);
    }
  }

  validate() {
    console.log("in validate", this.state.input);
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (typeof input["modeOfPay"] !== "undefined") {

      var pattern = new RegExp('[a-zA-Z]');
      if (!pattern.test(input["modeOfPay"])) {
        isValid = false;
        errors["modeOfPay"] = "Please enter valid string.";
      }
    }

    if (typeof input["designation"] !== "undefined") {

      var pattern2 = new RegExp('[a-zA-Z]');
      if (!pattern2.test(input["designation"])) {
        isValid = false;
        errors["designation"] = "Please enter valid designation.";
      }
    }

    if (typeof input["basic"] !== "undefined") {

      var pattern3 = new RegExp('[0-9]');
      if (!pattern3.test(input["basic"])) {
        isValid = false;
        errors["basic"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["hra"] !== "undefined") {

      var pattern4 = new RegExp('[0-9]');
      if (!pattern4.test(input["hra"])) {
        isValid = false;
        errors["hra"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["specialAllowance"] !== "undefined") {

      var pattern5 = new RegExp('[0-9]');
      if (!pattern5.test(input["specialAllowance"])) {
        isValid = false;
        errors["specialAllowance"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["individualIncentives"] !== "undefined") {

      var pattern6 = new RegExp('[0-9]');
      if (!pattern6.test(input["individualIncentives"])) {
        isValid = false;
        errors["individualIncentives"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["pfAmountDeduction"] !== "undefined") {

      var pattern7 = new RegExp('[0-9]');
      if (!pattern7.test(input["pfAmountDeduction"])) {
        isValid = false;
        errors["pfAmountDeduction"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["total"] !== "undefined") {

      var pattern8 = new RegExp('[0-9]');
      if (!pattern8.test(input["total"])) {
        isValid = false;
        errors["total"] = "Please enter valid integer value.";
      }
    }

    if (typeof input["deductionType"] !== "undefined") {

      var pattern9 = new RegExp('[0-9]');
      if (!pattern9.test(input["deductionType"])) {
        isValid = false;
        errors["deductionType"] = "Please enter valid integer value.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  saveOrUpdateEmployee = (e) => {
    var employeeDetails = localStorage.getItem("employeeDetails")
    employeeDetails = JSON.parse(employeeDetails);
    // console.log("Local Storage is", employeeDetails);
    e.preventDefault();
    let employeeSalary = {
      modeOfPay: this.state.input["modeOfPay"],
      designation: this.state.input["designation"],
      basic: this.state.input["basic"],
      hra: this.state.input["hra"],
      specialAllowance: this.state.input["specialAllowance"],
      individualIncentives: this.state.input["individualIncentives"],
      pfAmountDeduction: this.state.input["pfAmountDeduction"],
      total: this.state.input["total"],
      deductionType: this.state.input["deductionType"]
    };
    // console.log('employee => ' + JSON.stringify(employeeSalary));
    var updatedEmployeeDetails = { ...employeeDetails, ...employeeSalary }
    console.log(updatedEmployeeDetails)
    localStorage.setItem("employeeDetails", JSON.stringify(updatedEmployeeDetails))
    // console.log("This.state.id is", this.state.id)
    this.changeRoute(this.state.id);
  }

  changeRoute(id) {
    this.props.history.push(`/update-leave/${id}`);
  }

  cancel() {
    this.props.history.push('/employees');
  }

  handleKeypress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Salary</h3>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label> Mode of Pay: </label>
                    <input placeholder="Mode of Pay" name="modeOfPay" className="form-control"
                      value={this.state.input["modeOfPay"]} onChange={this.handleChange} />
                    <div className="text-danger">{this.state.errors.modeOfPay}</div>
                  </div>
                  <div className="form-group">
                    <label> Designation: </label>
                    <input placeholder="Designation" name="designation" className="form-control"
                      value={this.state.input["designation"]} onChange={this.handleChange} />
                    <div className="text-danger">{this.state.errors.designation}</div>
                  </div>
                  <div className="form-group">
                    <label> Basic Salary: </label>
                    <input placeholder="Basic Salary" name="basic" className="form-control"
                      value={this.state.input["basic"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.basic}</div>
                  </div>
                  <div className="form-group">
                    <label> HRA </label>
                    <input placeholder="HRA" name="hra" className="form-control"
                      value={this.state.input["hra"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.hra}</div>
                  </div>
                  <div className="form-group">
                    <label> Special Allowance: </label>
                    <input placeholder="Special Allowance" name="specialAllowance" className="form-control"
                      value={this.state.input["specialAllowance"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.specialAllowance}</div>
                  </div>
                  <div className="form-group">
                    <label> Individual Incentive: </label>
                    <input placeholder="Individual Incentive" name="individualIncentives" className="form-control"
                      value={this.state.input["individualIncentives"]} onChange={this.handleChange} />
                    <div className="text-danger">{this.state.errors.individualIncentives}</div>
                  </div>
                  <div className="form-group">
                    <label> P.F </label>
                    <input placeholder="P.F" name="pfAmountDeduction" className="form-control"
                      value={this.state.input["pfAmountDeduction"]} onChange={this.handleChange} />
                    <div className="text-danger">{this.state.errors.pfAmountDeduction}</div>
                  </div>
                  <div className="form-group">
                    <label> Total Deduction: </label>
                    <input placeholder="Total Deduction" name="deductionType" className="form-control"
                      value={this.state.input["deductionType"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.deductionType}</div>
                  </div>
                  <div className="form-group">
                    <label> Total Earning: </label>
                    <input placeholder="Total Earning" name="total" className="form-control"
                      value={this.state.input["total"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.total}</div>
                  </div>

                  <button className="btn btn-success"
                    disabled={!this.state.input["basic"] || !this.state.input["deductionType"] || !this.state.input["designation"]
                      || !this.state.input["hra"] || !this.state.input["individualIncentives"] || !this.state.input["modeOfPay"] || !this.state.input["pfAmountDeduction"]
                      || !this.state.input["specialAllowance"] || !this.state.input["total"]}>Next</button>
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