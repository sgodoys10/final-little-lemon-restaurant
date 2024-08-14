import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const TestimonialCards = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        scrollbar={{clickable: true}}
        style={{ padding: '20px' }}
    >
        <SwiperSlide>
            <div style={{padding: '20px', background: '#f1f1f1'}}>
                <h3>Card 1</h3>
                <p>Content for card</p>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default TestimonialCards
