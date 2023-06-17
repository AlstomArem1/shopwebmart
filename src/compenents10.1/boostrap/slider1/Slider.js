// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , FreeMode} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
export default () => {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      modules={[Navigation, FreeMode]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{color:"blue"}}>Vietcomback</SwiperSlide>
      <SwiperSlide style={{color:"#9b59b6"}}>Asbank</SwiperSlide>
      <SwiperSlide style={{color:"#2ecc71"}}>VietinBank</SwiperSlide>
      <SwiperSlide style={{color:"#34495e"}}>Eximbank</SwiperSlide>
      <SwiperSlide style={{color:"#7f8c8d"}}>VPBank</SwiperSlide>
      <SwiperSlide style={{color:"#f39c12"}}>Sacombank</SwiperSlide>
      <SwiperSlide style={{color:"#bdc3c7"}}>Nam A Bank</SwiperSlide>
      <SwiperSlide style={{color:"##833471"}}>TechComBank</SwiperSlide>
      <SwiperSlide style={{color:"#9980FA"}}>Ngan Hang Bank</SwiperSlide>
      ...
    </Swiper>
  );
};