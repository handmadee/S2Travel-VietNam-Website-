import React, { useEffect } from 'react';
import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import FavouritesSection from '../../Components/FavouritesSection/FavouritesSection';
import RecentHolidays from '../../Components/RecentHolidays/RecentHolidays';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
import { ContactSection } from '../../Components/ContactSection/contactSection';
import { AboutSection } from '../../Components/About/about';
import { PatherSection } from '../../Components/PartherHome/partner';
import { CommentSection } from '../../Components/CommentSection/commentSection';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HotlineWidget from '../../Components/witdgetHotline/hotlineWidget';

function Home() {
    useEffect(() => {
        AOS.init({
            offset: 200, // Khoảng cách tính bằng pixel từ phần tử tới viewport để bắt đầu hiệu ứng
            duration: 1000, // Thời gian hiệu ứng
            easing: 'ease-in-out', // Hiệu ứng easing
            delay: 100, // Thời gian trễ (ms)
            once: true, // Chạy animation chỉ một lần
            mirror: true, // Có lặp lại animation khi cuộn trang không
        });
    }, []);


    return (
        <div className='home-page'>

            <HeroSection />
            <SearchForm />
            <LastHolidaysSection />
            <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='S2 travel VietNam' />
            </div>
            <HolidayPlanSection itemHolidayPlanTitle='Du lịch nước ngoài' />
            {/* <FavouritesSection /> */}
            <RecentHolidays />
            <ContactSection />
            <AboutSection />
            <PatherSection />
            <CommentSection />
            {/* <NeedInspirationSection /> */}
            {/* Mobile Widgey */}

        </div>
    )
}

export default Home;