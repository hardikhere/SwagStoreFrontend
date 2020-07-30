import React,{useState} from 'react';
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper';
import {createCategory} from '../admin/helper/adminapicall';

import {Link} from 'react-router-dom';

const AddCategory = ()=>{
   
     const [name,setName] = useState("");
     const [err,setErr]=useState(false);
     const [success,setSuccess]= useState(false);
     const {user,token} = isAuthenticated();
     const goBack=()=>(
        <Link to ="/admin/dashboard"  className="text-white">
         <div className="btn btn-success mt-5">
             Back
         </div>
         </Link>
     )
     const handleChange = (event)=>{
         setErr("");
         setName(event.target.value);
         console.log(event.target);
            
     }

    const successMsg = (s)=>{
         if(s){
         return <h4 className="text-success">category {name} created</h4>
         }
    };
    const errMsg = (e)=>{
        if(e){
        return <h4 className="text-danger">Category {name} not created {err}</h4>
        }
   };

     const onSubmit = (e)=>{
             e.preventDefault();
             setErr("");
             setSuccess(false);
             createCategory(user._id,token,{name})
             .then((res)=>{
                 if(res.err || res.errors)setErr(res.err || res.errors);
                 else {setSuccess(true); setErr("")}
             })
             .catch(err=>console.log(err));
     }
     const myCategoryFrom = ()=>(
         <form >
             <div className="form-group">
                 <p className="lead">
                     Enter Category
                 </p>
                 <input type="text" 
                  required
                  onChange = {handleChange}
                  value = {name}
                  placeholder="eg. summer"
                  autoFocus
                 className="form-control my-3"/>
                 <button
                 className="btn btn-outline-info"
                 onClick={onSubmit}
                 >
                     Create
                 </button>
             </div>
         </form>
     )

   return (
       <>
       <Base title="create category" syle={{position:"relative"}}>
 
       </Base>
       <div className="container" style={{position:"relative"}}>
             <div className="row" >
            
              <div className="col-md-8 offset-md-2" >
                 {successMsg(success)}
                 {errMsg(err)}
                 
           
              </div>
             </div>
             <div className="row" style={{marginTop:"20%"}}>
             {goBack()}
                   <div className="col-2 col-sm-0 col-xs-0"></div>
                  <div className="col-8 col-md-12 col-lg-12">
                      <div className="offset-md-3 p-3" style={{width:"500px",height:"200px",backgroundColor:"#DDDDDD","-webkit-box-shadow": "6px 6px 18px -6px rgba(105,105,105,0.83)",
"-moz-box-shadow": "6px 6px 18px -6px rgba(105,105,105,0.83)",
"box-shadow":" 6px 6px 18px -6px rgba(105,105,105,0.83)"}}>
                         {myCategoryFrom()}
                      </div>
                      
                  </div>
                   <div className="col-2 col-sm-0 col-xs-0"></div>

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
export default AddCategory;