import React from 'react';
import Container from 'react-bootstrap/Container';
import './partnerStyle.css';
import brand1 from '../../Assets/Images/brand1.png';
import brand2 from '../../Assets/Images/brand2.png'
import brand3 from '../../Assets/Images/brand3.png'
import brand5 from '../../Assets/Images/brand5.png'
import brand6 from '../../Assets/Images/brand6.png'
import brand7 from '../../Assets/Images/brand7.png'
import brand8 from '../../Assets/Images/brand8.png'
import brand10 from '../../Assets/Images/brand10.png'
import brand11 from '../../Assets/Images/brand11.png'
import brand12 from '../../Assets/Images/brand12.png'
import brand13 from '../../Assets/Images/brand13.png'
import brand14 from '../../Assets/Images/brand14.png'



const partners = [
    { id: 1, src: brand1, alt: "TRƯỜNG THPT YERSIN ĐÀ LẠT", delay: 100 },
    { id: 2, src: brand2, alt: "LEADPLUS", delay: 200 },
    { id: 3, src: brand3, alt: "Phòng LD TB XH", delay: 300 },
    { id: 4, src: brand5, alt: "VIETINBANK CỬA LÒ", delay: 400 },
    { id: 5, src: brand6, alt: "TT DV VIỆC LÀM LÂM ĐỒNG", delay: 500 },
    { id: 6, src: brand7, alt: "ĐỊA ỐC XANH TOÀN CẦU", delay: 600 },
    { id: 7, src: brand8, alt: "BAO HIEM QUAN DOI MIC", delay: 100 },
    { id: 8, src: brand13, alt: "BAO HIEM HANG KHONG VNI", delay: 200 },
    { id: 9, src: brand10, alt: "TÂM LỘC PHÁT", delay: 300 },
    { id: 10, src: brand11, alt: "BNI LADO", delay: 400 },
    { id: 11, src: brand12, alt: "VIB", delay: 500 },
    { id: 12, src: brand14, alt: "MSB", delay: 600 },
];

export function PatherSection() {
    return (
        <section className="partner py-4 py-lg-5">
            <div className="header-box mb-4 mb-lg-5 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="title-box">
                    <p className="mb-2 title utgod text-uppercase d-inline-block">Khách hàng thân thiết</p>
                    <p className="mb-0 brief">của S2travel VietNam</p>
                </div>
            </div>
            <div className="bg1">
                <Container className="pd">
                    <div className="wrap">
                        <div className="partner-list d-flex flex-wrap justify-content-center">
                            {partners.map(partner => (
                                <div key={partner.id} className="item box-f" data-aos="fade-up" data-aos-delay={partner.delay}>
                                    <a className="mx-auto d-flex" href="#">
                                        <img className="img-contain m-auto" src={partner.src} alt={partner.alt} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
