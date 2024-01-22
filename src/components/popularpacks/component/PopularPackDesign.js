import React from 'react'

function PopularPackDesign() {
    return (
<div className="carousel w-full 2xl:w-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1581515286348-98549702050f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdyb2Nlcmllc3xlbnwwfHwwfHx8MA%3D%3D" className="w-11/12 h-48 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" ></a> 
      <a href="#slide2" ></a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyaWVzfGVufDB8fDB8fHww" className="w-11/12 h-48 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" ></a> 
      <a href="#slide3" ></a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1543168256-418811576931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcmllc3xlbnwwfHwwfHx8MA%3D%3D" className="w-11/12 h-48 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" ></a> 
      <a href="#slide4" ></a>
    </div>
  </div> 
  </div>
   
)
}


export default PopularPackDesign