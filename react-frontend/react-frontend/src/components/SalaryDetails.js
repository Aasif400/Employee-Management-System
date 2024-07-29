import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

export default class SalaryDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
        console.log(this.state.employee);
    }

    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center ">
                            <h6 >Salary Detail</h6>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">EMP Code</span> <small className="ms-3">{this.state.employee.id}</small> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">EMP Name</span> <small className="ms-3">{this.state.employee.firstName + " " + this.state.employee.lastName}</small> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">Mode of Pay</span> <small className="ms-3">{this.state.employee.modeOfPay}</small> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div> <span className="fw-bolder">Designation</span> <small className="ms-3">{this.state.employee.designation}</small> </div>
                                    </div>
                                </div>
                            </div>
                            <table className="mt-4 table table-striped table-bordered ">
                                <thead className="bg-color" >
                                    <tr>
                                        <th scope="col">Earnings</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Deductions</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {console.log("leave si", this.state.employee)}
                                    <tr>
                                        <th scope="row">Basic</th>
                                        <td>{this.state.employee.basic}</td>
                                        <td>PF</td>
                                        <td>{this.state.employee.pfAmountDeduction}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">HRA</th>
                                        <td>{this.state.employee.hra} </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Special Allowance</th>
                                        <td>{this.state.employee.specialAllowance}</td>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Individual Incentive</th>
                                        <td>{this.state.employee.individualIncentives}</td>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr className="border-top">
                                        <th scope="row">Total Earning</th>
                                        <td>{this.state.employee.total}</td>
                                        <td>Total Deductions</td>
                                        <td>{this.state.employee.deductionType}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-md-4"> <br /> <span className="fw-bold">Net Pay : {this.state.employee.total}</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}