import React from "react";
import { Link, useNavigate } from "react-router-dom";




const PopularPacks = () => {

  const data = 
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWQADASTTEwwgN8i64Yl-x8jxHG-ZeFPLXg&usqp=CAU",
      heading: "Bundle Pack",
      subheading: "Onion, Oil, Salt",
      RS: "$35",
      rs: "$50.32",
    }
  
     
  
  const duplicatedData = Array(8).fill(0).map((_,index) => ({
    ...data,
    id: index + 1,
  }));

  const navigate = useNavigate();
  return (
    <div >
      <div className="flex ml-5 gap-32 mt-5">
        <Link to='/dashboard'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>

</Link>
<p>Popular Packs</p>
        </div>
        <div className="flex flex-wrap w-full ml-6">
          {duplicatedData.map((item) => (
         <div key={item.id}>    
           <div
              className="card w-44 h-66 bg-base-100 m-2 shadow-xl border-2 border-solid" onClick={() => navigate(`/bundledetailspp/${item.id}`)}
            >
              <figure>
                <img className="w-36 h-36 " src={item.img} alt="Fruits" />
              </figure>
              <div className="pl-4 ">
                <h2 className="card-title text-2xl font-light">{item.heading}</h2>
                <p className="text-sm font-thin">{item.subheading} </p>
                <div className="card-actions justify-start">
                  <div className=" ">
                    <h2 className="text-xl">{item.RS}</h2>
                  </div>
                  <div className=" pt-1 text-sm font-light line-through"pl-544 > {item.rs} </div>
                </div>
              </div>
            </div></div>
    
          ))}
        </div>
        <div></div>
      
    </div>
  );
};

export default PopularPacks;
