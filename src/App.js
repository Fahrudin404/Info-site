import React from "react"
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Interest from "./components/Interests.js"
import Info from "./components/Info.js"
export default function App () {
    return (
        <div className="app">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}