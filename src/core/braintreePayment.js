import React,{useState,useEffect} from 'react';
import { loadCart, cartEmpty } from './helper/cartHelper';
import { Link } from 'react-router-dom';
import { getmeToken, processPayment } from './helper/paymentHelper';
import {createOrder} from "./helper/orderHelper"
import Drop from "braintree-web-drop-in-react";
import { isAuthenticated } from '../auth/helper';
import DropIn from 'braintree-web-drop-in-react';

const Payment = ({
    product,
    setReload=f=>f,
    reload=undefined
})=>{

   const [info,setInfo] = useState({
       loading:false,
       success:false,
       clientToken:null,
       error:"",
       instance:{}
   });
   const userId =  isAuthenticated()&& isAuthenticated().user._id;
   const token = isAuthenticated()&& isAuthenticated().token;
   

   const getToken=(userId,token)=>{
         getmeToken(userId,token).then(info=>{
             console.log("5555555555554444");
            console.log(info);
          if(info.error)
             setInfo({...info,error:info.error})
            else{
                const clientToken = info.clientToken;
                setInfo({clientToken});
            }
         });
   };


   const showdropin=()=>{
       console.log(isAuthenticated().token);
     return (
        <div>
            { isAuthenticated().token !== undefined  ?(
                <div>
                <DropIn
                  options={{ authorization: info.clientToken }}
                  onInstance={(instance) => (info.instance = instance)}
                />
                <button className="btn btn-block btn-success" onClick={
                    onPurchase
                }>Buy</button>
              </div>
            ):(
                <h3>
                    please login first or add something to cart
                </h3>
            )
            }
        </div>

     )

   }
    useEffect(()=>{
       getToken(userId,token)
    },[])
   const showSuccess=()=>{
       if(info.success){
           return (
                <h2 className="text-success">Payment sucessful</h2>
           )
       }else{
        return (
            <h2 className="text-danger">Payment failed</h2>
       )

       }
   }

    const onPurchase =()=>{
        setInfo({loading:true});
        let nonce ;
        if(info.instance !== undefined){
        let getNonce =
        info.instance.requestPaymentMethod().then(
            data=>{
                nonce = data.nonce;
                const PaymentData={
                    paymentMethodNonce:nonce,
                    amount:getAmount(product)
                };
                processPayment(userId,token,PaymentData)
                .then(res=>{
                    setInfo({...info,success:res.success,loading:false});
                  
                    cartEmpty(()=>{
                        console.log("sssssssss")
                    })
                    setReload(!reload);

                })
                .catch(err=>{
                    setInfo({loading:false,success:false});
                   
                    console.log("payment failed")

                })
            }
        )
        }
    }
    const getAmount =(product)=>{
        let amount =0;
        product.map(p=>{
            amount=amount+p.price;
        });
        return amount;
    }



    return (
       <div>
            { (info.success || info.error) && (
                showSuccess()
           )}
             <h4>
               checkout $ {getAmount(product)}
           </h4>
           {showdropin()}
       </div>

    )
}

export default Payment;