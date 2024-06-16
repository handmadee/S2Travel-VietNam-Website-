import React, { useEffect } from 'react';
import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import RecentHolidays from '../../Components/RecentHolidays/RecentHolidays';
import { ContactSection } from '../../Components/ContactSection/contactSection';
import { AboutSection } from '../../Components/About/about';
import { PatherSection } from '../../Components/PartherHome/partner';
import { CommentSection } from '../../Components/CommentSection/commentSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HotTour from '../../Components/Hottour/HotTour';
import TripS from '../../Components/Trips/Trips';

function Home() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-out',
            delay: 100,
            once: true,
            mirror: true,
        });
    }, []);


    return (
        <div className='home-page'>
            <HeroSection />
            <SearchForm />
            <HotTour />

            {/* Yacht */}
            <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='S2Travel VietNam' />
            </div>
            {/* Yarn */}
            <TripS />



            {/* Slide */}
            <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='S2Travel VietNam' />
            </div>
            <LastHolidaysSection />

            <HolidayPlanSection itemHolidayPlanTitle='Du lịch nước ngoài' />
            <RecentHolidays />
            <ContactSection />
            <AboutSection />
            <PatherSection />
            <CommentSection />
        </div>
    )
}

export default Home;