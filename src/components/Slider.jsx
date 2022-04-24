import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { SliderApi } from '../apifolder/SliderApi'

function Slider() {

    const [slides] = useState(SliderApi)
    const [activeSlider, setActiveSlider] = useState(0);


    const prevSlide = () => {
        if (activeSlider === 0) {
            setActiveSlider(slides.length - 1);
        } else {
            setActiveSlider(activeSlider - 1);
        }
      };
      const nextSlide = () => {
        if (activeSlider === slides.length - 1) {
            setActiveSlider(0);
        } else {
            setActiveSlider(activeSlider + 1);
        }
    }

    return (
        <div className='parentDiv mt-0 h-[540px] bg-white flex items-center justify-between'>
            {/* LEFT ARROW  */}
            <div className="leftarrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer">
                <ArrowLeftOutlined onClick={prevSlide} style={{ fontSize: "40px"  }} className='' />
            </div>
            {/* SLIDER  */}
            {slides.map((slide, index) => {
                if (index === activeSlider) return null
                    return (
                        <div key={index} className="wrapper flex mt-3  w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative mobile:h-[40%]">
                            <div className="slide flex items-center justify-center h-[100%] ">
                                <div className="forImage flex flex-1 items-center justify-center h-[100%]">
                                    <img className='h-[100%] w-[1400px]' src={slide.src} alt="img_slide" />
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
            {/* RIGHT ARROW  */}
            <div className="leftarrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer">
                <ArrowRightOutlined onClick={nextSlide} style={{ fontSize: "40px" }} />
            </div>
        </div>
    )
}

export default Slider