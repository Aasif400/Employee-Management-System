import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      input: {},
      errors: {}
    }
    this.updateEmployee = this.updateEmployee.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        input: {
          "firstName": employee.firstName,
          "lastName": employee.lastName,
          "email": employee.email,
          "password": employee.password
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
      input["email"] = "";
      input["firstName"] = "";
      input["lastName"] = "";
      this.setState({ input: input });
      this.updateEmployee(event);
    }
  }

  validate() {
    console.log("in validate", this.state.input);
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (typeof input["email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (typeof input["firstName"] !== "undefined") {

      var pattern2 = new RegExp('[a-zA-Z]');
      if (!pattern2.test(input["firstName"])) {
        isValid = false;
        errors["firstName"] = "Please enter valid name.";
      }
    }

    if (typeof input["lastName"] !== "undefined") {

      var pattern3 = new RegExp('[a-zA-Z]');
      if (!pattern3.test(input["lastName"])) {
        isValid = false;
        errors["lastName"] = "Please enter valid name.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  updateEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName: this.state.input["firstName"], lastName: this.state.input["lastName"], email: this.state.input["email"], password: this.state.input["password"] };
    console.log("pswd is", this.state.input["password"]);
    console.log('employee => ' + JSON.stringify(employee));
    console.log('id => ' + JSON.stringify(this.state.id));
    localStorage.setItem("employeeDetails", JSON.stringify(employee));
    console.log("Current is", localStorage.getItem("employeeDetails"))
    this.changeRoute(this.state.id);
  }

  changeRoute(id) {
    this.props.history.push(`/update-salary/${id}`);
  }

  cancel() {
    this.props.history.push('/employees');
  }

  handleKeypress = (event) => {
    if (!/[A-Z a-z]/.test(event.key)) {
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
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input placeholder="First Name" name="firstName" className="form-control"
                      value={this.state.input["firstName"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.firstName}</div>
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input placeholder="Last Name" name="lastName" className="form-control"
                      value={this.state.input["lastName"]} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <div className="text-danger">{this.state.errors.lastName}</div>
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input type="text" placeholder="Email Address" name="email" className="form-control"
                      value={this.state.input["email"]} onChange={this.handleChange} disabled />
                    <div className="text-danger">{this.state.errors.email}</div>
                  </div>

                  <button className="btn btn-success" disabled={!this.state.input["firstName"] || !this.state.input["lastName"] || !this.state.input["email"]} >Next</button>
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

export default UpdateEmployeeComponent
