import React from 'react';
import Menu from "../menu"
import "../styles.css";
const Base = ({
    title = "my title",
    desc ="my description",
    className = " p-4",
    children
})=>(   <>
        <div>
           <Menu></Menu> 
           <div className="container-fluid">
               <div className="row">
                   <div className="col-12">
                   <div className="jumbotron introback text-center">
                      <h2 className="display-4">{title}</h2>
                      <p className="lead">{desc}</p>
                    </div>

                   </div>
               </div>
              <div className="row" style={{position:"relative"}}>
                       <div className="col-12">
                       {children}  
                       </div>
              </div>
               
           </div>
             
        </div>
        
    </>
)

export default Base;