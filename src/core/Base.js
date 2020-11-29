import React from 'react';

const Base = ({
    title = "my title",
    desc = "my description",
    className = "",
    children
}) => (
    <div className="">
        <div className=" mt-5">
            <div className="landing-banner">
                <div className="landing-banner-container">
                    <div className="mybrand" style={{ fontSize: "3.5rem", height: "6rem", width: "17rem" }}>SwagStore</div>
                </div>
            </div>
            <div className="row" style={{ position: "relative" }}>
                <div className="col p-0 m-0">
                    {children}
                </div>
            </div>

        </div>

    </div>
)

export default Base;