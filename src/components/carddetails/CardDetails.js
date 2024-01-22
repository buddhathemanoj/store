import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CardDetails() {

    const [activeAddress,setActiveAddress] = useState('home');
    const [activeCarouselItem, setActiveCarouselItem] = useState(0);
    const navigate = useNavigate();

    const handleRadioChange = (address) => {
        setActiveAddress(address)
    };

    const handleCarouselChange = (index) => {
        setActiveCarouselItem(index);
      };

      const carouselItems = [
        {
            image: "https://cdn.pixabay.com/photo/2013/07/13/10/32/mastercard-157441_640.png",
            label: "Master Card"
        },
        {
            image: "data:image/jpeg;base64,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",
            label: "Pay Pal"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-n0bQFbk-Rx0bMmhiwUvDQkZ6o1ymrWRPg&usqp=CAU",
            label: "Cash on Delivery"
        }
      ]

    return(
        <div>
         <div className='flex ml-5 mt-5 gap-36'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => navigate('/checkout')}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
<h1>Checkout</h1>
            </div>
            <div className='ml-5 mt-5'>
                <h1 className='flex justify-between'>Select Delivery Address<Link className='text-green-700 font-medium mr-5'>Add New</Link></h1>
            </div>
            <div className={`flex ml-5 mt-5 gap-5 border w-11/12 h-32 rounded-xl p-5 ${
          activeAddress === 'home' ? 'bg-green-100 border-green-500' : 'bg-slate-100'
        }`}>
            <input type="radio" name="radio-5" className="radio radio-success"  checked={activeAddress === 'home'}
          onChange={() => handleRadioChange('home')}/>
            <h1 className='flex flex-col gap-2 font-medium'>Home Address <p className='font-thin'>(309) 071-9396-939</p> <p className='font-thin'>1749,Custom Road,Chhatak</p></h1>
            </div>
            <div  className={`flex ml-5 mt-5 gap-5 border w-11/12 h-32 rounded-xl p-5 ${
          activeAddress === 'office'
            ? 'bg-green-100 border-green-500'
            : 'bg-slate-100'
        }`}>
            <input type="radio" name="radio-5" className="radio radio-success" checked={activeAddress === 'office'}
          onChange={() => handleRadioChange('office')}/>
            <h1 className='flex flex-col gap-2 font-medium'>Office Address <p className='font-thin'>(309) 071-9396-939</p> <p className='font-thin'>1749,Custom Road,Chhatak</p></h1>
            </div>
            <div className="ml-5 mt-5">
        <h1>Select Payment System</h1>
        <div className="carousel rounded-box w-96 gap-5 mt-5"> 
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item w-36 flex flex-col border items-center rounded-xl ${
                index === activeCarouselItem
                  ? 'bg-green-100 border-green-500'
                  : 'bg-slate-100'
              }`}
              onClick={() => handleCarouselChange(index)}
            >
              <img src={item.image}  className="w-10 h-8 " />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-5 ml-5'>
        <h1>Card Name</h1>
        <input type="text" className="input input-bordered w-11/12 mt-3" />
      </div>
      <div className='mt-5 ml-5'> 
        <h1>Card Number</h1>
        <input type="text" className="input input-bordered w-11/12 mt-3" />
      </div>
      <div className='mt-5 ml-5 flex gap-2'>
        <div>
            <h1>Expiration Date</h1>
            <input type="date" className="input input-bordered w-48 max-w-xs mt-3" />
        </div>
        <div>
            <h1>CVV</h1>
            <input type="text" className="input input-bordered w-48 max-w-xs mt-3" />
        </div>
      </div>
      <div className='flex justify-between mt-5 ml-5'>
        <h1>Remember My Card Details</h1>
        <input type="checkbox" className="toggle toggle-success toggle-lg mr-5"/>
      </div>
      <div>
      <button className="btn btn-wide bg-green-600 text-white w-11/12 ml-5 mt-5 rounded-2xl" onClick={() => navigate('/orderplaced')}>Pay Now</button>
      </div>
        </div>
    )
}

export default CardDetails
