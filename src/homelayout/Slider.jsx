import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../assets/Slide-1.jpg';
import slide2 from '../assets/Slide-2.jpg';
import slide3 from '../assets/Slide-3.jpg';
import slide4 from '../assets/Slide-4.jpg';
import slide5 from '../assets/Slide-5.jpg';

const allSlide = [slide1, slide2, slide3, slide4, slide5,];

const Slider = () => {
    const handleType = () => {
    };

    const handleDone = () => {
    };

    return (
        <div className="w-full flex flex-col justify-center items-center py-8 shadow-lg">
            {/* Typewriter Section */}
            <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-amber-900">
                     Manage smarter. Live better.{' '}
                    <span className="text-red-500 font-bold">
                        <Typewriter
                            words={[
                                'One Hub for All Your Bills',
                                'Electricity, Water, Gas — All in One Place',
                                'Manage, Pay, and Relax',
                                'Welcome to My Utility Hub!'
                            ]}
                            loop={5}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </div>

            {/* Swiper Section */}
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="w-[90%] md:w-[70%] rounded-2xl shadow-lg"
            >
                {allSlide.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center bg-white rounded-2xl overflow-hidden">
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
