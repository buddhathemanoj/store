import React from 'react';
import Navfooter from './Navfooter';

const save = () => {
  return (
    <div className=" place-items-center pt-10  bg-">


    <div className="text-center text-xl ml-16 mt-24 h-2/3 w-2/3 px-4  ">
        <img  className="rounded-full" src="https://img.freepik.com/free-vector/opening-gift-box-valentines-day_1262-7392.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/>
        <p >Oops!</p>
       
        </div>
        <div className="text-center text-sm text-gray-400">
            <p>Soory! U Have No Product To Whishlist</p>
        </div>
        <div className="grid place-content-center mt-32">
        <button className="btn btn-wide bg-green-500 rounded-full mb-40 ">Start Adding</button>
        </div>
    
        <div className=" mr-4 rounded-b-lg pt-2 pl-2 mr-18 pb-8 fixed bottom-0  w-full bg-green-100">
       <Navfooter/>
      
     </div>
    </div>
  );
}

export default save;
