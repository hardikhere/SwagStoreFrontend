import { faAngleUp, faArrowUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style.scss";
import HardikPic from "../../img/hardik.jpeg";
import Hi from "../../img/Hi.gif";
import Linkedin from "../../img/linkedin.svg";
import Gmail from "../../img/gmail.svg";
import github from "../../img/github.png";
import call from "../../img/call.svg";

const MyFooter = () => {
    const [Open, setOpen] = useState(true);
    return (
        <div className={`myfooter flex flex-col ${Open && "myfooter-expand"}`} >
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
                    <div className="my-profile-header-right flex" style={{ justifyContent: "space-evenly" }}>
                        <h3 className="flex flex-ai-center">Hello!</h3>
                        <div>
                            <img style={{ height: "2rem" }} draggable={false} src={Hi} alt="" />
                        </div>
                    </div>
                </div>

                <div className="my-profile-content">
                    <h4>I'm <span style={{ color: "dodgerblue" }}>Hardik Khanchandani</span></h4>
                    <p>I hope you like this web application, I am using Nodejs, Expressjs for Server and
                    MongoDB for Database. This frontend is developed on Reactjs and mostly styled on
                    SCSS. Thanks to flexbox
                    </p>
                </div>

                <div className="my-profile-connect">
                    <h4 >Connect with me on</h4>
                    <div className="flex">
                        <div className="logowrapper flex flex-jc-center flex-ai-center">
                            <img style={{ height: "80%", width: "80%" }} src={Linkedin} alt="" />
                        </div>
                        <div className="logowrapper flex flex-jc-center flex-ai-center">
                            <img style={{ height: "80%", width: "80%" }} src={Gmail} alt="" />
                        </div>
                        <div className="logowrapper flex flex-jc-center flex-ai-center">
                            <img style={{ height: "80%", width: "80%" }} src={github} alt="" />
                        </div>
                        <div className="logowrapper flex flex-jc-center flex-ai-center">
                            <img style={{ height: "80%", width: "80%" }} src={call} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default MyFooter;