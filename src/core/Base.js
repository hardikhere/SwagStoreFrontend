import React from 'react';
import Menu from "../menu"
import "../styles.css";
const Base = ({
    title = "my title",
    desc = "my description",
    className = " p-4",
    children
}) => (<>
    <div>
        <Menu></Menu>
        <div className="container-fluid mt-5">
            <div className="landing-banner">
                <div className="landing-banner-container">
                    <div className="mybrand" style={{ fontSize: "3.5rem",height:"6rem",width:"17rem" }}>SwagStore</div>
                </div>
            </div>
            <div className="row" style={{ position: "relative" }}>
                <div className="col-12">
                    {children}
                </div>
            </div>

        </div>

    </div>

</>
)

export default Base;