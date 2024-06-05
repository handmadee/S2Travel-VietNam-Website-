import React from 'react';
import './HeroSection.css';
import Carousel from 'react-bootstrap/carousel';
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
    return (
        <div className='hero-section'>
            <Carousel>
                <Carousel.Item className='carousel-item1 vh-100'>
                    <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-top'>
                        <div className="row h-100">
                            <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                                <h1 className='text-capitalize text-start'>Tìm kỳ nghỉ hoàn hảo của bạn</h1>
                                <p className='text-start'>S2 Travel là công ty du lịch hàng đầu, cung cấp các tour du lịch trong nước và ngoài nước với nhiều trải nghiệm hấp dẫn và dịch vụ chuyên nghiệp.</p>
                                <GreenBtn btnTitle='Xem các kỳ nghỉ của chúng tôi' btnLink='/holidays' />
                            </div>
                            <div className='col-lg-6 d-none d-lg-block'></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item2 vh-100'>
                    <Carousel.Caption className='h-100'>
                        <div className="row h-100">
                            <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                                <h1 className='text-capitalize text-start'>Bạn cần một kỳ nghỉ ngắn ngày?</h1>
                                <p className='text-start'>Khám phá các gói city break đặc biệt của S2 Travel, giúp bạn thư giãn và khám phá những thành phố đẹp và thú vị trong thời gian ngắn.</p>
                                <GreenBtn btnTitle='Các kỳ nghỉ ngắn ngày của chúng tôi' btnLink='/city-breaks' />
                            </div>
                            <div className='col-lg-6 d-none d-lg-block'></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item3 vh-100'>
                    <Carousel.Caption className='h-100'>
                        <div className="row h-100">
                            <div className='col-lg-6 d-none d-lg-block'></div>
                            <div className='col-lg-6 d-flex flex-column align-items-end justify-content-center'>
                                <h1 className='text-capitalize text-start'>Du lịch mọi nơi</h1>
                                <p className='text-start'>Với S2 Travel, bạn có thể khám phá mọi điểm đến trên thế giới với các tour du lịch chất lượng và dịch vụ tận tâm.</p>
                                <GreenBtn btnTitle='Xem tất cả điểm đến' btnLink='/destinations' />
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSection;
