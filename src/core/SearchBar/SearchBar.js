import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./style.scss";
function SearchBar() {
    const [IsClicked, setIsClicked] = useState(false)
    return (
        <div className="search-wrapper flex flex-ai-center">
            <div className="search-bar flex flex-ai-center">
                <input
                    onClickCapture={() => setIsClicked(true)}
                    className={`myinput search-input ${IsClicked && "search-expand"}`} type="text" />
                <div style={{ marginLeft: "10px", cursor: "pointer" }}>
                    {!IsClicked ? <FontAwesomeIcon icon={faSearch} onClick={() => setIsClicked(true)} /> :
                        <FontAwesomeIcon icon={faArrowLeft} onClick={() => setIsClicked(false)} />
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
