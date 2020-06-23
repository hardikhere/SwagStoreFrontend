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
                       <Link className="nav-link text-dark" to="/admin/manage/category">
                          Manage Category
                       </Link>
                    </li>
                    <li className="list-group-item">
                       <Link className="nav-link text-dark" to="/admin/create/product">
                          Create product
                       </Link>
                       </li>
                       <li className="list-group-item">
                       <Link className="nav-link text-dark" to="/admin/profile">
                          admin profile
                       </Link>
                       </li>
                       <li className="list-group-item">
                       <Link className="nav-link text-dark" to="/admin/products">
                          Manage Products 
                       </Link>
                       </li>
                       <li className="list-group-item">
                       <Link className="nav-link text-dark" to="/admin/orders">
                          Manage order 
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
        <Base title="Welcome admin" 
          className="container  p-4"
        desc="Manage all your products here">
          <div className="row" style={{marginTop:"7rem"}}>
              <div className="col-3">
              {adminLeft()}
              </div>
              <div className="col-9">
              {adminRight()}
              </div>
          </div>
          
          
        </Base>
 );
};

export default AdminDash;