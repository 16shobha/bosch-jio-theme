import React from "react";
import "../Login/LoginPage.css";
import logo from "../../assets/jio_bp.png";
import '../../../node_modules/font-awesome/css/font-awesome.min.css' ; 
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
      <div className="bgimage text-center align-items-center">
        <div style={{top:"25%",position:"absolute",left:"70%"}} className="maincontainer">
        {/* <div className="container p-4">
          <img src={logo} height="100px" width="150px" alt="JIO" />
        </div> */}
        <div className="container credential pt-4 pb-2">
          <div className="text-start mx-2 my-2">
            <h3 className="mainheading">Member's Login</h3>
            <p>Login using registered email</p>
          </div>
          <form className="my-3">
            <div>
              <input
                type="email"
                className="form-control fontSet"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder= "&#xf0e0;"
              />
            </div>
            <div className="mb-4 my-3">
              <input
                type="password"
                className="form-control fontSet"
                id="exampleInputPassword1"
                placeholder= "&#xf084;"
              />
            </div>
            <Link to ="/home"><button type="submit" className="btn btn-md btn-success">
              Submit
            </button></Link>
            <p className="my-2 links"><a href="#">Not a Member? Sign up.</a></p>
            <h6 className="m-2 pb-2 links"><a href="#">Forgot Password?</a></h6>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
