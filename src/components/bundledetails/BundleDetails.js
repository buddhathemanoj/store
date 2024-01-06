import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const BundleDetails = () => {
    const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
    return (
        <div className="w-full mt-6 ml-3 mr-3  justify-center">
            <div class="flex">
             <div  class="grid justify-items-start ">
           <p class="text-xl mt-1"><IoArrowBack /></p> 
            </div>
            <div><h3 class="pl-6 ml-20 md:ml-50 text-base font-medium">Bundle Details</h3></div>
            </div>
            <div className="w-60 carousel rounded-box ml-12 mt-5">
    <div className="carousel-item w-full ">
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
    </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div>
</div>
   <div> <h2 class="font-bold text-2xl pl-10 pt-1">Bundle Pack</h2></div>
   <div class="flex" >
    <div class="flex mt-5 text-lg"><p class="ml-8 mt-3 font-bold text-lg">$ 30</p> <span class="pl-4 text-2xl text-green-700 font-bold">$20</span></div>
    <div class="flex gap-3 pl-20 mt-6" >
        <button onClick={increaseCount}class="text-2xl border h-8 w-6 text-green-700">+</button>
        <p class="text-xl">{count}</p>
        <button onClick={decreaseCount} class="text-2xl border h-8 w-6 text-center text-green-700">-</button>
        </div>
    </div>
    <div class="flex mt-4 mr-10 justify-around">
      <div><p class="font-bold text-base">25kg</p>  <span>Weight</span></div>
      <div><p class="font-bold text-base">Medium</p><span> Size</span></div>
      <div><p class="font-bold text-base">17</p>    <span>items</span></div>
    </div>
 </div>
    )
}

export default BundleDetails