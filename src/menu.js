import React,{ Fragment } from "react";
import {Link,withRouter} from "react-router-dom";
import {signout,isAuthenticated} from "./auth/helper";


const ActiveTab = (history,path)=>{
       if(history.location.pathname === path ){
           return {color:"#FFFFFF"}
       }
       else {
           return {color:"#d1d1d1"}
       }
};

const Menu = ({history})=>(
     <div>
         <ul className="nav nav-tabs bg-dark">
             <li className="nav-item">
                 <Link style={ActiveTab(history,"/")} className="nav-link" to="/">
                  Home
                 </Link>
             </li>
             <li className="nav-item">
                 <Link style={ActiveTab(history,"/cart")} className="nav-link" to="/cart">
                  Cart
                 </Link>
             </li>
             {
                 isAuthenticated() && isAuthenticated().user.role ===0 &&(
                    <li className="nav-item">
                    <Link style={ActiveTab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">
                     user Dashboard
                    </Link>
                    </li>
                 )
             }
             {
                 isAuthenticated() && isAuthenticated().user.role===1 &&(
                    <li className="nav-item">
                    <Link style={ActiveTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                     admin Dashboard
                    </Link>
                   </li>
                 )
             }
             {!isAuthenticated() && (
                 <Fragment>
                 <li className="nav-item">
                     <Link style={ActiveTab(history,"/signup")} className="nav-link" to="/signup">
                      Signup
                     </Link>
                 </li>
                 <li className="nav-item">
                     <Link style={ActiveTab(history,"/signin")} className="nav-link" to="/signin">
                      Signin
                     </Link>
                 </li>
                 </Fragment>
             )}
             {isAuthenticated() && (
                  <li className="nav-item">
                  <span
                    className="nav-link text-warning"
                    onClick={()=>{
                        signout(()=>{
                            history.push("/");
                        });
                    }}
                  >
                      signout
                  </span>
              </li>
             )}
         </ul>
     </div>     
) ;
export default withRouter(Menu);