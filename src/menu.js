import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "./auth/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faSignInAlt, faUser, faUserCircle, faUserAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import "./HomeStyles.scss";
import SearchBar from "./core/SearchBar/SearchBar";



const Menu = ({ history }) => {
    const location = useLocation();
   const [showAvatarOptions, setshowAvatarOptions] = useState(false)
    return <div className="flex">
        <div className="fakenav"></div>
        <div className="mynav-bar flex flex-ai-center p-1">
            <div className="mynav-bar-container">
                <div className="left-nav">
                    <Link className="navbar-brand mybrand" to="/">SwagStore</Link>
                </div>

                <div className="mynav-bar-container-right flex flex-ai-center">
                    <div className="menu-search mynav-bar-item ">
                        <SearchBar />
                    </div>
                    <div className={`mynav-bar-item flex  flex-ai-center`}>
                        <Link className="" to="/">
                            <div className={`fa-wrapper ${location.pathname === '/' ? "fa-wrapper-current" : ""}`}>
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                        </Link>

                    </div>
                    <div className="mynav-bar-item flex  flex-ai-center">
                        <Link className="" to="/cart">
                            <div className={`fa-wrapper ${location.pathname === '/cart' ? "fa-wrapper-current" : ""}`}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>
                        </Link>
                    </div>
                    {!isAuthenticated() ? (
                        <>
                            <div className="mynav-bar-item flex  flex-ai-center">
                                <Link className="" to="/signin">
                                    <div className="fa-wrapper">
                                        <FontAwesomeIcon icon={faSignInAlt} />
                                    </div>
                                </Link>

                            </div>
                        </>
                    ) : <>
                            <div className="mynav-bar-item flex flex-ai-center">
                                <Link className="" to="/signin">
                                    <div className="fa-wrapper avatar">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </Link>

                            </div>
                            <div className="mynav-bar-item flex flex-ai-center">
                                <div className="fa-wrapper avatar" onClick={()=>setshowAvatarOptions(!showAvatarOptions)}>
                                    <FontAwesomeIcon icon={faUserAlt} />
                                </div>
                                <div className="avatar-options" style={{ display: showAvatarOptions===true?"block":"none" }}>
                                    <div className="avatar-options-item">Profile</div>
                                    <div className="avatar-options-item">logout</div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    </div >
};
export default Menu;