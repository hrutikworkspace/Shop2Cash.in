import React, {useState} from 'react'
import { Link,useNavigate  } from 'react-router-dom';
import './SignIn.css';
// import { Form, Button, Input } from 'antd';
import { debounce } from "lodash";
import ServiceStore from "../util/ServiceStore";
import FacebookIcon from '@mui/icons-material/Facebook';

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
  Button
} from "reactstrap";

function SignIn() {
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameerror, setNameerror] = useState('')
  const [emailerror, setemailerror] = useState('')
  const [passworderror, setpassworderror] = useState('')
  const navigate  = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  // if(user == null){
  //   console.log("user",user)
  //   navigate('/Signin')
  // }else{
  //   navigate('/HomePageSignup')
  // }
  const handleChange = debounce(() => {
  })
  const handleSubmit = (e) => {
    e.preventDefault();
   
   const dataobj = {'email':email,'password':password}
   console.log("dataobj",dataobj)
  
    if(dataobj.email == ''){
      setemailerror('Please Enter Your Enail')
    }
    if(dataobj.password == ''){
      setpassworderror('Please Enter Your Password')
    }
    if(dataobj.password == '' ||   dataobj.email == ''){
      return
    }
    const method = 'signin/users/signin'
      new ServiceStore().Login(method,dataobj).then((res) => {
        console.log("res",res)
        if(res.response.data == ''){
          setNameerror("Email And Password Is Incorrect...")
        // navigate('/HomePageSignup')
        }else{
          navigate('/HomePageSignup')
           localStorage.setItem('token', res.response.token)
           localStorage.setItem("user",JSON.stringify(res.response.user))
        }
      })
  }
  return (
    <>
      <div className="container-flex overflow-class scroll" >
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 padding-top-bottom1 hello">
            <div className="signin-header">
              <h5>Welcome Back!</h5>
              <p>The faster you fill up, the faster you get offers.</p>
            </div>
            <form>
            <div className="input-container input-icons2">
            <i className="fa fa-envelope icon4"></i>
            {/* <input className="input-field1 input-margin1" type="text" placeholder="Enter your email please..." name="email"/> */}
            <input onChange={(e) => setEmail(e.target.value)} className="input-field1 input-margin1" type="text" placeholder="Enter your email please..." name="email"/>

          
          </div>
  
  <div className="input-container input-icons2">
    {/* <i className="fa fa-key icon4"></i> */}
    <img src="/pass-icon.svg" alt="" className="pass-icons"/>
    {/* <input className="input-field1" type="password" placeholder="Enter your password too..." name="psw"/> */}
    <input onChange={(e) => setPassword(e.target.value)} className="input-field1" type="password" placeholder="Enter your password too.." name="psw"/>

  </div>
  <div className="form-group clearfix">
    <div className="row margin-lr">
      <div className="col-6">
                  <div className="custom-control custom-checkbox float-left">
                    <input type="checkbox" className="custom-control-input" id="customCheck" name="rem" />
                    <label className="custom-control-label" >Remember me</label>
                  </div>
                  </div>
                  <div className="col-6">
                  <div className="forgot float-right">
                    Forgot Password?
                  </div>
                  </div>
                  </div>
                </div>
                <span style={{color:"red"}}>{nameerror}</span>
                <div className="signin-btn">
                  <button onClick={handleSubmit}>Sign in</button>
                </div>
                <p className="or">OR</p>
                <div className="g-btn">
                  <button>
                    {/* <i className="fa fa-google fa-fw"></i> */}
                    <span className="signin-google">
                    {/* <img src="/google.svg" alt="" /> */}
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.8552 12.2753C24.8552 11.4595 24.7881 10.6394 24.6449 9.83691H13.1668V14.4579H19.7398C19.467 15.9483 18.5906 17.2667 17.3073 18.1044V21.1027H21.2288C23.5316 19.0127 24.8552 15.9262 24.8552 12.2753Z" fill="#4285F4"/>
<path d="M13.1668 23.9994C16.4488 23.9994 19.2167 22.9367 21.2332 21.1024L17.3118 18.104C16.2208 18.836 14.8123 19.2505 13.1712 19.2505C9.99653 19.2505 7.30472 17.1384 6.33889 14.2988H2.29224V17.3897C4.35805 21.442 8.56567 23.9994 13.1668 23.9994Z" fill="#34A853"/>
<path d="M6.33443 14.2997C5.82468 12.8094 5.82468 11.1956 6.33443 9.70521V6.61426H2.29225C0.566278 10.005 0.566278 13.9999 2.29225 17.3906L6.33443 14.2997Z" fill="#FBBC04"/>
<path d="M13.1668 4.74868C14.9017 4.72223 16.5785 5.36598 17.8349 6.5477L21.3092 3.12163C19.1093 1.08453 16.1895 -0.0354425 13.1668 -0.0001679C8.56565 -0.0001679 4.35805 2.55725 2.29224 6.61383L6.33441 9.70478C7.29577 6.86075 9.99205 4.74868 13.1668 4.74868Z" fill="#EA4335"/>
</svg>

                    </span>
                    Sign in with Google</button>
                </div>
                <div className="f-btn">
                <button>
                  {/* <i className="fa fa-facebook fa-fw"/> */}
                  <span className="si-facebookicon">
                  {/* <img src="/fb.svg" alt="" /> */}
                  {/* <FacebookIcon className='f-icon1'/> */}
                  <svg width="25" height="25" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67101 11.4698L10.2027 8.00022H6.87491V5.74912C6.87491 4.80074 7.33896 3.87431 8.83074 3.87431H10.3445V0.92109C10.3445 0.92109 8.97091 0.686523 7.65794 0.686523C4.91743 0.686523 3.12529 2.34709 3.12529 5.35594V8.00032H0.0775757V11.4699H3.12529V19.8553C3.73614 19.9513 4.36221 20.0003 5.00011 20.0003C5.63799 20.0003 6.26406 19.9497 6.87491 19.8553V11.4699H9.67118L9.67101 11.4698Z" fill="#FEFEFE"/>
</svg> &nbsp;&nbsp;&nbsp;

                  </span>
                  Sign in with Facebook</button>
                </div>
                <div className="no-account">
                 <span>Don’t have an account?</span><Link to="/Signup">Sign up</Link>
                </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <img src='/Sign-in.png' className='sinImg'></img> 
            <div className="si-logo">
                  <img src="./Kling.png" alt="" className="signin-kling" />
                  <span className="signin-shop2cash">Shop2Cash</span>
                </div>       
          </div>
          <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 padding-top-bottom1 hello1">
            <div className="signin-header">
              <h5>Welcome Back!</h5>
              <p>The faster you fill up, the faster you get offers.</p>
            </div>
            <form>
            <div className="input-container input-icons2">
            <i className="fa fa-envelope icon4"></i>
            {/* <input className="input-field1 input-margin1" type="text" placeholder="Enter your email please..." name="email"/> */}
            <input onChange={(e) => setEmail(e.target.value)} className="input-field1 input-margin1" type="text" placeholder="Enter your email please..." name="email"/>

          
          </div>
  
  <div className="input-container input-icons2">
    {/* <i className="fa fa-key icon4"></i> */}
    <img src="/pass-icon.svg" alt="" className="pass-icons"/>
    {/* <input className="input-field1" type="password" placeholder="Enter your password too..." name="psw"/> */}
    <input onChange={(e) => setPassword(e.target.value)} className="input-field1" type="password" placeholder="Enter your password too.." name="psw"/>

  </div>
  <div className="form-group clearfix">
    <div className="row margin-lr">
      <div className="col-6">
                  <div className="custom-control custom-checkbox float-left">
                    <input type="checkbox" className="custom-control-input" id="customCheck" name="rem" />
                    <label className="custom-control-label" >Remember me</label>
                  </div>
                  </div>
                  <div className="col-6">
                  <div className="forgot float-right">
                    Forgot Password?
                  </div>
                  </div>
                  </div>
                </div>
                <span style={{color:"red"}}>{nameerror}</span>
                <div className="signin-btn">
                  <button onClick={handleSubmit}>Sign in</button>
                </div>
                <p className="or">OR</p>
                <div className="g-btn">
                  <button>
                    {/* <i className="fa fa-google fa-fw"></i> */}
                    <span className="signin-google">
                    {/* <img src="/google.svg" alt="" /> */}
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.8552 12.2753C24.8552 11.4595 24.7881 10.6394 24.6449 9.83691H13.1668V14.4579H19.7398C19.467 15.9483 18.5906 17.2667 17.3073 18.1044V21.1027H21.2288C23.5316 19.0127 24.8552 15.9262 24.8552 12.2753Z" fill="#4285F4"/>
<path d="M13.1668 23.9994C16.4488 23.9994 19.2167 22.9367 21.2332 21.1024L17.3118 18.104C16.2208 18.836 14.8123 19.2505 13.1712 19.2505C9.99653 19.2505 7.30472 17.1384 6.33889 14.2988H2.29224V17.3897C4.35805 21.442 8.56567 23.9994 13.1668 23.9994Z" fill="#34A853"/>
<path d="M6.33443 14.2997C5.82468 12.8094 5.82468 11.1956 6.33443 9.70521V6.61426H2.29225C0.566278 10.005 0.566278 13.9999 2.29225 17.3906L6.33443 14.2997Z" fill="#FBBC04"/>
<path d="M13.1668 4.74868C14.9017 4.72223 16.5785 5.36598 17.8349 6.5477L21.3092 3.12163C19.1093 1.08453 16.1895 -0.0354425 13.1668 -0.0001679C8.56565 -0.0001679 4.35805 2.55725 2.29224 6.61383L6.33441 9.70478C7.29577 6.86075 9.99205 4.74868 13.1668 4.74868Z" fill="#EA4335"/>
</svg>

                    </span>
                    Sign in with Google</button>
                </div>
                <div className="f-btn">
                <button>
                  {/* <i className="fa fa-facebook fa-fw"/> */}
                  <span className="si-facebookicon">
                  {/* <img src="/fb.svg" alt="" /> */}
                  {/* <FacebookIcon className='f-icon1'/> */}
                  <svg width="25" height="25" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67101 11.4698L10.2027 8.00022H6.87491V5.74912C6.87491 4.80074 7.33896 3.87431 8.83074 3.87431H10.3445V0.92109C10.3445 0.92109 8.97091 0.686523 7.65794 0.686523C4.91743 0.686523 3.12529 2.34709 3.12529 5.35594V8.00032H0.0775757V11.4699H3.12529V19.8553C3.73614 19.9513 4.36221 20.0003 5.00011 20.0003C5.63799 20.0003 6.26406 19.9497 6.87491 19.8553V11.4699H9.67118L9.67101 11.4698Z" fill="#FEFEFE"/>
</svg> &nbsp;&nbsp;&nbsp;

                  </span>
                  Sign in with Facebook</button>
                </div>
                <div className="no-account">
                 <span>Don’t have an account?</span><Link to="/Signup">Sign up</Link>
                </div>
            </form>
          </div>
         
         
        </div>
      </div>
    </>
  );
}

export default SignIn;
