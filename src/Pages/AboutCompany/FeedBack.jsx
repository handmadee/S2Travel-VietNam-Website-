import React from 'react';
import './AboutCompany.css';
import './feedBack.css'
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import { Partner } from '../../Components/Partner/Partner';

function FeedBack() {

    const data = [
        {
            img: require('./../../Assets/Images/us1.jpeg'),
            name: "Tuyết Hương",
            trip: "La Casta Regal",
            content: "Cô rất hài lòng với chuyến đi này. Cám ơn s2travelvietnam.vercel.app đã đặt giúp tour, giúp cô có chuyến đi vui vẻ và đáng nhớ."
        },
        {
            img: require('./../../Assets/Images/us1.jpeg'),
            name: "Tuyết Hương",
            trip: "La Casta Regal",
            content: "Cô rất hài lòng với chuyến đi này. Cám ơn s2travelvietnam.vercel.app đã đặt giúp tour, giúp cô có chuyến đi vui vẻ và đáng nhớ."
        },
        {
            img: require('./../../Assets/Images/us1.jpeg'),
            name: "Tuyết Hương",
            trip: "La Casta Regal",
            content: "Cô rất hài lòng với chuyến đi này. Cám ơn s2travelvietnam.vercel.app đã đặt giúp tour, giúp cô có chuyến đi vui vẻ và đáng nhớ."
        },
        {
            img: require('./../../Assets/Images/us1.jpeg'),
            name: "Tuyết Hương",
            trip: "La Casta Regal",
            content: "Cô rất hài lòng với chuyến đi này. Cám ơn s2travelvietnam.vercel.app đã đặt giúp tour, giúp cô có chuyến đi vui vẻ và đáng nhớ."
        },
        {
            img: require('./../../Assets/Images/us1.jpeg'),
            name: "Tuyết Hương",
            trip: "La Casta Regal",
            content: "Cô rất hài lòng với chuyến đi này. Cám ơn s2travelvietnam.vercel.app đã đặt giúp tour, giúp cô có chuyến đi vui vẻ và đáng nhớ."
        },

    ]
    const ItemFeedBack = ({
        img, name, trip, content
    }) => {
        return (
            <div className="s29_i clear-fix">
                <div className="s29_a clear-fix">
                    <div className="s29_ai">
                        <img src={img} alt="Tuyết Bùi" />
                    </div>
                    <div className="s29_r">
                        <label className="rv1">
                            <span style={{ width: '100%' }}></span>
                        </label>
                        <div className="s29_fc hidden-lg hidden-md hidden-sm">
                            <strong>{name}</strong>
                            <span> Du thuyền {trip}</span>
                        </div>
                    </div>
                </div>
                <div className="s29_b">
                    <h2 className="s29_n">
                        <a>Đánh giá từ {name}- {trip}</a>
                    </h2>
                    <div className="s29_o">{content}.</div>
                    <div className="s29_f hidden-xs">
                        <div className="s29_fc">
                            <strong>{name}</strong>
                            <span>Du thuyền {trip}</span>
                        </div>
                        <a className="btn btn-1 s29_u">
                            Xem chi tiết <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='holidays-page'>
            <SecondHeroSection secondHeroTitle='LIÊN HỆ TỚI CHÚNG TÔI' />
            {/* <SearchForm /> */}
            {/*  */}
            <div className="s s29">
                <div className="container">
                    <h1 className="s29_t">Cảm nhận khách hàng</h1>
                    <div className="row">
                        <div className="col-md-8 col-xs-12" id="resultReviews">
                            <div className="s29_m">
                                {/* <div className="s29_i clear-fix">
                                    <div className="s29_a clear-fix">
                                        <div className="s29_ai">
                                            <img src={require('./../../Assets/Images/us1.jpeg')} alt="Tuyết Bùi" />
                                        </div>
                                        <div className="s29_r">
                                            <label className="rv1">
                                                <span style={{ width: '100%' }}></span>
                                            </label>
                                            <div className="s29_fc hidden-lg hidden-md hidden-sm">
                                                <strong>Tuyết Bùi</strong>
                                                <span>Du thuyền La Casta Regal</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="s29_b">
                                        <h2 className="s29_n">
                                            <a href="https://www.s2travelvietnam.vercel.app/danh-gia-khach-hang/danh-gia-tu-co-tuyet-bui-du-thuyen-la-casta-regal">Đánh giá từ cô Tuyết Bùi - Du thuyền La Casta Regal</a>
                                        </h2>
                                        <div className="s29_o">Cô rất hài lòng với chuyến đi này. Cám ơn s2travelvietnam.vercel.app đã đặt giúp tour, giúp cô có chuyến đi vui vẻ và đáng nhớ.</div>
                                        <div className="s29_f hidden-xs">
                                            <div className="s29_fc">
                                                <strong>Tuyết Bùi</strong>
                                                <span>Du thuyền La Casta Regal</span>
                                            </div>
                                            <a href="https://www.s2travelvietnam.vercel.app/danh-gia-khach-hang/danh-gia-tu-co-tuyet-bui-du-thuyen-la-casta-regal" className="btn btn-1 s29_u">
                                                Xem chi tiết <i className="fa fa-angle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                {
                                    data.map((item, index) => {
                                        return (
                                            <ItemFeedBack name={item?.name} content={item?.content}
                                                img={item?.img} trip={item?.trip} key={index}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <input type="hidden" id="page_id" value="1" />
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="wg">
                                <div className="wg_i wg_i3">
                                    <div className="wg_h">Gọi ngay để được tư vấn</div>
                                    <div className="wg_b">
                                        <div className="s19_wp clear-fix">
                                            <div className="s19_wa">
                                                <img src={require('./../../Assets/Images/us2.png')} alt="" />
                                            </div>
                                            <div className="s19_wl">
                                                <div className="s19_wlm">
                                                    <span>
                                                        <a href="tel:0971691414">0971 691 414</a>
                                                        (Hà Nội)
                                                    </span>
                                                    <span>
                                                        <a href="tel:0785503329">0785 503 329</a>
                                                        (T.p Hạ Long)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="s19_wf">
                                            <div>Hoặc gửi yêu cầu tư vấn</div>
                                            <div className="s19_wfm">
                                                <input type="text" className="form-control" name="phone" placeholder="Số điện thoại của bạn" required />
                                                <input type="hidden" name="types" value="Yêu cầu tư vấn" />
                                                <input type="hidden" name="path" value="/danh-gia-khach-hang" />
                                                <div className="btn btn-1">Gửi</div>
                                            </div>
                                            <div className="s19_wfn">Chúng tôi sẽ liên hệ với bạn.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <Partner />
        </div>
    )
}

export default FeedBack;