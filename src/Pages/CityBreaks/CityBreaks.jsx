import React from 'react';
import './CityBreaks.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import AmsterdamCityBreaksSection from '../../Components/CityBreaksSection/AmsterdamCityBreaksSection';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
import { Intour } from '../../api/staticData/tour';

function CityBreaks() {
  return (
    <div className='city-breaks-page'>
      <SecondHeroSection secondHeroTitle='TOUR TRONG NƯỚC' />
      <AmsterdamCityBreaksSection title={"TUOR TRONG NƯỚC"}
        listTour={Intour}
      />
      <NeedInspirationSection />
    </div>
  )
}

export default CityBreaks;