import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {  createProduct, getCat } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";

const AddProduct = () => {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    photo,
    createdProduct,
    getaRedirect,
    formData
  } = values;

  const preload = () => {
    getCat().then(data => {
      //console.log(data);
      if (data.err) {
        setValues({ ...values, error: data.err });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
   
    setValues({ ...values, error: "", loading: true });
    createProduct(user._id, token, formData).then(data => {
      if (data.err|| data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          photo: "",
          stock: "",
          loading: false,
          createdProduct: data.name
        });
      }
    })
    .catch(err=>console.log(err));
  };

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} created successfully</h4>
    </div>
  );

  const createProductForm = () => (
    <form>
      <span className = "text-dark">Post photo</span>
      <div className="form-group">
        <label className="btn btn-block ">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="Stock"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Create Product
      </button>
    </form>
  );

  return (
    <>
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
      > </Base>
 
     <div className="container">
       <div className="row" style={{marginTop:"23%"}}>
         <div className="col-2 col-sm-0">
         </div>
         <div className="col-8 col-lg-12 col-md-12"><Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
           Admin Home
           </Link>
          <div className="row text-white " style={{backgroundColor:"#DDDDDD","-webkit-box-shadow": "6px 6px 18px -6px rgba(105,105,105,0.83)",
"-moz-box-shadow": "6px 6px 18px -6px rgba(105,105,105,0.83)",
"box-shadow":" 6px 6px 18px -6px rgba(105,105,105,0.83)"}}>
          
           <div className="col-md-8 offset-md-2">
            {successMessage()}
            {createProductForm()}
        

           </div>
         </div>

         </div>
         <div className="col-2 col-sm-0">
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

export default AddProduct;
