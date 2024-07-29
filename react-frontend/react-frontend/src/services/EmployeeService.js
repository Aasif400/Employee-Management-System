import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_BASE_URL_AUTH ="http://localhost:8080/api/v1/validateEmployee";
const EMPLOYEE_API_BASE_URL_AUTH_EMAIL ="http://localhost:8080/api/v1/validateEmail";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    authenticateUser(employee){
        return axios.post(EMPLOYEE_API_BASE_URL_AUTH , employee)
    }

    authenticateUserEmail(employee){
        return axios.post(EMPLOYEE_API_BASE_URL_AUTH_EMAIL , employee)
    }
}

export default new EmployeeService()