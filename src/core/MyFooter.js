import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MyFooter = ()=>{
    return (
        <div className="myfooter ">
            <div>
                Made with <FontAwesomeIcon style={{color:"palevioletred"}} icon={faHeart}/> by Hardik.
            </div>
        </div>
    )
};

export default MyFooter;