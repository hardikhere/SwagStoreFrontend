import React from 'react';
import "./mediaQueries.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import userDash from './user/UserDashBoard';
import AdminDash from './user/AdminDashBoard';
import "./user/authStyle.scss";
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from "./auth/helper/PrivateRoutes"
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategory';
import AddProduct from './admin/AddProduct';
import Cart from './core/Cart';
import "./core/style.scss";

export default function Routes(){
    return (
        <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/signup" exact component={Signup}/>
               <Route path="/signin" exact component={Signin}/>
               <Route path="/cart" exact component={Cart}/>

               <PrivateRoute exact path="/user/dashboard"  component={userDash}/>
               <AdminRoute  path="/admin/dashboard"  component={AdminDash}/>
               <AdminRoute exact path="/admin/create/category"  component={AddCategory}/>
               <AdminRoute exact path="/admin/manage/category"  component={ManageCategories}/>
               <AdminRoute exact path="/admin/create/product"  component={AddProduct}/>



                          

           </Switch>
        </BrowserRouter>
    );
}
