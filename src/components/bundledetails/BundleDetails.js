import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoArrowBack ,IoChevronForward } from "react-icons/io5";
import Packdetails from "../popularpacks/component/packdetails";
import { Link } from "react-router-dom";

const BundleDetails = () => {
  const [count, setCount] = useState(0);
  
const increaseCount = () => {
  setCount(prevCount => prevCount + 1);
};

const decreaseCount = () => {
  if (count > 0) {
    setCount(prevCount => prevCount - 1);
  }
};
 return (
        <div className=" mt-2 ml-2 mr-3 ">
            <div class="flex">
             <div class="justify-items-start ">
             <Link to="/popularpacks"class="text-xl mt-1"><IoArrowBack/></Link> 
            </div>
            <div><h3 class="pl-6 ml-20 md:pl-50 justify-center text-base font-medium">Bundle Details</h3></div>
            </div>
            <div className="w-11/12 h-42 ml-2 carousel rounded-box mt-2">
    <div className="carousel-item w-full ">
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
    </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
  </div>
</div>
   <div> <h2 class="font-bold text-2xl pl-10 pt-1">Bundle Pack</h2></div>
   <div class="flex" >
    <div class="flex pt-2 text-lg"><p class="ml-8 pt-3 font-bold text-lg">$ 30</p> <span class="pl-4 text-2xl text-green-700 font-bold">$20</span></div>
    <div class="flex gap-3 pl-28 pt-6" >
        <button onClick={increaseCount}class="text-2xl border h-8 w-6 text-green-700">+</button>
        <p class="text-xl">{count}</p>
        <button onClick={decreaseCount} class="text-2xl border h-8 w-6 text-center text-green-700">-</button>
        </div>
    </div>
    <div class="flex pt-6 mr-10 justify-around">
      <div><p class="font-bold text-base">25kg</p>  <span>Weight</span></div>
      <div><p class="font-bold text-base">Medium</p><span> Size</span></div>
      <div><p class="font-bold text-base">17</p>    <span>items</span></div>
    </div>
    <div><h4 class="font-bold text-base mt-5 pl-5">Pack Details</h4></div>
    <div> <Packdetails/></div>
    <div className="rating "><p class="font-bold text-base pl-5">Review</p>
    <p class="flex pl-32">
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <p class="text-2xl pt-1"><IoChevronForward /></p>
      </p>
    </div>
     <div class='flex mt-2'>
        <CiShoppingCart class ="border-solid border-2 rounded h-10 w-14 mt-2 ml-5"/>
        <button class="ml-16 bg-green-500 border-solid rounded w-40 h-10 text-lg font-medium text-white">Buy Now </button>
     </div>
 </div>
    )
}

export default BundleDetails;