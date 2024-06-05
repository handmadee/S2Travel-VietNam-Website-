import React from 'react';
import './HolidayPlanSection.css';
import Container from 'react-bootstrap/Container';
import GreenBtn from '../GreenBtn/GreenBtn';

function HolidayPlanSection(props) {
  return (
    <div className='holiday-plan-section py-5 ' data-aos="flip-right" data-aos-delay="100">
      <div className='bg-shape position-absolute' />
      <Container className='contai h-100 d-flex flex-column align-items-start justify-content-end'>
        <h3 className='text-start text-light text-capitalize fw-semibold'>{props.itemHolidayPlanTitle}</h3>
        <p className='text-start text-light'>cùng với S2 travelVietNam</p>
        <GreenBtn btnTitle='Vi vu thôi' />
      </ Container>
    </div>
  )
}

export default HolidayPlanSection;