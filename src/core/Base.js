import React from 'react';
import Menu from "../menu"
import "../styles.css";
const Base = ({
    title = "my title",
    desc ="my description",
    className = " p-4",
    children
})=>(
        <div>
           <Menu></Menu> 
           <div className="container-fluid">
               <div className="jumbotron introback
                 
                   text-center
               ">
                   <h2 className="display-4">{title}</h2>
                     <p className="lead">{desc}</p>
               </div>
               <div className={className} style={{position:"relative", top:"9vw"}} >{children}</div>
           </div>
        
        </div>
    
)

export default Base;