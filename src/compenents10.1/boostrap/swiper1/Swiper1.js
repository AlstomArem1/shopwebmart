import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import er1 from "./ve1.jfif";
import er2 from "./ve2.jpg";
import er3 from "./ve3.jpg";
import er4 from "./ve4.jpg";
import er5 from "./ve5.jpg";
import er6 from "./ve6.jpg";
import er7 from "./ve7.jpg";
import er8 from "./ve8.jpeg";
import er9 from "./ve9.jpg";

import "./Swiper1.css";

export default function Swiper1() {
    
    return (
        <div className='product-boxhinh1' >
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
               

                className='product-swiper1-slider'
            >
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er1} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er2} />
                </SwiperSlide >
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er3} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er4} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er5} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er6} />
                </SwiperSlide >
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er7} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er8} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er9} />
                </SwiperSlide>
            </Swiper>
            <Swiper

                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className='product-swiper1-slider-thumbs'
            >
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er1} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er2} />
                </SwiperSlide >
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er3} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er4} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er5} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er6} />
                </SwiperSlide >
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er7} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er8} />
                </SwiperSlide>
                <SwiperSlide className='swiper1-imgesl1'>
                    <img src={er9} />
                </SwiperSlide>
            </Swiper>
        </ div>

    )
}