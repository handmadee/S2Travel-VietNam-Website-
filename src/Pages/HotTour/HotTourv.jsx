import React from 'react';
import './HotTourv.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import AmsterdamCityBreaksSection from '../../Components/CityBreaksSection/AmsterdamCityBreaksSection';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
import { Outtour } from '../../api/staticData/tour';

function HotTourv() {
    return (
        <div className='city-breaks-page'>
            <SecondHeroSection secondHeroTitle='TOUR PHỔ BIẾN' />
            <AmsterdamCityBreaksSection title={'TOUR PHỔ BIẾN'}
                listTour={Outtour}
            />
            <NeedInspirationSection />
        </div>
    )
}

export default HotTourv;