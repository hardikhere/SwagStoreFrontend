import { faAngleUp, faArrowUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style.scss";
import HardikPic from  "../../img/hardik.jpeg";
const MyFooter = () => {
    const [Open, setOpen] = useState(false);
    return (
        <div className="myfooter flex flex-col" >
            <div onClick={() => setOpen(!Open)} className="flex flex-ai-center" style={{ justifyContent: "space-evenly", width: "100%" }}>
                <div>
                    Made with <FontAwesomeIcon style={{ color: "palevioletred" }} icon={faHeart} /> by Hardik.
                </div>
                <div>
                    <FontAwesomeIcon className={`upanim ${Open && "makedown"}`} icon={faAngleUp} />
                </div>
            </div>
            <div className={`my-profile-wrapper ${Open && "show-profile"}`}>
                <div className="my-profile-header flex flex-ai-center">
                    <div className="my-profile-header-img flex flex-jc-center">
                        <img style={{ height: "inherit", width: "inherit", borderRadius: "2rem" }}
                            src={HardikPic} />
                    </div>
                    <div className="my-profile-header-right">
                        Hi I am Hardik
                    </div>
                </div>
            </div>

        </div>
    )
};

export default MyFooter;