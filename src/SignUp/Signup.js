import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
// import { Form, Button, Input } from 'antd';
import { debounce } from "lodash";
import ServiceStore from "../util/ServiceStore";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Input,
  Row,
  Col,
  Table,
  Form,
  Button,
} from "reactstrap";
function Signup() {
  const [disabled, setdisabled] = useState(true);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameerror, setNameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const navigate = useNavigate();
  const handleChange = debounce(() => {});
  const handleSubmit = (e) => {
    e.preventDefault();
    const method = "signup/users/signup";
    const dataobj = { name: name, email: email, password: password };
    console.log("dataobj", dataobj);
    if (dataobj.name == "") {
      setNameerror("Please Enter Your Name");
    }
    if (dataobj.email == "") {
      setemailerror("Please Enter Your Enail");
    }
    if (dataobj.password == "") {
      setpassworderror("Please Enter Your Password");
    }
    if (dataobj.password == "" || dataobj.name == "" || dataobj.email == "") {
      return;
    }
    new ServiceStore().InsertData(method, dataobj).then((res) => {
      console.log("res", res);
      navigate("/Signin");
    });
  };
  return (
    <>
      <div className="container-flex overflow-class">
        <div className="row">
          
          <div className="col-md-6 signupimg ">
          <img src='/Sign-in.png' className='sinImg'></img> 
            <div className="si-logo su-logo">
                  <img src="./Kling.png" alt="" className="signin-kling  su-kling" />
                  <span className="signin-shop2cash su-s2c">Shop2Cash</span>
                </div>  
          </div>
          <div className="col-md-6 padding-top-bottom1 signup2">
            <div className="signup-header">
              <h5>Create an Account</h5>
              <p>Let’s get better by buying cheaper.</p>
            </div>
            <Form>
              <div className="input-container input-icons2">
                <i className="fa fa-user icon4"></i>
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="input-field1 input-margin1"
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="input-container input-icons2">
                <i className="fa fa-envelope icon4"></i>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field1 input-margin1"
                  type="text"
                  placeholder="Enter your Email"
                  name="email"
                />
              </div>
              <div className="input-container input-icons2">
                <img src="/pass-icon.svg" alt="" className="signup-pass" />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field1 input-margin1"
                  type="password"
                  placeholder="Create your password"
                  name="psw"
                />
              </div>

              <div className="signin-btn">
                <button type="submit" onClick={handleSubmit}>
                  Sign up
                </button>
              </div>
              <p className="or">OR</p>
              <div className="g-btn">
                <Link to="/Signin">
                  <button type="submit">Sign in</button>
                </Link>
              </div>
            </Form>
          </div>
          <div className="col-md-6 signupimg1 ">
          <img src='/Sign-in.png' className='sinImg'></img> 
            <div className="si-logo su-logo">
                  <img src="./Kling.png" alt="" className="signin-kling su-kling" />
                  <span className="signin-shop2cash su-s2c">Shop2Cash</span>
                </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
