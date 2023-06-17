import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
export default function Swiper1() {
    return (
        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            className='product-swiper1-slider'
        >
            <SwiperSlide>
                
            </SwiperSlide>
        </Swiper>
    )
}