import React from 'react';
import {IoArrowBack} from "react-icons/io5";
import { Link,useNavigate} from "react-router-dom";

const data =[
    {
        img:"https://th.bing.com/th/id/OIP.PrqEk10JaJPjs3oZ0YKv6wHaFf?w=244&h=181&c=7&r=0&o=5&pid=1.7",
        heading:"Peery Ice Cream",
        subheading : "Banana",
        weight: "800gm",
        offer: "$13",
        rate : "$15"
    },
];
const dummyData= Array(8).fill(data[0]);
const Ournewitems =()=>{
  const navigate = useNavigate();
  return (
    <div>
   <div class=" mt-1 ml-2 mr-3 ">
   <div class="flex">
    <div class="justify-items-start">
      <Link to="/dashboard"class="text-xl mt-1 fixed z-40 bg-base-100 w-full "><IoArrowBack/></Link> 
     </div>
    <div>
      <h3 class="pl-6 ml-24 md:pl-50 justify-center text-base font-medium fixed z-40 bg-base-100 w-11/12 ">New Items</h3>
    </div>
   </div>
        <div class="flex flex-wrap" >
          {dummyData.map((item, index) => (
         <div onClick={() => navigate("/bundledetails")}>
           <div key={index}class="card w-44 h-66 bg-base-100 m-2 shadow-xl" >
              <figure>
                <img class="w-28 h-28" src={item.img} alt="Fruits"/>
              </figure>
              <div class="pl-4 ">
                <h2 class="card-title text-xl ">{item.heading}</h2>
                 <p class="text-sm">{item.subheading}</p>
                 <p class="text-sm">{item.weight}</p>
                <div class="card-actions justify-start">
                  <div class=" ">
                    <h2 class="text-xl">{item.offer}</h2>
                  </div>
                  <div class=" pt-2 text-lg text-xs"pl-544 > {item.rate} </div>
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
export default Ournewitems;
