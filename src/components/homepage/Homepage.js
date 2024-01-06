import React from "react";
import PopularPackDesign from "../popularpacks/component/PopularPackDesign";
import withLayout from "../sidebar/withlayout";
const Homepage = () => {
    return (
        <div>
        <div>
            <PopularPackDesign/>
        </div>
        </div>
        
    )
}

export default withLayout(Homepage)