import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/cartHelper";
import Payment from "./braintreePayment";
import MyFooter from "./MyFooter";
import Menu from "../menu";
import MobileMenu from "../MobileMenu/MobileMenu";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [error, setError] = useState(false);

  const loadAllProduct = (products) => {
    return (

      <div className="flex flex-col flex-wrap flex-ai-center" style={{width:"100%"}}>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    )
  };


  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  return (
    <div className="" >
      <Menu />
      <div className="">
        <div className="">{
          products.length > 0 ? loadAllProduct(products) : (<img style={{ height: "4rem" }} src="./emptycart.jpg" />)
        }</div>
        <div className="col-6">{
          <Payment
            product={products}
            setReload={setReload}
          />
        }</div>

      </div>
      <MyFooter />
      <MobileMenu />
    </div>
  );
}
export default Cart;