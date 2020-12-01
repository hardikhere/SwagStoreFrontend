import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import HeartIcon from "./icons/HeartIcon";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined,
  style
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-danger"
        >
          Remove
        </button>
      )
    );
  };

  const [filled, setfilled] = useState(false);
  const markWish = () => {
    setfilled(!filled)
  }
  const [showDesc, setshowDesc] = useState(false);
  return (
    <div className="mycard mycard-wrapper flex flex-col"
      onMouseOver={() => setshowDesc(true)}
      onMouseOut={() => setshowDesc(false)}
      style={style}
    >
      <div className="flex flex-jc-center mycard-header">
        <div className="mycard-title" style={{ width: "70%", padding: "4% 0 4% 0" }}>{cartTitle}</div>
        <div onClick={markWish} className="flex flex-jc-center flex-ai-center" style={{ width: "30%" }}>
          <div >
            <HeartIcon filled={filled} />
          </div>
        </div>

      </div>
      <div className="mycard-imagewrapper ">
        {getARedirect(redirect)}
        <div className="flex flex-jc-center">
          <ImageHelper product={product} />
        </div>
      </div>
      <div className="flex flex-row flex-jc-center p-1 mycard-price">
        <div>${cartPrice}</div>
      </div>
      <div className="flex flex-row flex-jc-center mycard-buy">
        {!removeFromCart && <div className="add-btn" onClick={addToCart}>
          ADD TO CART
          </div>}
        <div className="">{showRemoveFromCart(removeFromCart)}</div>
      </div>
      <div className="flex flex-row flex-jc-center mycard-desc"
        style={{
          display: showDesc ? "" : "none", transition: "transform 1s ease-out"
        }}>
        <small> {cartDescrption}</small>
      </div>
    </div>
  );
};

export default Card;
