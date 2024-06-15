import React, { useState, useEffect } from 'react';
import './commentSection.css';

const comments = [
    {
        name: "Lê Thị Phượng",
        image: require('./../../Assets/Images/user1.jpeg'),
        text: "Cám ơn Du lịch S2Travel VietNam đã giúp cho chúng tôi có chuyến đi Hà Nội - Ninh Bình- Hạ Long- Sapa thật vui , HDV nhiệt tình, năng động, chăm sóc tốt cho các thành viên, Khách Sạn đáp ứng yêu cầu. Ăn uống được. Hẹn gặp lại.",
        job: "Khách du lịch"
    },
    {
        name: "Lê Tuyết Sương",
        image: require('./../../Assets/Images/user2.jpeg'),
        text: "Cảm ơn S2Travel VietNam Tourist đã cùng gia đình em có 1 chuyến đi Đà Lạt trên cả tuyệt vời. Dịch vụ ăn uống, nghỉ dưỡng 5 sao rất tốt. Gia đình e rất vui. Hẹn gặp S2Travel VietNam dịp gần nhất",
        job: "Khách du lịch"
    },
    {
        name: "Trịnh Chi",
        image: require('./../../Assets/Images/user3.jpeg'),
        text: "Cảm ơn công ty đã tổ chức 1 chuyến đi Đà Nẵng cho tôi và gia đình với nhiều kỷ niệm. Dịch vụ rất tốt, ăn, ngủ, xe...chúng tôi rất hài lòng. Chúc công ty ngày càng phát triển!",
        job: "Khách du lịch"
    },
    {
        name: "Khánh Linh",
        image: require('./../../Assets/Images/user4.jpeg'),
        text: "Cty rất chất lượng dịch vụ tốt chuyên môn lắm hướng dẫn viên chu đáo mọi thứ điều hài lòng địa điểm rất đẹp ok",
        job: "Khách du lịch"
    },
    {
        name: "Tuấn Anh",
        image: require('./../../Assets/Images/user5.jpeg'),
        text: "Bạn HDV cực kì dễ thương, bao nhiệt tình. Chất lượng dịch vụ tour hài lòng, nhiều điểm đẹp, tha hồ sống ảo. Sẽ ủng hộ S2Travel VietNam lần sau nhé",
        job: "Khách du lịch"
    }
];

const Comment = ({ name, image, text, job }) => {
    return (
        <div className="item-wrap p-1 mb-3">
            <div className="item mx-auto p-2 p-lg-3 p-xl-4">
                <div className="d-flex justify-content-start">
                    <div className="img-box-wrap">
                        <span className="img-box d-flex mx-auto"><img className="img img-cover" src={image} alt={name} /></span>
                    </div>
                    <div className="info pl-3">
                        <div className="feed_content mb-3">{text}</div>
                        <div className="feed_brief mb-1">{name}</div>
                        <div className="feed_job mb-0">{job}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CommentSection() {
    const [visibleComments, setVisibleComments] = useState([0, 1]); // Start with the first two comments

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleComments(prev => {
                const nextStart = (prev[0] + 2) % comments.length;
                const nextEnd = (prev[1] + 2) % comments.length;
                return [nextStart, nextEnd];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="comment py-4 py-lg-5">
            <div className="header-box mb-4 mb-lg-5 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="title-box">
                    <p className="mb-2 title utgod text-uppercase d-inline-block">Cảm nhận từ khách hàng</p>
                    <p className="mb-0 brief">của chúng tôi</p>
                </div>
            </div>
            <div className="container pb-lg-4" data-aos="flip-left" data-aos-delay="100">
                <div className="wrap py-4 py-lg-5">
                    <div className="owl-carousel owl-theme owl-customer">
                        {
                            visibleComments.map(index => (
                                <Comment key={index} image={comments[index].image} job={comments[index].job} name={comments[index].name} text={comments[index].text} />
                            ))
                        }
                    </div>

                    <div className='owl-dot'>
                        {
                            comments.map((comment, index) => (
                                index % 2 === 0 && <span key={index} className="owl-dot-item">
                                    <span></span>
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
