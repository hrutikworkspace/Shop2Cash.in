import React,{ Component } from 'react'
import './ImageSlider.css';

import Slider from "react-slick";



function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 10000,
        cssEase: "linear"
      };
  return (
    <>
        
    
    {/* <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active row">
     
      <div className="card-wrapper container-sm d-flex  justify-content-around">
        <div className='row'>
        <div className='col-lg-4'>
      <div className="card" style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">
       
  </div>
</div>
</div>
<div className='col-lg-4'>
<div className="card" style={{width: "18rem",height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body"> 
    
  </div>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className="card " style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">   
    
  </div>
</div>
</div>
</div>
</div>
    </div>
    <div className="carousel-item ">
      <div className="card-wrapper container-sm d-flex   justify-content-around">
        <div className='row'>
            <div className='col-lg-4'>
      <div className="card  " style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body"> 
    
  </div>
</div>
</div>
<div className='col-lg-4'>
<div className="card" style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">    
    
  </div>
        </div>
        </div>
        <div className='col-lg-4'>
        <div className="card" style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">    
    
  </div>
</div>
</div>
    </div>
    </div>
    </div>
    <div className="carousel-item col-lg-4">
      <div className="card-wrapper container-sm d-flex   justify-content-around">
      <div className="card  " style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body"> 
    
  </div>
</div>
<div className="card" style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">    
    
  </div>
        </div>
        <div className="card" style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">    
    
  </div>
</div>
    </div>
    </div>
    <div className="carousel-item col-lg-4">
      <div className="card-wrapper container-sm d-flex  justify-content-around">
      <div className="card " style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">    
    
  </div>
</div>
        <div className="card" style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">    
    
  </div>
        </div>
        <div className="card" style={{width: "18rem", height:"9rem"}}>
  <img src="/2-3.png" className="card-img-top" alt="..."/>
  <div className="card-body">   
    
  </div>
</div>
    </div>
  </div>  
</div>    
    {/* </div>  */}

{/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-10" src="/2-3.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-10" src="/2-3.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-10" src="/2-3.png" alt="Third slide"/>
    </div>
  </div>  
</div> */}

<div>
        
        <Slider {...settings}>
          <div>
            <img src={require("../asset/image 5.png")} style={{width:"28rem"}}/>
          </div>
          <div>
          <img src={require("../asset/image 6.png")} style={{width:"28rem"}}/>
          </div>
          <div>
          <img src={require("../asset/image 7.png")} style={{width:"28rem"}}/>
          </div>
          <div>
          <img src={require("../asset/image 5.png")} style={{width:"28rem"}}/>
          </div>
          <div>
          <img src={require("../asset/image 6.png")} style={{width:"28rem"}}/>
          </div>
          <div>
            <img src={require("../asset/image 7.png")} style={{width:"28rem"}}/>
          </div>
        </Slider>
      </div>


    </>
  )
}

export default ImageSlider;