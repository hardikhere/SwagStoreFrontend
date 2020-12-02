import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom'
import { faUser, faHome, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { Link } from 'react-router-dom';
const MobileMenu = () => {
    const currentPage = useLocation();
    useEffect(() => {
        console.log("current page is ", currentPage.pathname);
    }, [currentPage.pathname])
    return (
        <>
            <div className="fake-mobilemenu"></div>
            <div className="mobile-menu flex flex-ai-center">
                <Link to="/" className={`icon-wrapper flex flex-jc-center
                 ${currentPage.pathname ==='/' && "icon-wrapper-active"}`}>
                    <div>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                </Link>
                <Link to="/signup" className={`icon-wrapper flex flex-jc-center
                 ${currentPage.pathname ==='/signup' && "icon-wrapper-active"}`}>
                    <div >
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </Link>
                <Link to="/cart" className={`icon-wrapper flex flex-jc-center
                 ${currentPage.pathname ==='/cart' && "icon-wrapper-active"}`}>
                    <div>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </div>
                </Link>
                <Link to="/wishlist" className={`icon-wrapper flex flex-jc-center
                 ${currentPage.pathname ==='/wishlist' && "icon-wrapper-active"}`}>
                    <div>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </Link>
            </div>
        </>
    );
}

export default MobileMenu;
