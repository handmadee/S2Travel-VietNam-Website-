import React from 'react';
import './RecentHolidays.css';
import Container from 'react-bootstrap/Container';
import RecentHolidayCard from './RecentHolidayCard';
import { Outtour, FeaturedTour } from '../../api/staticData/tour';


function RecentHolidays() {
  return (
    <div className='recent-holidays my-4 my-sm-5' data-aos="fade-up" data-aos-delay="100">
      <Container>
        <h2 className='fw-semibold'>Các địa điểm ngoài nước hấp dẫn</h2>
        <p className='mb-4 mb-sm-5'>Nơi nhất định phải tới cùng với S2 TravelVietNam</p>
        <div className='row g-4'>
          {
            FeaturedTour.splice(0, 4).map((item, index) => <RecentHolidayCard index={index} key={item.id} itemImage={item.image} itemTitle={item.title} itemDescription={item?.idTour} itemNights={item.time} itemPrice={item.price} item={item} />)
          }

        </div>
        <button className="btn_vip btnViewAll text-center my-3 my-lg-4" data-aos="fade-up" data-aos-delay="100"><a className="more-all" href="/destinations">Xem tất cả</a> </button>

      </Container>
    </div>
  )
}

export default RecentHolidays;

