import React, { useState, useEffect } from 'react';
import './feedbackII.css';
import { FeedbackII } from '../../api/staticData/tour';


function FeedBackHero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % FeedbackII.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % FeedbackII.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + FeedbackII.length) % FeedbackII.length);
    };

    const selectImage = (index) => {
        setCurrentIndex(index);
    };

    const ItemBig = (props) => {
        return (
            <div className="item w-100 h-100" >
                <div className="slider-banner-image w-100 h-100">
                    <a className="entry-hover zoom big-image d-flex 
                     w-100 h-100
                    " data-fancybox="gallery" rel="img_group" id="big_image">
                        <img className="lazyload1 img-thumbnail   w-100 h-100 " src={props?.image}
                            alt={props?.title} data-id={props.index} />
                    </a>

                </div>
            </div>
        )
    }
    return (
        <div className='feddHer'>
            <h5>Một số hình ảnh khách hàng về chuyến đi </h5>
            <strong>Vi vu cùng S2 travelVietNam</strong>
            <div className='FeedBackHero  w-90 rounded-2 '>
                <div className='container carousel'>
                    <div className="product-image">
                        <div className="slider-for mb-3 big-slide ">
                            <i
                                onClick={() => prevImage()}
                                class="fa-solid fa-angle-left ave"></i>
                            <ItemBig image={FeedbackII[currentIndex]} alt="slider" />
                            <i
                                onClick={() => nextImage()}
                                class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeedBackHero;
