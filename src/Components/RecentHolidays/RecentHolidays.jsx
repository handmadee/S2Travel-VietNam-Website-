import React from 'react';
import './RecentHolidays.css';
import Container from 'react-bootstrap/Container';
import RecentHolidaysItems from '../../Assets/RecentHolidaysItems';
import RecentHolidayCard from './RecentHolidayCard';

function RecentHolidays() {
  return (
    <div className='recent-holidays my-4 my-sm-5' data-aos="fade-up" data-aos-delay="100">
      <Container>
        <h2 className='fw-semibold'>Các địa điểm ngoài nước hấp dẫn</h2>
        <p className='mb-4 mb-sm-5'>Nơi nhất định phải tới cùng với S2 TravelVietNam</p>
        <div className='row g-4'>
          {
            RecentHolidaysItems.map((item, index) => <RecentHolidayCard index={index} key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemDescription={item.itemDescription} itemNights={item.itemNights} itemPrice={item.itemPrice} />)
          }
        </div>
      </Container>
    </div>
  )
}

export default RecentHolidays;