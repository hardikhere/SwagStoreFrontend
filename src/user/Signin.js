import React, { useState } from 'react';
import Menu from "../menu";
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from "../auth/helper"
import Spinner from '../core/Spinner';

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });
  const [Loading, setLoading] = useState(false);
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onsubmit = event => {
    event.preventDefault();
    setLoading(true);
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        setLoading(false)
        if (data.err || data.errors) {
          setValues({ ...values, error: data.err || data.errors, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, loading: false, didRedirect: true });
          })
        }
      })
      .catch(() => {
        setLoading(false)
        console.log("signin request failed")
      });

  }
  const performRedirect = () => {
    //todo.. incomplete
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />
    }
  };
  const ErrorMessage = () => {
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

  const singInFrom = () => {
    return (
      <div className="flex flex-jc-center flex-ai-center" >
        <ErrorMessage />
        <div className="auth-box" style={{ marginTop: "3.4rem" }}>
          <div className="auth-box-title mybrand flex flex-jc-center">
            Signin
        </div>
          <div className="container myform-container">
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
              {!Loading ? <div className="auth-btn" onClick={onsubmit}>Signin</div> : <Spinner />}
            </div>
            <div className="p-3 mybrand flex flex-jc-center ">
              SwagStore
         </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Menu></Menu>
      {performRedirect()}
      <div className="">
        {singInFrom()}
      </div>
    </>

  );
}
export default Signin;