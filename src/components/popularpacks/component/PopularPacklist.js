import React from 'react'
import { useNavigate } from 'react-router-dom'

function PopularPacklist() {

  const cardData = [
    {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ggguKuBFSmLhJp73HsNkP8RFhgD6hutbTQ&usqp=CAU",
    heading : "Bundle Pack",
    subheading : "Onion,Oil,Salt",
    rate : "$35",
    offer: "50.32",
    id: ""  
  }
  ]

  const navigate = useNavigate();

  const distributedCarddata = Array(1).fill(cardData[0])
    return(
        <div className='ml-5'>
          <div className="carousel rounded-box w-11/12 gap-4 h-64" onClick={() => navigate("/bundledetails")}>
  <div className="carousel-item w-48 border-2 border-solid rounded-lg">
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title font-normal">{card.heading}</h2>
    <p className='font-thin'>{card.subheading}</p>
    <div className="card-actions">
    <p>{card.rate}</p>
    <p className='font-thin line-through'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48 border-2 border-solid rounded-lg" onClick={() => navigate("/bundledetails")}>
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title font-normal">{card.heading}</h2>
    <p className='font-thin'>{card.subheading}</p>
    <div className="card-actions">
    <p>{card.rate}</p>
    <p className='font-thin line-through'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48 border-2 border-solid rounded-lg" onClick={() => navigate("/bundledetails")}>
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title font-normal">{card.heading}</h2>
    <p className='font-thin'>{card.subheading}</p>
    <div className="card-actions">
    <p>{card.rate}</p>
    <p className='font-thin line-through'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48 border-2 border-solid rounded-lg" onClick={() => navigate("/bundledetails")}>
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title font-normal">{card.heading}</h2>
    <p className='font-thin'>{card.subheading}</p>
    <div className="card-actions">
    <p>{card.rate}</p>
    <p className='font-thin line-through'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
</div>

        </div>
    )
}

export default PopularPacklist