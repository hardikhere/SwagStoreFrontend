import React from 'react'
import Spinner from '../Spinner';
import "./style.scss";
export const LoadingCard = () => {
    return (
        <div className="loading-card" style={{ height: "15rem" }}>
            <div className="loading-card-header flex flex-ai-center"
                style={{ overflow: "hidden", width: "60%" }}>
                <div className="skeleton-box" style={{ height: "1rem",width:"10rem" }}>
                    <div className="skeleton-runner" style={{ height: "100%" }}></div>
                </div>
            </div>
            <div className="loading-card-imagewrapper">
                <Spinner />
            </div>
            <div className="loading-card-price flex flex-jc-center">
                <div className="skeleton-box" style={{ height: "1rem", width: "30%" }}>
                    <div className="skeleton-runner" style={{ height: "100%" }}></div>
                </div>
            </div>
            <div className="loading-card-buy" style={{ padding: "1rem" }}>
                <div className="skeleton-box" style={{ height: "1rem", width: "60%" }}>
                    <div className="skeleton-runner" style={{ height: "100%" }}></div>
                </div>
                <div className="skeleton-box" style={{ height: "1rem", width: "50%", marginTop: "5%" }}>
                    <div className="skeleton-runner" style={{ height: "100%" }}></div>
                </div>
            </div>
        </div>
    )
}
