import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import music from '../assets/music.png';
import language from '../assets/language.png';
import tech from '../assets/tech.png';
import art from '../assets/art.png';
import cook from '../assets/cooking.png';
import fitness from '../assets/fitness.png';

const allSlide = [music, language, tech, art, cook, fitness];

const Slider = () => {
    return (
        <div className="w-full flex justify-center py-8 shadow-lg">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="w-[90%] md:w-[70%] rounded-2xl shadow-lg mt-0"
            >
                {allSlide.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center bg-white rounded-2xl overflow-hidden px-6">
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
