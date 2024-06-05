import React from 'react';
import './Intruduce.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import ContentIntroduce from '../../Components/Introduce/ContentIntroduce';
import SearchForm from '../../Components/SearchForm/SearchForm';

function Introduce() {
    return (
        <div className='holidays-page'>
            <SecondHeroSection secondHeroTitle='GIỚI THIỆU VỀ CHÚNG TÔI' />
            <SearchForm />
            <ContentIntroduce />
        </div>
    )
}

export default Introduce;