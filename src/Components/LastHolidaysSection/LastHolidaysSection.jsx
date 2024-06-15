import React from 'react';
import './LastHolidaysSection.css';
import Container from 'react-bootstrap/Container';
import LastHolidaysItems from '../../Assets/LastHolidaysItems';
import LastHolidayCard from './LastHolidayCard';
import { Intour } from '../../api/staticData/tour';

function LastHolidaysSection() {
  const [tour, setTour] = React.useState(Intour || []);
  return (
    <div className='last-holidays-section my-4 my-sm-5 ' data-aos="fade-up" data-aos-delay="100">
      <Container>
        <h2 className='text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4'>Điểm đến trong nước hấp dẫn</h2>
        <div className="row g-4 " >
          {
            tour.slice(0, 6).map((item, index) => <LastHolidayCard key={index} itemImage={item.image[0]} itemTitle={item.title} itemDescription={item.description} item={item} />)
          }
        </div>
        <button className="btn_vip btnViewAll text-center my-3 my-lg-4" data-aos="fade-up" data-aos-delay="100"><a className="more-all" href="/city-breaks">Xem tất cả</a> </button>
      </Container>
    </div>
  )
}

export default LastHolidaysSection;