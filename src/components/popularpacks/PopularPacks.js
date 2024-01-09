import React from "react";
import {IoArrowBack} from "react-icons/io5";
import {Link, useNavigate} from "react-router-dom";

const data = [
  {
    img: "data:image/jpeg;base64,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",
    heading: "Bundle Pack",
    subheading: "Onion, Oil, Salt",
    RS: "$35",
    rs: "$50.32",
  },
];

const duplicatedData = Array(8).fill(data[0]);
const PopularPacks = () => {
  const navigate = useNavigate();
  return (
   <div>
   <div class=" mt-1 ml-2 mr-3 ">
   <div class="flex">
    <div class="justify-items-start">
      <Link to="/dashboard"class="text-xl mt-1 fixed z-40 bg-base-100 w-full "><IoArrowBack/></Link> 
     </div>
    <div>
      <h3 class="pl-6 ml-24 md:pl-50 justify-center text-base font-medium fixed z-40 bg-base-100 w-11/12 ">Popular Packs</h3>
    </div>
   </div>
        <div class="flex flex-wrap" >
          {duplicatedData.map((item, index) => (
         <div onClick={() => navigate("/bundledetails")}>
           <div key={index}class="card w-44 h-66 bg-base-100 m-2 shadow-xl" >
              <figure>
                <img class="w-28 h-28" src={item.img} alt="Fruits"/>
              </figure>
              <div class="pl-4 ">
                <h2 class="card-title text-xl ">{item.heading}</h2>
                 <p class="text-sm">{item.subheading} </p>
                <div class="card-actions justify-start">
                  <div class=" ">
                    <h2 class="text-xl">{item.RS}</h2>
                  </div>
                  <div class=" pt-2 text-lg text-xs"pl-544 > {item.rs} </div>
                </div>
              </div>
            </div>
            </div>
))}
        </div>
        <div>
        </div>
      </div>
   </div>
  );
};

export default PopularPacks;
