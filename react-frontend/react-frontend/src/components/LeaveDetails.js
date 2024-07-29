import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import moment from "moment";

export default class LeaveDetails extends Component {

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
        console.log("Id is", this.state.id);
        console.log(this.state.employee)
    }

    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center ">
                            <h4 >Leave Balance</h4>
                        </div>
                        {console.log("Leavve detais is", this.state.employee)}
                        <table className="mt-4 table table-striped table-bordered ">
                            <thead className="bg-color" >
                                <tr>
                                    <th scope="col">Entitlement Name </th>
                                    <th scope="col">Current Balance</th>
                                    <th scope="col">Expiration Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Casual Leave</th>
                                    <td><div> {this.state.employee.casualLeave + " Days"}</div></td>
                                    <td><div> {moment(this.state.employee.casualLeaveExpiry).format("MM/DD/YYYY")}</div></td>
                                </tr>
                                <tr>
                                    <th scope="row">Compensatory Off</th>
                                    <td><div> {this.state.employee.compensatoryOff + " Days"}</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Earned Leave</th>
                                    <td><div> {this.state.employee.earnedLeave + " Days"}</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Earned Leave Carry Fwd 2021</th>
                                    <td><div> {this.state.employee.earnedLeaveCarryForward + " Days"}</div></td>
                                    <td>{moment(this.state.employee.earnedLeaveCarryForwardExpiry).format("MM/DD/YYYY")}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Involuntary Absence from Work</th>
                                    <td><div> {this.state.employee.involuntaryAbsenceFromWork + " Days"}</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Paternity Leave</th>
                                    <td><div> {this.state.employee.paternityLeave + " Days"}</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">Sick Leave</th>
                                    <td><div> {this.state.employee.sickLeave + " Days"}</div></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}