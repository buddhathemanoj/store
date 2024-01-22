import React, { useState } from "react";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0)

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    }


    const increaseCount1 = () => {
        setCount1(prevCount => prevCount + 1);
    };

    const decreaseCount1 = () => {
        if (count1 > 0) {
            setCount1(prevCount => prevCount - 1);
        }
    }


    const increaseCount2 = () => {
        setCount2(prevCount => prevCount + 1);
    };

    const decreaseCount2 = () => {
        if (count2 > 0) {
            setCount2(prevCount => prevCount - 1);
        }
    }

    const navigate = useNavigate();

    return(
        <div>
        <div className="flex mt-5 justify-around">
            
          <div className="w-16">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9t8NZqkYZ31hX-ZpHKqbCbjvLveDrdWt8MQ&usqp=CAU" alt="sulphurfreesugar" />
          </div>
          <div className="flex flex-col gap-1">
            <p>Sulphurfree Bura</p>
            <p>570ml</p>
            <div className="flex gap-7 justify-center content-center">
            <button onClick={increaseCount} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">+</button>
            <p class="text-xl">{count}</p>
            <button onClick={decreaseCount} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">-</button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
<p className="font-thin">$20</p>
          </div>
          </div>

          <div className="flex mt-5 justify-around">
          <div className="w-16">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9t8NZqkYZ31hX-ZpHKqbCbjvLveDrdWt8MQ&usqp=CAU" alt="sulphurfreesugar" />
          </div>
          <div className="flex flex-col gap-1"> 
            <p>Sulphurfree Bura</p>
            <p>570ml</p>
            <div className="flex gap-7 justify-center content-center">
            <button onClick={increaseCount1} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">+</button>
            <p class="text-xl">{count1}</p>
            <button onClick={decreaseCount1} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">-</button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
<p className="font-thin">$20</p>
          </div>
</div>

<div className="flex mt-5 justify-around">
          <div className="w-16">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9t8NZqkYZ31hX-ZpHKqbCbjvLveDrdWt8MQ&usqp=CAU" alt="sulphurfreesugar" />
          </div>
          <div className="flex flex-col gap-1">
            <p>Sulphurfree Bura</p>
            <p>570ml</p>
            <div className="flex gap-7 justify-center content-center">
            <button onClick={increaseCount2} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">+</button>
            <p class="text-xl">{count2}</p>
            <button onClick={decreaseCount2} className="text-3xl border rounded-lg h-10 w-10 text-center text-green-500">-</button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
<p className="font-thin">$20</p>
          </div>
          </div>
          <div className="ml-5 mt-5">
            <h1>Add Coupon</h1>
            <input type="search" placeholder="Entry Voucher Code" className="border-solid border-gray border-2 h-10 mt-5 p-3"/>
            <button className="border-2 w-32 h-10 ml-5 bg-slate-200 hover:bg-slate-500 active:bg-green-500">Apply</button>
          </div>
          <div className="flex flex-col gap-6 mt-5 ml-5">
            <span className="flex justify-between">Total Item <p className="text-black font-medium mr-5">6</p></span>
            <span className="flex justify-between">Weight <p className="text-black font-medium mr-5">33kg</p></span>
            <span className="flex justify-between">Price <p className="text-black font-medium mr-5">$ 82.25</p></span>
            <span className="flex justify-between">Price <p className="text-black font-medium mr-5">$ 12.25</p></span>
            <p className="border-dashed border border-slate-400"></p>
            <span className="flex justify-between">Total Price <p className="text-black font-medium mr-5">$ 70.25</p></span>
          </div>
          <button onClick={() => navigate('/carddetails')} className="border bg-green-600 font-semibold w-96 ml-5 mt-5 text-white h-12 rounded-xl">Checkout</button>
          <div className="fixed bottom-0 w-full">
            <Footer/>
          </div>
        </div>
    )
}

export default Checkout