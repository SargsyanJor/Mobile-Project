import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { instance } from '../../App/App';


export const Home = () => {


  const [slider, setSlider] = useState([]);
  useEffect(() => {
    instance.get("/products")
      .then((res) => setSlider(res.data))
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          slider.map((elm) => (
            <SwiperSlide>
              <div>
                <img src={elm.image} alt="" />
                <li>{elm.title}</li>

              </div>


            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
