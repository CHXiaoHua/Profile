import React from 'react'
import SenecaLogo from "../../assets/seneca.png"
import YorkULogo from "../../assets/Yorku.jpg"
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const AboutTimeline = () => {
    return (
        <section className="education container grid">
            <h2 className="section_title"></h2>
            <Swiper className="education_container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={2}
                grabCursor={true}
                showsPagination={false}
            >
                <SwiperSlide className="education_item">
                    <div className="edu_img">
                        <img src={SenecaLogo} alt="" />
                    </div>
                    <h3 className="edu_title">
                        Computer Programming
                    </h3>
                    <span className="edu_time">Sep 2019 - Dec 2020</span>
                </SwiperSlide>
                <SwiperSlide className="education_item">
                    <div className="edu_img">
                        <img src={YorkULogo} alt="" />
                    </div>
                    <h3 className="edu_title">
                        Computer Science
                    </h3>
                    <span className="edu_time">Jan 2021 - Present</span>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default AboutTimeline