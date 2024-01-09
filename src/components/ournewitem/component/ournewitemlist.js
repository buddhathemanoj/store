import React from "react";

function OurnewitemList () {
  
  const cardData = [
    {img : "data:image/jpeg;base64,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",
    heading : "Bundle Pack",
    subheading : "Onion,Oil,Salt",
    rate : "$35",
    offer: "50.32"  
  }
  ]

  const distributedCarddata = Array(1).fill(cardData[0])
    return(
        <div>
          <div className="carousel rounded-box w-11/12 gap-4 h-64" >
  <div className="carousel-item w-48 border-solid border-2">
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title font-light">{card.heading}</h2>
    <p className='font-thin'>{card.subheading}</p>
    <div className="card-actions">
    <p>{card.rate}</p>
    <p className='font-thin line-through'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48 border-solid border-2">
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title font-light">{card.heading}</h2>
    <p className='font-thin'>{card.subheading}</p>
    <div className="card-actions">
    <p>{card.rate}</p>
    <p className='font-thin line-through'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48 border-solid border-2">
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title font-light">{card.heading}</h2>
    <p className='font-thin'>{card.subheading}</p>
    <div className="card-actions">
    <p>{card.rate}</p>
    <p className='font-thin line-through'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48 border-solid border-2">
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title font-light">{card.heading}</h2>
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

    export default OurnewitemList