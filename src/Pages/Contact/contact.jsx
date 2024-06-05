import React from 'react';
import './contact.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import Contactpage from '../../Components/Contact/Contactpage';
import { PatherSection } from '../../Components/PartherHome/partner';
import { Partner } from '../../Components/Partner/Partner';

function Contact() {
    return (
        <div className='holidays-page'>
            <SecondHeroSection secondHeroTitle='LIÊN HỆ TỚI CHÚNG TÔI' />
            <SearchForm />
            <Contactpage />
            <Partner />

        </div>
    )
}

export default Contact;