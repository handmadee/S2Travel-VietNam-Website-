import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destinations from './Pages/Destinations/Destinations';
import Holidays from './Pages/Holidays/Holidays';
import CityBreaks from './Pages/CityBreaks/CityBreaks';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import HotlineWidget from './Components/witdgetHotline/hotlineWidget';
import WidgetMobile from './Components/WidgetMobile/widgetMobile';
import Contact from './Pages/Contact/contact';
import AboutTour from './Pages/AboutTour/aboutTour';
import HotTourv from './Pages/HotTour/HotTourv';
import AboutCompany from './Pages/AboutCompany/AboutCompany';
import FeedBack from './Pages/AboutCompany/FeedBack';
import AboutCompanyI from './Pages/AboutCompany/AccountControl';
import Yacht from './Pages/Yacht/yacht';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Thời gian animation (ms)
      easing: 'ease-in-out', // Hiệu ứng easing
      once: true, // Chạy animation chỉ một lần
    });
  }, []);
  const ref = useRef(null);

  useEffect(() => {
    const header = document.querySelector('.navbar');
    const handleScroll = () => {
      const position = window.pageYOffset;
      position > 100 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="App"
      ref={ref}
    >
      {/* <HeaderPhone /> */}
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduce' element={< AboutCompany />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/danh-gia-khach-hang' element={<FeedBack />} />
        <Route path='/trang-chinh-sach-quy-dinh' element={<AboutCompanyI />} />
        <Route path='/city-breaks' element={<CityBreaks />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/hotTour' element={<HotTourv />} />
        <Route path='/about-tour' element={<AboutTour />} />
        <Route path='/yacht' element={<Yacht />} />



      </Routes>
      <Footer />
      <HotlineWidget />
      <WidgetMobile />
    </div>
  );
}

export default App;
