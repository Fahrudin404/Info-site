import React from "react"
import image from "../images/picture.jpg"
import {EnvelopeIcon} from "./FontAwesome.js"
import {LinkedInIcon} from "./FontAwesome.js"
export default function Info () {
    return (
        <div className="info">
            <img src={image} className="info-image" alt=""/>
            <h1 className="info-main-text">
                Fahrudin Begić
            </h1>
            <h3 className="info-sub-text">
                Software Engineer
            </h3>
            <h4 className="info-contact">
                Visit my LinkedIn or Email me
            </h4>
            <div className="info-buttons">
                    <a className="info-link">
                           <button className="info-button">
                             <EnvelopeIcon/>
                               Email
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/fahrudin-begi%C4%87-63b0ba224/" className="info-link">
                        <button className="info-button info-linkedin">
                            <LinkedInIcon/>
                                LinkedIn
                        </button>
                    </a>
                </div>
            </div>
    )
}