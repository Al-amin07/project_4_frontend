
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import img4 from '../assets/car/8.jpeg'
import img5 from '../assets/car/10.webp'

import img7 from '../assets/car/14.avif'



import Hero from './Hero';

const Header = () => {
    return (

        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper min-h-[600px] z-30 mt-0 rounded-lg"
            >
                {/* <SwiperSlide>
                    <Hero img={img6} />
                </SwiperSlide> */}
                <SwiperSlide>
                    <Hero img={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Hero img={img7} />
                </SwiperSlide>
                <SwiperSlide>
                    <Hero img={img4} />
                </SwiperSlide>



            </Swiper>
        </div>


    );
};

export default Header;