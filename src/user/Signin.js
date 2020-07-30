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
           return <Redirect to ="/" />;
        }else {
            return <Redirect to ="/" />;
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
          <div className="signupBack " style={{width:"60%",marginLeft:"20%"}}>
                    <form >
                       
                       <div className="form-group">
                           <label  className="text-white">Email</label>
                            <input onChange={handleChange("email")} className="form-control" value={email} type="email"/>
                       </div>
                       <div className="form-group">
                           <label  className="text-white">password</label>
                            <input onChange={handleChange("password")} className="form-control" value={password} type="password"/>
                       </div>
                       <button onClick={onsubmit} className="btn btn-success btn-block">
                           Submit
                       </button>
                    </form>
                </div>
         
        )
    }

    return (
      <>
        <Base title="Signin" desc = "Signin to buy cool t-shirts"></Base>
            {loadingMessage()}
            {errorMessage()}
            
            {performRedirect()}
            <div className="container" style={{marginTop:"23%"}}>
              <div className="row">
                <div className="col-12">
                {singInFrom()}
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
}
export default Signin;