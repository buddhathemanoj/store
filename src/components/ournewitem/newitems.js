import React from 'react'
import { Link } from 'react-router-dom';

function Newitems() {

    const data = [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVRz_5op7pn5IZt3U0GgyvDE3StH0qjbEvg&usqp=CAU",
          heading: "Perry's Ice Cream",
          subheading: "Banana",
          weight: "800gm",
          RS: "$13",
          rs: "$15",
        },
      ];
      
         
      
      const duplicatedData = Array(8).fill(data[0]);
      
      return (
        <div >
          <div className="flex ml-5 gap-32 mt-5">
            <Link to='/dashboard'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>
    
    </Link>
    <p>New Items</p>
            </div>
            <div className="flex flex-wrap w-full ml-6">
              {duplicatedData.map((item, index) => (
             <div>    
               <div
                  key={index}
                  className="card w-44 h-66 bg-base-100 m-2 shadow-xl"
                >
                  <figure>
                    <img className="w-36 h-36 ml-10" src={item.img} alt="Fruits" />
                  </figure>
                  <div className="pl-4 flex flex-col">
                    <h2 className="card-title text-lg font-light">{item.heading}</h2>
                    <p className="text-lg font-light">{item.subheading} </p>
                    <div className="card-actions justify-start flex flex-col mt-5">
                        <div>
                            <p className='font-thin'>{item.weight}</p>
                            <div className='flex gap-1'>
                            <h2 className="text-xl font-light">{item.RS}</h2>
                      <p className=" pt-2 text-sm font-thin line-through">{item.rs}</p>
                        </div>
                        </div>
                      <div className="flex">
                      
                      </div>
                    </div>
                  </div>
                </div></div>
        
              ))}
            </div>
            <div></div>
          
        </div>
      );
}

export default Newitems