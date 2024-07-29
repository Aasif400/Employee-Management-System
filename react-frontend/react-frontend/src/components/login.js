import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import loginvalidation from './LoginValidation';
import { useHistory } from "react-router-dom";
// import axios from 'axios';


const Login = () => {

  const [user, setUser] = useState({

    "email": "",

    "password": ""

  })

  const [errors, setErrors] = useState({})

  const [submitted, setSubmitted] = useState(false)

  const history = useHistory()

  const handleInput = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value })

  }

  const handleSubmit = e => {

    e.preventDefault()

    setErrors(loginvalidation(user))

    setSubmitted(true)

  }

  useEffect(() => {

    console.log(errors)

    if (Object.keys(errors).length === 0 && submitted) {

      console.log("User is", user)
      EmployeeService.authenticateUser(user)
        .then(resp => {
          console.log(resp.data.data)
          history.push("/welcome")
        })

        .catch(error => {
          console.log("Error", error);
          alert("Invalid username or password")
        })

    }

  }, [errors])

  return (<form onSubmit={handleSubmit}>

    <h3>Sign In</h3>

    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="text" className="form-control" name="email" value={user.email} onChange={handleInput} id="email" placeholder="Enter email" />
      {errors.email && <div className="text-danger">{errors.email}</div>}
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" name="password" id="password" value={user.password} onChange={handleInput} placeholder="Enter password" />
      {errors.password && <div className="text-danger">{errors.password}</div>}
    </div>
    <button type="submit" className="btn btn-primary btn-block" disabled={!user.password || !user.email} >Submit</button>
  </form>

  );

};

export default Login;