import React from "react";
import { Link } from "react-router-dom";
import PopularPackDesign from "../popularpacks/component/PopularPackDesign";
import withLayout from "../sidebar/withlayout";
import PopularPacklist from "../popularpacks/component/PopularPacklist";
import PopularPacks from "../popularpacks/PopularPacks";
import OurnewitemList from "../ournewitem/component/ournewitemlist";
import Footer from "../footer/Footer";
const Homepage = () => {
    return (
        <div>
        <div className="ml-5">
            <PopularPackDesign/>
            </div>
            <div className="flex justify-between w-11/12 mb-3 ml-5">
                <h1 className="text-xl font-light text-black">Popular Packs</h1>
                <Link to="/popularpacks"className="text-sm font-normal text-green-800">View All</Link>
                
            </div>
            <PopularPacklist/>
            <div className="flex justify-between w-11/12 mt-5 mb-3 ml-5">
                <h1 className="text-xl font-light text-black">Our New Item</h1>
                <Link to="/newitems"className="text-sm font-normal text-green-800">View All</Link>
            </div>
            <OurnewitemList/>
            <div className=" mt-10 w-full">
            <Footer/>
            </div>
                
            
        </div>
        
    )
}

export default withLayout(Homepage)