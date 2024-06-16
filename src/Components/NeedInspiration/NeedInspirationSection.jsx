import React from 'react';
import './NeedInspirationSection.css';
import Container from 'react-bootstrap/Container';

function NeedInspirationSection() {
    return (
        <div className='need-inspiration-section py-5 position-relative'>
            <div className='bg-shape position-absolute'></div>
            <Container>
                <div className="row">
                    <div className='col-md-4 z-2'>
                        <h2 className='text-start text-light text-capitalize fw-semibold'>Công ty S2 Travel Việt Nam</h2>
                        <p className='text-start text-light'>
                            Trải nghiệm hành trình hoàn hảo với S2 Travel Việt Nam - chuyên cung cấp các tour du lịch và du thuyền sang trọng, đem lại cho bạn những khoảnh khắc đáng nhớ và đầy cảm hứng.
                        </p>
                        <div className='d-flex'>
                            <h5 className='text-light text-capitalize fw-semibold text-nowrap'>Hotline:</h5>
                            <a href="tel:0971691414" className='text-light mx-2 text-decoration-none h5 fw-semibold'>0971.691.414</a>
                            <a href="tel:0785503329" className='text-light mx-2 text-decoration-none h5 fw-semibold'>0785.503.329</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default NeedInspirationSection;