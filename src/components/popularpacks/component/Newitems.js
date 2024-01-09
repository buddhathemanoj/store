import React from 'react';

function Newitems  () {
    const newcardData = [
        {
         img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStX7ReiWOz6AoEmn51k9hCfMxAtRa4PU6ixg&usqp=CAU",
         heading : "Perry Ice cream",
         subheading : "Banana",
         weight: "800gm",
         offer: "$13",
         rate : "$15"
           
        },
         {
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsNdMbrqG2TPm4-DSwXQTFURz8Xdbrcoi3A&usqp=CAU",
          heading: "Vennila Ice Cream",
          subheading: "vennila",
          weight: "500gm",
          offer: "$12",
          rate : "$15"
        
         },
         {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJngU02oVZ6E_2jUAW-lYBWnYzoEx5ClWLhvncPZ_vzyFdUkelqSCunWss-ylOQOixYU&usqp=CAU",
            heading:"Meat",
            subheading:"",
            weight:"1 kg",
            offer:"",
            rate:"$40"
         }
      ]
      const newitemcarddata =Array(1).fill(newcardData[0])
      const newdesertdata = Array(1).fill(newcardData[1])
      const newmeat = Array(1).fill(newcardData[2])
  return (
    <div>
         <div className="carousel rounded-box w-full gap-4 h-72" >
        <div className="carousel-item w-52 border-2 border-solid rounded-lg">
             {newitemcarddata.map((card,data) => (
            <div className="card w-96 bg-base-100 shadow-xl ml-2" key={data}>
         <figure className="px-12 mt-2">
           <img src={card.img} alt="Shoes" className="rounded-xl mt-2" />
      </figure>
   <div className="card-body items-center text-center">
       <h2 class="card-title font-normal text-lg ">{card.heading}</h2>
       <p class='font-normal'>{card.subheading}</p>
       <p class ='font-normal'>{card.weight}</p>
     <div class="card-actions">
     <p className=' text-xl font-semibold'>{card.offer}</p>
        <p class="font-normal line-through">{card.rate}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48 border-2 border-solid rounded-lg">
  { newdesertdata.map((card,data) => (
            <div className="card w-96 bg-base-100 pt-2 border-2 border-solid rounded-lg" key={data}>
  <figure className="px-10 mt-2">
    <img src={card.img} alt="Shoes" className="rounded-xl mt-2" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-medium text-base ">{card.heading}</h2>
    <p className='font-normal'>{card.subheading}</p>
    <p class ='font-normal'>{card.weight}</p>
    <div className="card-actions">
    <p className=' text-lg font-medium'>{card.offer}</p>
        <p class="font-normal line-through">{card.rate}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
  <div className="carousel-item w-48 border-2 border-solid rounded-lg">
  {newmeat.map((card,data) => (
     <div className="card w-96 bg-base-100 shadow-xl border-2 border-solid rounded-lg" key={data}>
  <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl mt-2" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-medium text-xl">{card.heading}</h2>
    <p className='font-normal'>{card.subheading}</p>
    <p class ='font-normal'>{card.weight}</p>
    <div className="card-actions">
    <p className=' text-lg font-medium'>{card.offer}</p>
        <p class="font-normal line-through">{card.rate}</p>
    </div>
  </div>
</div>

          ))}
  </div> 
   </div>
 </div>
  );
}

export default Newitems;
