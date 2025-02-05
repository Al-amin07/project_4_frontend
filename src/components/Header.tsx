/* eslint-disable @typescript-eslint/no-explicit-any */




import img4 from '../assets/car/8.jpeg'
import img5 from '../assets/car/10.webp'

import img7 from '../assets/car/14.avif'



import Hero from './Hero';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../pages/home/Header.css"
const Header = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: any
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 3000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (

        // <div>
        //     <Swiper
        //         spaceBetween={30}
        //         centeredSlides={true}
        //         autoplay={{
        //             delay: 4000,
        //             disableOnInteraction: false,
        //         }}
        //         loop={true}
        //         pagination={{
        //             clickable: true,
        //         }}
        //         navigation={true}
        //         modules={[Autoplay, Pagination, Navigation]}
        //         className="mySwiper min-h-[600px] z-30 mt-0 rounded-lg"
        //     >

        //         <SwiperSlide>
        //             <Hero img={img5} />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <Hero img={img7} />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <Hero img={img4} />
        //         </SwiperSlide>



        //     </Swiper>
        // </div>
        <div className=''>
            <div ref={sliderRef} className="keen-slider ">
                <div className="keen-slider__slide "><Hero img={img5} /></div>
                <div className="keen-slider__slide "><Hero img={img7} /></div>
                <div className="keen-slider__slide "><Hero img={img4} /></div>
                {/* <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div> */}
            </div>
        </div>


    );
};

export default Header;