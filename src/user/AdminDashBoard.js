import React from 'react';
import Base from "../core/Base";
import {isAuthenticated} from "../auth/helper/index";
import {Link} from 'react-router-dom';
const AdminDash = ()=>{
    const {user:{name,email,role}} = isAuthenticated();
    const adminLeft = ()=>{
            return (
                <div className="card">
                    <h4 className="card-header bg-dark text-white">
                        Admin Navigation
                    </h4>
                    <li className="list-group-item">
                       <Link className="nav-link text-dark" to="/admin/create/category">
                          Create Category
                       </Link>
                    </li>
                   
                    <li className="list-group-item">
                       <Link className="nav-link text-dark" to="/admin/create/product">
                          Create product
                       </Link>
                       </li>
                       
                      
                      
                   
                </div>
            )
    }
    const adminRight = ()=>{
        return (
             <div className="card mb-4">
                 <h4 className="card-header">
                    Admin Info
                 </h4>
                 <ul className="list-group">
                     <li className="list-group-item">  
                         <span className="badge badge-success mr-2">
                             Name:
                         </span>{name}
                     </li>
                     <li className="list-group-item">  
                         <span className="badge badge-success mr-2">
                             Email:
                         </span>{email}
                     </li>
                 </ul>
             </div>
        )
    }
 return (
     <>
        <Base title="Welcome admin" 
          className="container  p-4"
        desc="Manage all your products here"></Base>
        <div className="container" style={{marginTop:"20%"}}>
            <div className="row" style={{marginTop:"7rem"}}>
              <div className="col-3">
              {adminLeft()}
              </div>
              <div className="col-9">
              {adminRight()}
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

export default AdminDash;