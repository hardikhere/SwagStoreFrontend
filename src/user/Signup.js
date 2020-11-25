import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import "../styles.css";
import Menu from "../menu";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    role: 1,
    success: false
  });

  const { name, email, password, error, success, role } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, role })
      .then(data => {
        console.log(data);
        if (data.err || data.errors) {
          setValues({ ...values, error: data.err || data.errors, success: false });
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



      <div className="signupBack" style={{ width: "65%", marginLeft: "16%" }}>


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
    <div style={{ height: "100vh" }}>
      <Menu></Menu>
      <div className="flex flex-jc-center flex-ai-center" style={{ height: "100%" }}>
        {successMessage()}
        {errorMessage()}
        <div className="auth-box">
          <div className="auth-box-title mybrand flex flex-jc-center">
            Signup
          </div>
          <div className="container myform-container">
            <div className="myform-item flex flex-wrap flex-col">
              <div className="name-input">
                Name
                <input className="myinput" type="text"
                  onChange={handleChange("name")}
                  type="text"
                  value={name} />
              </div>

            </div>
            <div className="myform-item  flex flex-wrap flex-col">
              <div>Email</div>
              <input className="myinput" type="text"
                onChange={handleChange("email")}
                type="email"
                value={email} />
            </div>
            <div className="myform-item  flex flex-wrap flex-col">
              <div>Password</div>
              <input className="myinput" type="password"
                onChange={handleChange("password")}
                type="password"
                value={password} />
            </div>
            <div className="myform-item  flex flex-jc-center flex-ai-center">
              <div className="auth-btn" onClick={onSubmit}>Signup</div>
            </div>
            <div className="p-3 mybrand flex flex-jc-center">
              SwagStore
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
