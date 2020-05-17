import { API } from "../../backend";

const createOrder =(userId,token,orderData)=>{
 return fetch(`${API}/user/${userId}/order/create`,{
     method:"POST",
     headers:{
         Accept:"application/json",
         "Content-Type":"application/json",
         Authorization:`Bearer ${token}`
     },
     body:JSON.stringify({order:orderData})
 }).then((res)=>{
       return Response.json();
 }).catch(err=>console.log(err));
 
}
export default createOrder;