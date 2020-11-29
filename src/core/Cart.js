import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/cartHelper";
import Payment from "./braintreePayment";

const  Cart=()=> {
  const [products, setProducts] = useState([]);
  const [reload,setReload]= useState(false);
  const [error, setError] = useState(false);

  const loadAllProduct = (products) => {
    return (
        <div>
            <h2>
                {products.map((product,index)=>(
                    <Card
                     key={index}
                     product = {product}
                     removeFromCart={true}
                     addtoCart={false}
                     setReload={setReload}
                     reload={reload}
                    />
                ))}
            </h2>
        </div>
    )
  };

  const  loadCheckout = ()=>{
      return (
        <div>
        <h2>
            This section is for checkout
        </h2>
    </div>
      )
  }

  useEffect(() => {
   setProducts(loadCart());
  }, [reload]);

  return (
      <>
    <Base title="Cart Page" desc="Ready to checkout"></Base>
    <div className="container" style={{marginTop:"22%"}}>
          <div className="row text-center" style={{marginTop:"10rem"}}>
        <div className="col-6">{
           products.length >0 ?loadAllProduct(products):(<img style={{height:"400px"}} src="./emptycart.jpg"/>)
        

        }</div>
        <div className="col-6">{
            <Payment
            product={products}
            setReload={setReload}
            
            />

        }</div>
            
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
export default Cart;