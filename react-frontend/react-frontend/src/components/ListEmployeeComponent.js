import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { FcEditImage, FcDeleteRow, FcViewDetails, FcMoneyTransfer, FcLeave } from "react-icons/fc";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }
    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    viewEmployeeSalary(id) {
        this.props.history.push(`/salary/${id}`)
    }

    viewEmployeeLeave(id) {
        this.props.history.push(`/leave/${id}`)
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> List of Employees</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.email}</td>
                                            <td>
                                                <button> <FcEditImage size={35} onClick={() => this.editEmployee(employee.id)}></FcEditImage></button>
                                                <button> <FcDeleteRow size={35} onClick={() => this.deleteEmployee(employee.id)}></FcDeleteRow></button>
                                                <button><FcViewDetails size={35} onClick={() => this.viewEmployee(employee.id)}></FcViewDetails></button>
                                                <button><FcMoneyTransfer size={35} onClick={() => this.viewEmployeeSalary(employee.id)}></FcMoneyTransfer></button>
                                                <button><FcLeave size={35} onClick={() => this.viewEmployeeLeave(employee.id)}></FcLeave></button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
