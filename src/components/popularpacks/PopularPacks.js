import React from "react";
import Packs from "./Packs";
import fruit from "../../assets/fruits.jpg";


const data = [
  {
    img: "https://img.freepik.com/premium-vector/fresh-fruits-wicker-basket-isolated-white_43605-2367.jpg?size=626&ext=jpg",
    heading: "Bundle Pack",
    subheading: "Onion, Oil, Salt",
    RS: "$35",
    rs: "$50.32",
  },
];

   

const duplicatedData = Array(8).fill(data[0]);
const PopularPacks = () => {
  return (
    <div >
      <div className="">
        <div className="flex flex-wrap">
          {duplicatedData.map((item, index) => (
         <div>     <div
              key={index}
              className="card w-44 h-66 bg-base-100 m-2 shadow-xl"
            >
              <figure>
                <img className="w-28 h-28" src={item.img} alt="Fruits" />
              </figure>
              <div className="pl-4 ">
                <h2 className="card-title text-2xl ">{item.heading}</h2>
                <p className="text-sm">{item.subheading} </p>
                <div className="card-actions justify-start">
                  <div className=" ">
                    <h2 className="text-xl">{item.RS}</h2>
                  </div>
                  <div className=" pt-2 text-lg text-xs"pl-544 > {item.rs} </div>
                </div>
              </div>
            </div></div>
    
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PopularPacks;
