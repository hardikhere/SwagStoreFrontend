import React from 'react';
import Menu from "../menu"
const Base = ({
    title = "my title",
    desc ="my description",
    className = "bg-dark text-white p-4",
    children
})=>(
        <div>
           <Menu></Menu> 
           <div className="container-fluid">
               <div className="jumbotron bg-dark
                   text-white
                   text-center
               ">
                   <h2 className="display-4">{title}</h2>
                     <p className="lead">{desc}</p>
               </div>
               <div className={className}>{children}</div>
           </div>
          <footer className="footer
                             bg-dark
                             mt-auto
                             py-3 ">
               <div className="container-fluid bg-success text-white text-center">
                   <h4>if you got any question feel free to reach out</h4>
                   <button className="btn btn-warning btn-sm">contact us</button>
               </div>
               <div className="container">
                   <span className="text-muted">
                       An amazing <span className="text-white">MERN</span>  bootcamp   
                   </span>
               </div>
           </footer>
        </div>
    
)

export default Base;