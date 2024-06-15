import React from 'react';
import './Destinations.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import AmsterdamCityBreaksSection from '../../Components/CityBreaksSection/AmsterdamCityBreaksSection';
import { FeaturedTour } from '../../api/staticData/tour';


function Destinations() {
  return (
    <div className='destinations-page'>
      <SecondHeroSection secondHeroTitle='Tour Ngoài Nước' />
      <AmsterdamCityBreaksSection title={'Tour Ngoài Nước'} listTour={FeaturedTour} />
    </div>
  )
}

export default Destinations;