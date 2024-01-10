import React from 'react';

const Packdetails = () => {
    const packDetails =[
        { img:"https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           name:"Cabbage",
           weight:"2kg"
        }  
    ]
    const packages = Array(4).fill(packDetails[0])
  return (
   <div> 
    {packages.map((pack,details)=>(
        <div key={details} class="flex  justify-around pt-2">
            <img src={pack.img} class='w-14 h-16'/>
            <p class="text-lg font-medium">{pack.name}</p>
            <p class="text-lg font-normal">{pack.weight}</p>
        </div>
    ))}
   </div>
  );
}

export default Packdetails;
