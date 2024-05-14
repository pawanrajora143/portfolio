

import React from 'react'
import "../Portfolio/Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import sidebar from "../../img/sidebar.png"
import ecommerce from "../../img/ecommerce.png"
import hoc from "../../img/hoc.png"
import musicapp from "../../img/musicapp.png"
import "swiper/css"
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='portfolio'>

        {/* heading */}

        <span style={{color:darkMode? "white" : ""}}>Recet Project</span>
        <span>Portfolio</span>

        {/* slider */}
        

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicapp} alt="" />
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Portfolio
