import {API} from '../../backend';
export const createCategory = (userId,token,CatName)=>{
   return fetch(`${API}/user/${userId}/createCategory`,{
       method:"POST",
       headers:{ Accept:"application/json",
                 "Content-Type":"application/json",
                 Authorization :`Bearer ${token}`
                },
       body:JSON.stringify(CatName)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=>console.log(err));
};

export const createProduct = (userId,token,product)=>{
    return fetch(`${API}/user/${userId}/createProduct`,{
        method:"POST",
        headers:{ Accept:"application/json",
                  Authorization :`Bearer ${token}`
                 },
        body:product
     })
     .then(response =>{
         console.log(response);
         return response.json();
     })
     .catch(err=>console.log(err));
};

export const deleteProduct = (userId,token,productId)=>{
    return fetch(`${API}/user/${userId}/deleteProduct/${productId}`,{
        method:"DELETE"
     })
     .then(response =>{
         return response.json();
     })
     .catch(err=>console.log(err));
};

export const updateProduct = (userId,token,productId,product)=>{
    return fetch(`${API}/user/${userId}/updateProduct/${productId}`,{
        method:"PUT",
        headers:{ Accept:"application/json",
                  "Content-Type":"application/json",
                  Authorization :`Bearer ${token}`
                 },
        body:JSON.stringify(product)
     })
     .then(response =>{
         return response.json();
     })
     .catch(err=>console.log(err));
};


export const getProducts = ()=>{
    return fetch(`${API}/products`,{
        method:"GET"
     })
     .then(response =>{
         console.log(response);
         return response.json();
     })
     .catch(err=>console.log(err));
};

export const getCat = ()=>{
    return fetch(`${API}/getAllCategory`,{
        method:"GET"
     })
     .then(response =>{
        // console.log(response.json());
         return response.json();
     })
     .catch(err=>console.log(err));
};

