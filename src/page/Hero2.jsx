
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Container } from 'react-bootstrap';

const CardExample=()=> {
  
  
    const [swiperRef, setSwiperRef] = useState();
    
    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    };
  
    const append = () => {
      swiperRef.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
    };
  
    return (
      <>
              <div style={{marginTop:"50px"}}>

      <h2 style={{textAlign:"center"}}>Get Some Inspiration</h2>
      <h6 style={{textAlign:"center"}}>SOME OF OUR EXCLUSIVE CUSTOM DESIGNS</h6>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><video src="./src/videos/vid1.mp4" style={{height:"400px"}} /></SwiperSlide>
          <SwiperSlide><video src="./src/videos/vid2.mp4" style={{height:"400px"}} /></SwiperSlide>
          <SwiperSlide><video src="./src/videos/vid3.mp4" style={{height:"400px"}} /></SwiperSlide>
          <SwiperSlide><video src="./src/videos/vid4.mp4" style={{height:"400px"}} /></SwiperSlide>
          <SwiperSlide><video src="./src/videos/vid5.mp4" style={{height:"400px"}} /></SwiperSlide>
          <SwiperSlide><video src="./src/videos/vid6.mp4" style={{height:"400px"}} /></SwiperSlide>
          <SwiperSlide><video src="./src/videos/vid7.mp4" style={{height:"400px"}} /></SwiperSlide>
          <SwiperSlide><video src="./src/videos/vid8.mp4" style={{height:"400px"}} /></SwiperSlide>


        </Swiper>
        <div style={{display:"flex"}}>
       
        <div>

        <img src="./src/card/certificate.png" style={{width:"1000px"}}/>
        </div>

        <div style={{display:"grid", marginLeft:"30px"}}>
        <img src="./src/card/icon1.png" />
        <img src="./src/card/icon2.png" /> 
        <img src="./src/card/icon3.png" /> 
        <img src="./src/card/icon4.png" />
        </div>

        </div>

        </div>






        
       
      </>
      
      
    )

    
    
    
    }
    
  

export default CardExample;