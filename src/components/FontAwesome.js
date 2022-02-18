import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import {far} from "@fortawesome/free-regular-svg-icons"
import {fas} from "@fortawesome/free-solid-svg-icons"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
library.add(far,fas,fab)

export function EnvelopeIcon () {
    return (
        <FontAwesomeIcon icon="fa-solid fa-envelope" size="lg"/>
    )
}
export function LinkedInIcon () {
    return (
        <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg"/>
    )
}