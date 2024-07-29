import React, { Component } from "react";
import Background from "../backgroundImage.png";
import "../my.css";

export default class Welcome extends Component {
  render() {
    return (
      <form>
        <div>
          <center>
            <h4 className="m1">Welcome To Our Website</h4>
          </center>
        </div>
        <div
          style={{
            backgroundImage: `url(${Background})`,
            height: "550px",
            width: "1600x",
            backgroundRepeat: "no-repeat",
            // backgroundColor: "black",
          }}
        ></div>
        <div>
          <center>
            <h4>Created By POD Team 4 </h4>
            <h4>Employee Management System.</h4>
          </center>
        </div>
      </form>
    );
  }
}
