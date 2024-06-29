import React from 'react';
import './Hotel.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import AmsterdamCityBreaksSection from '../../Components/CityBreaksSection/AmsterdamCityBreaksSection';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
import { ResortTour } from '../../api/staticData/tour';

function HotelTour() {
    return (
        <div className='city-breaks-page '>
            <SecondHeroSection secondHeroTitle='KHÁCH SẠN - RESORT PHỔ BIẾN' />
            <AmsterdamCityBreaksSection title={'KHÁCH SẠN - RESORT PHỔ BIẾN'}
                listTour={ResortTour}
            />
            <NeedInspirationSection />
        </div>
    )
}

export default HotelTour;