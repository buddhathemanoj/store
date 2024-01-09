import React from "react";
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

const StartPage = () => {
  return (
    <div className="p-4">
        <div className="carousel w-full">
           <div id="item1" className="carousel-item w-full">
           <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
      </div> 
       <div id="item3" className="carousel-item w-full">
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
      </div> 
      <div id="item4" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
       </div>
    </div> 
      <div className="flex justify-between mb-4">
        <h2 className="text-100 font-black text-black">Popular Packs</h2>
        <button className="text-green-500 text-size-100 font-bold">View All</button>
      </div>  
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {duplicatedData.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img className="w-28 h-28" src={item.img} alt="Fruits" />
            </figure>
            <div className="pl-4">
              <h2 className="card-title text-2xl">{item.heading}</h2>
              <p className="text-sm">{item.subheading} </p>
              <div className="card-actions justify-start">
                <div>
                  <h2 className="text-xl">{item.RS}</h2>
                </div>
                <div className="pt-2 text-lg text-xs">{item.rs}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartPage;
