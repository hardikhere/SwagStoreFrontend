import { faSearch, faArrowLeft, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./style.scss";
function SearchBar() {
    const [IsClicked, setIsClicked] = useState(false)
    return (
        <div className="search-wrapper flex flex-ai-center">
            <div className={`search-bar flex flex-ai-center ${IsClicked && "search-expand"}`}>
                <input
                    onClickCapture={() => setIsClicked(true)}
                    className={`search-input `} type="text" />
                <div className="flex flex-jc-center"
                    style={{ marginLeft: "10px", cursor: "pointer", width: "20%",color:"palevioletred" }}>
                    {!IsClicked ? <FontAwesomeIcon icon={faSearch} onClick={() => setIsClicked(true)} /> :
                        <FontAwesomeIcon icon={faTimes} onClick={() => setIsClicked(false)} />
                    }
                </div>
            </div>
            {IsClicked && <div className="search-results">
                <div className="search-results-item">
                    <h5>Best For Men</h5>
                </div>
                <div className="search-results-item">
                    <h5>Best For Kids</h5>
                </div>
                <div className="search-results-item">
                    <h5>Best For Women</h5>
                </div>
            </div>}
        </div>
    )
}

export default SearchBar;
