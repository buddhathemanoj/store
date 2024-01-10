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
            <div><h2 class="pl-6 ml-20 md:pl-50 justify-center text-base font-medium">Bundle Details</h2></div>
            </div>
            <div className="w-11/12 h-80 ml-3  mt-2 carousel rounded-box ">
    <div className="carousel-item w-full ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 absolute bg-white rounded-full ml-72 p-2 mt-5" >
       <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
      <img src="https://media.istockphoto.com/photos/grocery-bag-with-food-picture-id487624085?k=6&m=487624085&s=170667a&w=0&h=eBI7lEixugJlcoUulMJNy882XiJq__rrjij3KTOkpn4="/>
    </div> 
  <div className="carousel-item w-full">
    <img src="https://activerain.com/image_store/uploads/1/2/3/0/5/ar132661185150321.jpg"/>
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
   <div> <h2 class="font-bold text-2xl pl-8 pt-1">Bundle Pack</h2></div>
   <div class="flex" >
    <div class="flex pt-2 text-lg"><p class="ml-8 pt-3 font-semibold text-xl line-through">$ 30</p> <span class="pl-4 text-2xl text-green-700 font-bold">$20</span></div>
    <div class="flex gap-3 ml-36 pt-6" >
        <button onClick={increaseCount}class="text-3xl text-center border h-10 w-10 text-green-800">+</button>
        <p class="text-xl ">{count}</p>
        <button onClick={decreaseCount} class="text-3xl text-center border h-10 w-10 text-green-800">-</button>
        </div>
    </div>
    <div class="flex pt-6 mr-10 justify-around">
      <div><p class="font-bold text-lg">25kg</p>  <span class="text-lg font-medium text-gray-400">Weight</span></div>
      <div><p class="font-bold text-lg">Medium</p><span class="text-lg font-medium text-gray-400"> Size</span></div>
      <div><p class="font-bold text-lg">17</p>    <span class="text-lg font-medium text-gray-400">Items</span></div>
    </div>
    <div><h4 class="font-bold text-lg mt-5 pl-5">Pack Details</h4></div>
    <div> <Packdetails/></div>
    <div className="rating "><p class="font-bold text-base pl-5 mt-2">Review</p>
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
        <button class="ml-16 mt-2 bg-green-500 border-solid rounded w-52 rounded-lg h-10 text-lg font-medium text-white">Buy Now </button>
     </div>
 </div>
    )
};

export default BundleDetails;