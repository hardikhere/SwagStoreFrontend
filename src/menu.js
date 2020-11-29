import React, { Fragment } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "./auth/helper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./HomeStyles.scss";



const oldMenu = (history) => {
    return (<div className="flex flex-row flex-jc-center">
        <nav className="navbar navbar-expand-lg navbar mynav-bar ">
            <Link className="navbar-brand mybrand" to="/">SwagStore</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " style={{ color: "white" }} ></span>
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
                                <Link className="nav-link" to="/signup">
                                    Signup
                             </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">
                                    Signin
                             </Link>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    </div>
    )
}

const Menu = ({ history }) => (
    <div className="flex">
        <div className="fakenav"></div>
        <div className="mynav-bar flex flex-ai-center p-1">
            <Link className="navbar-brand mybrand" to="/">SwagStore</Link>
        </div>
    </div>
);
export default Menu;