import React,{useState} from 'react';
import Base from '../core/Base';
import {Link,Redirect} from 'react-router-dom';
import {signin,authenticate,isAuthenticated} from "../auth/helper"

const Signin = ()=>{
    const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    });
const {email,password,error,loading,didRedirect} = values;
const {user} = isAuthenticated();
const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onsubmit = event =>{
      event.preventDefault();
      setValues({...values,error:false,loading:true});
      signin({email,password})
      .then(data =>{
          if(data.err|| data.errors ){
            setValues({...values,error:data.err ||data.errors,loading:false});
          }else{
             authenticate(data,()=>{
                setValues({...values,loading:false,didRedirect:true});
             }) 
          }
      })
      .catch(console.log("signin request failed"));

  }
   const performRedirect=()=>{
       //todo.. incomplete
       if(didRedirect){
        if(user && user.role ===1){
           return <Redirect to ="/admin/dashboard" />;
        }else {
            return <Redirect to ="/user/dashboard" />;
        }
      }
      if(isAuthenticated()){
          return <Redirect to="/" />
      }
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

  const loadingMessage = () => {
      return (
          loading && (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-info"
                style={{ display: loading ? "" : "none" }}
              >
                 loading...
              </div>
            </div>
          </div>
          )
      )
  };


    const singInFrom = ()=>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                       
                       <div className="form-group">
                           <label  className="text-light">Email</label>
                            <input onChange={handleChange("email")} className="form-control" value={email} type="email"/>
                       </div>
                       <div className="form-group">
                           <label  className="text-light">password</label>
                            <input onChange={handleChange("password")} className="form-control" value={password} type="password"/>
                       </div>
                       <button onClick={onsubmit} className="btn btn-success btn-block">
                           Submit
                       </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="signin page">
            {loadingMessage()}
            {errorMessage()}
            {singInFrom()}
            {performRedirect()}
            
            
        </Base>
    );
}
export default Signin;