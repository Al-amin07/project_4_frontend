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


        <div className=''>
            <div ref={sliderRef} className="keen-slider ">
                <div className="keen-slider__slide "><Hero title='Drive Your Dream Car' desc='Explore our exclusive collection of luxury and sports cars at unbeatable prices.' img={img5} /></div>
                <div className="keen-slider__slide "><Hero title='Redefining the Car Buying Experience' desc='Browse. Choose. Drive. A seamless car shopping journey with trusted listings and customer-first support.' img={img7} /></div>
                <div className="keen-slider__slide "><Hero title='Smart Cars. Smarter Choices' desc='Shop with confidence. Compare, customize, and connect — all through one intelligent platform' img={img4} /></div>

            </div>
        </div>


    );
};

export default Header;