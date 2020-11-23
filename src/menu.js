import React, { Fragment } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "./auth/helper";




const oldMenu = (history) => {
    return (<ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
            <Link  className="nav-link" to="/">
                Home
        </Link>
        </li>
        <li className="nav-item">
            <Link  className="nav-link" to="/cart">
                Cart
        </Link>
        </li>
        {
            isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link className="nav-link" to="/user/dashboard">
                        user Dashboard
           </Link>
                </li>
            )
        }
        {
            isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard">
                        admin Dashboard
           </Link>
                </li>
            )
        }
        {!isAuthenticated() && (
            <Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                        Signup
            </Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/signin">
                        Signin
            </Link>
                </li>
            </Fragment>
        )}
        {isAuthenticated() && (
            <li className="nav-item">
                <span
                    className="nav-link text-warning"
                    onClick={() => {
                        signout(() => {
                            history.push("/");
                        });
                    }}
                >
                    signout
         </span>
            </li>
        )}
    </ul>
    )
}

const Menu = ({history }) => (
    <div className="flex flex-row flex-jc-center">
        <nav className="navbar navbar-expand-lg navbar mynav-bar ">
            <Link className="navbar-brand mybrand" to="/">SwagStore</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " style={{color:"white"}} ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">Cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <Link  className="nav-link" to="/signup">
                                    Signup
                                 </Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="/signin">
                                    Signin
                                 </Link>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    </div>
);
export default Menu;