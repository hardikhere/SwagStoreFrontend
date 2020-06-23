import React, { useState, useEffect } from "react";
import "../styles.css";
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
    <Base title="Cart Page" desc="Ready to checkout">
     
        <div className="row text-center" style={{marginTop:"10rem"}}>
        <div className="col-6">{
           products.length >0 ?loadAllProduct(products):(<h3>cart is empty</h3>)
        

        }</div>
        <div className="col-6">{
            <Payment
            product={products}
            setReload={setReload}
            
            />

        }</div>
            
        </div>
   
    </Base>
  );
}
export default Cart;