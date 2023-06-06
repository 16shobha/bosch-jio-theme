import React from "react";
import "../Login/LoginPage.css";
import logo from "../../assets/jio_bp.png";
import '../../../node_modules/font-awesome/css/font-awesome.min.css' ; 
const LoginPage = () => {
  return (
    <>
    <div className="outercontainer">
      <div className="container maincontainer d-flex vertical-center text-center align-items-center">
        <div className="container logo p-4">
          <img className="w-100" src={logo} alt="JIO" />
        </div>
        <div className="container credential pt-4">
          <div className="text-start mx-2 my-2 pb-2">
            <h2 className="mainheading">Member's Login</h2>
            <h4>Login using registered email</h4>
          </div>
          <form className="my-2">
            <div>
              <input
                type="email"
                className="form-control fontSet"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder= "&#xf0e0;    Email"
              />
              <div id="emailHelp" className="form-text my-2">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control fontSet"
                id="exampleInputPassword1"
                placeholder= "&#xf084;    Password"
              />
            </div>
            <button type="submit" className="btnsub btn btn-md">
              Submit
            </button>
            <h5 className="my-2 links"><a href="#">Not a Member? Sign up.</a></h5>
            <h6 className="m-2 pb-2 links"><a href="#">Forgot Password?</a></h6>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default LoginPage;
