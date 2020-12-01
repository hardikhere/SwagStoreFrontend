import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { Link } from 'react-router-dom';
const MobileMenu = () => {
    return (
        <>
            <div className="fake-mobilemenu"></div>
            <div className="mobile-menu flex flex-ai-center">

                <div className="icon-wrapper flex flex-jc-center">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <Link to="/signup" className="icon-wrapper flex flex-jc-center">
                    <div >
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </Link>
                <div className="icon-wrapper flex flex-jc-center">
                    <FontAwesomeIcon icon={faCartPlus} />
                </div>
                <div className="icon-wrapper flex flex-jc-center">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
