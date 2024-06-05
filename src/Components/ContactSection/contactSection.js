import React from 'react';
import './contactStyle.css';
import Container from 'react-bootstrap/Container';
const hotline = require('../../Assets/Images/hotline.png');
const custom = require('../../Assets/Images/custom.png');

export function ContactSection() {
    return (
        <section className='contact-section py-5 pb-10' data-aos="fade-up" data-aos-delay="200">
            <Container className='text-center containerContact  '>
                <div className='listStar'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className='Circle-play my-3 '>
                    <i className="fa-solid fa-circle-play fa-2x"></i>
                </div>
                <p className="mb-2 brief text-uppercase mx-auto title">
                    Bạn muốn tìm tour du lịch chất lượng, đẳng cấp với chi phí hợp lý?
                </p>
                <p className="mb-3 mb-lg-5 cont">
                    Hãy đến với S2 Travel - Đơn vị tổ chức tour du lịch uy tín, chất lượng hàng đầu Việt Nam
                </p>
            </Container>
            <Container className="info-box-wrap mb-4 mb-lg-0">
                <div className="row listCard">
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <div className="info-box p-3 border rounded">
                            <p className="mb-2">Kênh thông tin liên hệ <strong>Chăm sóc khách hàng miền nam</strong> nhanh nhất</p>
                            <div className="hotline d-flex align-items-center">
                                <img src={hotline} alt="support-contact-img" className="me-2" />
                                <div className="in">
                                    <p className="tit mb-1">Hotline 8h00 - 21h00</p>
                                    <a href="tel:0785503329">
                                        0785503329
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <div className="info-box p-3 border rounded">
                            <p className="mb-2">Kênh thông tin liên hệ <strong>Chăm Sóc Khách Hàng Miền Bắc</strong> nhanh nhất</p>
                            <div className="hotline d-flex align-items-center">
                                <img src={custom} alt="support-contact-hotline-2" className="me-2" />
                                <div className="in">
                                    <p className="tit mb-1">Hotline 8h00 - 17h30</p>
                                    <a href="tel:0973 055 948">0901210110</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="info-box p-3 border rounded">
                            <p className="mb-2">Theo dõi chúng tôi qua <strong>Các kênh kết nối mạng xã hội</strong></p>
                            <div className="d-flex justify-content-center align-items-center">
                                <a className="facebook_icon rounded me-2" href="https://www.facebook.com/ComboOanhNguyen" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
                                <a className="facebook_icon rounded me-2" href="https://www.facebook.com/ComboOanhNguyen" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-messenger fa-2x"></i></a>
                                <a className="youtube rounded me-2" href="https://www.facebook.com/ComboOanhNguyen" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square fa-2x"></i></a>
                                <a className="twitter_url rounded"
                                    href="https://www.facebook.com/ComboOanhNguyen"
                                    target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
