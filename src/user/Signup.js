import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import Menu from "../menu";
import Spinner from "../core/Spinner";
import YouthImg from "../img/4009963.jpg"
import MyFooter from "../core/MyIntro/MyFooter";
import MobileMenu from "../MobileMenu/MobileMenu";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    role: 1,
    success: false
  });
  const [Loading, setLoading] = useState(false);
  const { name, email, password, error, success, role } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setLoading(true);
    setValues({ ...values, error: false });
    signup({ name, email, password, role })
      .then(data => {
        console.log(data);
        setLoading(false)
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


  const successMessage = () => {
    return (
      <div className="snackbar snackbar-success" style={{ display: success ? "" : "none" }} >
          <div
            className="snackbar-content"
          >
            New account was created successfully. Please <Link to="/signin">Login Here</Link>
          </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="snackbar snackbar-error"
        style={{ display: error ? "" : "none" }}
      >
        <div
          className="snackbar-content"
        >
          {error}
        </div>
      </div>
    );
  };


  return (
    <div>
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
              {!Loading ? <div className="auth-btn" onClick={onSubmit}>Signup</div> : <Spinner />}
            </div>
            <div className="p-3 mybrand flex flex-jc-center ">
              SwagStore
           </div>
          </div>
        </div>
      </div>
      <MyFooter/>
      <MobileMenu/>
    </div>
  );
};

export default Signup;
