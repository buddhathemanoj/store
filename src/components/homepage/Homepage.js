import React from "react";
import PageContent from "../sidebar/pagecontent";
import LeftSidebar from "../sidebar/sidebar";
import { Router } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        
            <PageContent/>
            <LeftSidebar/>
            
        </div>
    )
}

export default Homepage