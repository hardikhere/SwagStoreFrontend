import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
const MobileMenu = () => {
    return (
        <>
            <div className="fake-mobilemenu"></div>
            <div className="mobile-menu flex flex-ai-center">

                <div className="icon-wrapper flex flex-jc-center">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="icon-wrapper flex flex-jc-center">
                    <FontAwesomeIcon icon={faUser} />
                </div>
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
