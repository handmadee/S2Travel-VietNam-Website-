import React from 'react';
import './yacht.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import AmsterdamCityBreaksSection from '../../Components/CityBreaksSection/AmsterdamCityBreaksSection';
import { yacht } from '../../api/staticData/tour';
import Trip from '../../Components/Trip/Trip';



function Yacht() {
    return (
        <div className='destinations-page'>
            <Trip secondHeroTitle='Tour Du Thuyền' />
            <AmsterdamCityBreaksSection title={'Tour Du Thuyền'} listTour={yacht} />
        </div>
    )
}

export default Yacht;