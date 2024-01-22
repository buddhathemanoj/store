import React from "react";
import { useNavigate } from "react-router-dom";

function OrderPlaced() {

  const navigate = useNavigate();

    return(
        <div>
            <div className="flex flex-col gap-5 items-center justify-center">
<img src="https://cdn.pixabay.com/photo/2018/08/17/19/52/shopping-3613689_640.png" alt="order placed" className="w-72 mt-24"/>
<h1 className="text-2xl font-medium text-black">Order Placed Successfully</h1>
<p className="text-base ml-6">Thankyou for your order. Your order has been placed successfully</p>
</div>
<div className="mt-48">
<button className="btn btn-wide bg-green-600 text-white w-11/12 ml-5 mt-5 rounded-2xl" onClick={()=>document.getElementById('my_modal_2').showModal()}>Continue</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box h-4/6 bg-green-100 w-10/12">
    <img src="https://img.freepik.com/free-vector/courier-delivering-order-customer-door-man-getting-parcel-box-package-flat-vector-illustration-postman-shipping-service_74855-8309.jpg?size=626&ext=jpg&ga=GA1.1.806707650.1705899266&semt=ais" alt="order delivered successfully" className="rounded-full border"/>
    <h1 className="py-4 p-5 text-center text-slate-400 tracking-wide">Hurray! we just delivered your <span className=" text-black font-normal">#15425050</span> order successfully</h1>
    <button className="btn btn-wide bg-green-600 text-white w-11/12 ml-5 mt-5 rounded-2xl">Rate The Product</button>
    <button className="btn btn-wide  bg-green-100 text-green-500 border-green-500 w-11/12 ml-5 mt-5 rounded-2xl" onClick={() => navigate('/dashboard')}>Browse Home</button>
  </div>
  <form method="dialog" className="modal-backdrop">
  </form>
</dialog>
<button className="btn btn-wide bg-white text-green-500 w-11/12 ml-5 mt-5 rounded-2xl">Track Order</button>
</div>
        </div>
    )
}

export default OrderPlaced