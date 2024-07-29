import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Login from './components/login';
import SignUp from './components/signup';
import WelcomePage from './components/WelcomePage';
import SalaryDetails from './components/SalaryDetails';
import AddSalary from './components/AddSalary';
import LeaveDetails from './components/LeaveDetails';
import AddLeave from './components/AddLeaves';
import UpdateSalary from './components/UpdateSalary';
import UpdateLeave from './components/UpdateLeave';
import About from './components/about'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/sign-up" exact component={SignUp}></Route>
            <Route path="/welcome" exact component={WelcomePage}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
            <Route path="/salary/:id" component={SalaryDetails}></Route>
            <Route path="/employeesalary" component={AddSalary}></Route>
            <Route path="/leave/:id" component={LeaveDetails}></Route>
            <Route path="/add-leave" component={AddLeave}></Route>
            <Route path="/update-salary/:id" component={UpdateSalary}></Route>
            <Route path="/update-leave/:id" component={UpdateLeave}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
