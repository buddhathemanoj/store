import React from 'react'

function PopularPacklist() {

  const cardData = [
    {
     img : "data:image/jpeg;base64,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",
     heading : "Bundle Pack",
     subheading : "Onion,Oil,Salt",
     rate : "$35",
     offer: "50.32"  
    },
     {
      img:"https://th.bing.com/th/id/OIP.W5cXmEXYGVGoaEnWWTwhzAAAAA?w=133&h=180&c=7&r=0&o=5&pid=1.7",
      heading: "Medium Spices",
      subheading: "Onion,Oil,Salt",
      rate : "$35",
      offer: "50.32"
     }  
  ]

  const distributedCarddata = Array(1).fill(cardData[0])
  const packdata = Array(1).fill(cardData[1])
    return(
   <div>
          <div className="carousel rounded-box w-full gap-4 h-64" >
        <div className="carousel-item w-48 border-2 border-solid rounded-lg">
             {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl ml-2" key={data}>
         <figure className="px-12 pt-10">
           <img src={card.img} alt="Shoes" className="rounded-xl mt-2" />
      </figure>
   <div className="card-body items-center text-center">
       <h2 className="card-title font-medium text-xl ">{card.heading}</h2>
       <p className='font-normal'>{card.subheading}</p>
     <div className="card-actions">
        <p class="line-through text-lg font-medium">{card.rate}</p>
        <p className='font-normal'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48">
  {packdata.map((card,data) => (
            <div className="card w-96 bg-base-100 pt-2 border-2 border-solid rounded-lg" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl mt-2" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold text-base ">{card.heading}</h2>
    <p className='font-normal'>{card.subheading}</p>
    <div className="card-actions">
    <p class="line-through text-lg font-medium">{card.rate}</p>
    <p className='font-thin'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48">
  {distributedCarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-solid rounded-lg" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl mt-2" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-medium text-xl">{card.heading}</h2>
    <p className='font-normal'>{card.subheading}</p>
    <div className="card-actions">
    <p class="line-through text-lg font-medium">{card.rate}</p>
    <p className='font-thin'>{card.offer}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
    <div className="carousel-item w-48">
        {distributedCarddata.map((card,data) => (
       <div class="card w-96 bg-base-100 border-2 border-solid rounded-lg" key={data}>
      <figure className="px-10 pt-10"> 
      <img src={card.img} alt="Shoes" className="rounded-xl mt-2" />
      </figure>
     <div className="card-body items-center text-center">
        <h2 className="card-title font-medium text-xl">{card.heading}</h2>
        <p className='font-normal'>{card.subheading}</p>
     <div className="card-actions">
         <p class="line-through text-lg font-medium">{card.rate}</p>
         <p className='font-thin'>{card.offer}</p>
     </div>
   </div>
</div>

          ))}
      </div> 
   </div>

  </div>
    )
}

export default PopularPacklist;