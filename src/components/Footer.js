import React from "react"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Footer () {
    return (
        <div className="footer">
            <div className="footer-container">
                <a href="https://www.facebook.com/fahrudin.begic.77" className="footer-icon">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
                <a href="https://www.instagram.com/fahrudin_begic/" className="footer-icon">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
                <a href="https://github.com/Fahrudin404" className="footer-icon">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
            </div>
        </div>
    )
}