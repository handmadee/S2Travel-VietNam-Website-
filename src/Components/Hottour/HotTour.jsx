import React, { useCallback } from 'react';
import './HotTour.css';
import Container from 'react-bootstrap/Container';
import { Outtour } from '../../api/staticData/tour';
import RecentHolidayCard from '../RecentHolidays/RecentHolidayCard';
import { useNavigate } from 'react-router-dom';
function HotTour() {
    let navigate = useNavigate();
    const ProductItem = (props) => {
        const handleRedirect = () => {
            return navigate('/about-tour', {
                state: {
                    data: props?.item
                }
            })
        }

        const price = props?.price.toString();
        const formattedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return (
            <div className="itemProduct col-12 mb-3 mb-lg-4 item-wrap " data-aos="fade-up" data-aos-delay={props?.aos}>
                <div className="item " >
                    <div className="product-box d-flex flex-wrap">
                        <a className="img-box d-flex">
                            <img className="img-cover" src={
                                props?.image[0]
                            } alt={props?.title} title={props?.title} />
                        </a>
                        <div className="info-box p-3 d-lg-flex align-items-lg-center">
                            <div className="wrap-box">
                                <h4 className="product-name mb-2 mb-lg-3 "><a className="" href="#">{props?.title}</a></h4>
                                <p className="brief mb-2 mb-lg-3">
                                    {
                                        props?.description
                                    }
                                </p>
                                <div className="info d-inline-block">
                                    <span className=""><i className="far fa-clock"></i>{
                                        props?.end
                                    }</span>
                                    <span className=""><i className="fas fa-suitcase"></i>{
                                        props?.time
                                    }</span>
                                    <span className=""><i className="fas fa-map-marker-alt"></i> KH: Theo yêu cầu </span>
                                </div>
                            </div>
                        </div>
                        <div className="book p-3 text-center d-lg-flex align-items-lg-center justify-content-lg-center">
                            <div className="wrap-box">
                                <p className="big-price mb-0">{formattedPrice}</p>
                                <p className="price-dvt mb-2"> / 01 khách hàng </p>
                                <a className="button d-inline-block mx-auto px-3 px-lg-4" onClick={() => handleRedirect()} >Đặt Tour ngay</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const ListProduct = () => {
        const Tour = Outtour && Outtour.length > 4 ? Outtour.slice(0, 4) : Outtour
        return (
            Tour.map((item, index) => {
                const delay = ((index % 8) + 1) * 100;
                return (
                    <ProductItem image={item.image} title={item.title} time={item.time} start={item.start} end={item.end} price={item.price} description={item.description} item={item} aos={delay} />
                )
            })
        )
    }
    const handleViewAll = useCallback(() => {
        return navigate('/hotTour')
    }, [])

    return (
        <div className='home-product recent-holidays my-4 my-sm-5 pt-5' data-aos="fade-up" data-aos-delay="100">
            <Container>
                <h2 className='fw-semibold'>Các Tour Nổi Bật</h2>
                <p className='mb-4 mb-sm-5'>S2 Travel các tour có số lượng đặt lớn</p>
                <div className='row g-4'>
                    {/* Content  */}
                    <div className="wrap list-product-home">
                        <ListProduct />
                        <button className="btn_vip btnViewAll text-center my-3 my-lg-4" data-aos="fade-up" data-aos-delay="100"><a className="more-all" href="/hotTour">Xem tất cả</a> </button>

                    </div>

                    {/* The end content */}
                </div>
            </Container>
        </div>
    )
}

export default HotTour;

