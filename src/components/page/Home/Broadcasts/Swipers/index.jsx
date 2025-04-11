// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import r1 from '/public/img/r1.png'
import r2 from '/public/img/r2.png'
import r3 from '/public/img/r3.png'
import "./style.css"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Swipers = () => {
  return (

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={2.5}
      navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className="block-swiper">
        <SwiperSlide><img className='r1' src={r1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='r2' src={r2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='r1' src={r3} alt="" /></SwiperSlide>
      </div>


    </Swiper>
  );
};