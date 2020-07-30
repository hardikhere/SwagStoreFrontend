import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import "../styles.css";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    role:1,
    success: false
  });

  const { name, email, password, error, success,role } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password ,role})
      .then(data => {
          console.log(data);
        if (data.err || data.errors) {
          setValues({ ...values, error: data.err||data.errors, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
    

     
        <div className="signupBack" style={{width:"65%",marginLeft:"16%"}}>

        
          <form>
            <div className="form-group">
              <label className="text-white">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-white">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-white">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
          </div>
      
    );
  };

  const successMessage = () => {
    return (
      <div className="row" >
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <Base title="Signup " desc="Signup to buy cool tshirts!"></Base>
       {successMessage()}
      {errorMessage()}
     
      <div className="container" style={{marginTop:"23%"}}>
        <div className="row">
          <div className="col-12">
          {signUpForm()}
          </div>
        </div>
      </div>
      <footer>
    <div style={{width:"100%",height:"15rem",backgroundColor:"rgb(66,66,66)",position:"inherit",marginTop:"14%",marginBottom:0}}>
      <div style={{textAlign:"center",padding:"2rem"}}>
      <h3 style={{color:"white"}}> Made with &nbsp;
      <i className="fa fa-heart" aria-hidden="true" style={{color:"white"}}></i>&nbsp;
      by Hardik Khanchandani
      </h3>
      </div>
      <div style={{textAlign:"center",color:"white"}}>
        <h3>
        Front End Source Code &nbsp; 
        <a href="https://github.com/hardikhere/ecomfronend">
        <i style={{fontSize:"2.4rem"}} className="fa fa-github" aria-hidden="true"></i>
        </a>
        </h3>
       
        <h3>
        Back End Source Code &nbsp; 
        <a href="https://github.com/hardikhere/ecombackend">
        <i style={{fontSize:"2.4rem"}} className="fa fa-github" aria-hidden="true"></i>
        </a>
        </h3>
      </div>
     
    
    </div>
</footer>
 
     
     
    </>
  );
};

export default Signup;
