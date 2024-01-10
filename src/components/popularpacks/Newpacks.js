import React, { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { IoArrowBack ,IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Newpacks = () => {
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
    <div className=" mt-4 ml-2 mr-3 ">
            <div class="flex">
             <div class="justify-items-start ">
             <Link to="/dashboard"class="text-xl mt-1"><IoArrowBack/></Link> 
            </div>
            <div><h2 class="pl-6 ml-20 md:pl-50 justify-center text-base font-medium">Product Details</h2></div>
            </div>
            <div className="w-11/12 h-80 ml-3 mt-5 mb-3 carousel rounded-box ">
    <div className="carousel-item w-full ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 absolute bg-white rounded-full ml-72 p-2 mt-5" >
       <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
      <img src="https://cornvalefoods.co.uk/wp-content/uploads/2020/06/broccoli.png"/>
    </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component"/>
  </div> 
  
</div>
   <div> <h2 class="font-semibold text-2xl pl-8 pt-1">Cauliflower Bangladeshi</h2>
       <p class="pl-8 mt-2 text-gray-400">Weight: 5kg</p>
   </div>
   <div class="flex" >
    <div class="flex mt-5"><p class="ml-8 pt-2 font-semibold text-lg line-through">$ 30</p> <span class="pl-4  pt-1 text-2xl text-green-700 font-bold">$20</span></div>
    <div class="flex gap-3 ml-36 pt-6" >
        <button onClick={increaseCount}class="text-3xl text-center border h-10 w-10 text-green-800">+</button>
        <p class="text-2xl ">{count}</p>
        <button onClick={decreaseCount} class="text-3xl text-center border h-10 w-10 text-green-800">-</button>
        </div>
    </div>
    <div><h4 class="font-medium text-lg mt-5 pl-5">Product Details</h4></div>
    <div>
        <p class="text-gray-500 text-left ml-5">Duis aute veniam veinam qui aliquip irue dusi sint magna ocaecar dolore nisi culpa do.Est nisi incidididunt aliquip commondo aliqua tempor.</p>
    </div>
    <div class="rating "><p class="font-bold text-base pl-5 mt-5">Review</p>
    <p class="flex pl-32 mt-5">
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
      <p class="text-2xl pt-1"><IoChevronForward /></p>
      </p>
    </div>
     <div class='flex mt-10'>
        <CiShoppingCart class ="border-solid border-2 rounded-lg h-12 w-16 text-center mt-2 ml-5"/>
        <button class="ml-16 mt-2 bg-green-500 border-solid rounded w-52 rounded-lg h-10 text-lg font-medium text-white">Buy Now </button>
     </div>
 </div>
  );
}

export default Newpacks;
