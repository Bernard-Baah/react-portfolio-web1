import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// DO NOT USE SAME IMAGES AND REVIEW

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi sunt illo dolor autem maxime voluptate tempora, voluptatem corrupti ducimus quas modi rerum, impedit obcaecati dolorum neque debitis doloremque vero!'
    },
    {
        avatar: AVTR2,
        name: 'Barack Obama',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi sunt illo dolor autem maxime voluptate tempora, voluptatem corrupti ducimus quas modi rerum, impedit obcaecati dolorum neque debitis doloremque vero!'
    },
    {
        avatar: AVTR3,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi sunt illo dolor autem maxime voluptate tempora, voluptatem corrupti ducimus quas modi rerum, impedit obcaecati dolorum neque debitis doloremque vero!'
    },
    {
        avatar: AVTR4,
        name: 'Asake Banks',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi sunt illo dolor autem maxime voluptate tempora, voluptatem corrupti ducimus quas modi rerum, impedit obcaecati dolorum neque debitis doloremque vero!'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials