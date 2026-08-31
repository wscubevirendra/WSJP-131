import React from 'react'
import ProductCard from './ProductCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';



// import required modules
import { Pagination } from 'swiper/modules';

export default function ProductSection({ title, products }) {
    return (
        <div className='w-full p-4'>
            <h2 className='font-bold text-2xl my-4'>{title}</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                navigation={true} 
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
               
                className="mySwiper"
            >


            

            {
                products.map((data, index) => {

                    return (
                        <SwiperSlide>
                            <ProductCard key={index} product={data} />
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>

        </div>
    )
}
