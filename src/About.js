import React from "react";
import AboutBanner from "./AboutBanner";
import NavBar from "./NavBar";
import TopNav from "./TopNav";

function About(){
    return(
        <div>
            <TopNav/>
            <NavBar/>
            <AboutBanner/>
        </div>
    );
}

export default About;