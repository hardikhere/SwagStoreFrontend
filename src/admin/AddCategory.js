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
         <form>
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
       <Base title="create category"
         className="container bg-info p-4"
       >
           <div className="row bg-white rounded">
           
               <div className="col-md-8 offset-md-2">
                   {successMsg(success)}
                   {errMsg(err)}
                  {myCategoryFrom()}
                  {goBack()}
               
               </div>
           </div>

       
       </Base>
   );
};
export default AddCategory;