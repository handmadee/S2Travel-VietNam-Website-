import React, { useEffect, useState } from 'react';
import './aboutTour.css';
import CustomCarousel from '../../Components/Slider/Slide';
import { useLocation } from 'react-router-dom';

function AboutTour() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const location = useLocation()
    const data = location.state.data || {}
    console.log(data)
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.image.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.image.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data?.image.length) % data?.image.length);
    };

    const selectImage = (index) => {
        setCurrentIndex(index);
    };






    const ItemBig = (props) => {
        return (
            <div className="item" >
                <div className="slider-banner-image">
                    <a className="entry-hover zoom big-image d-flex  " data-fancybox="gallery" rel="img_group" id="big_image">
                        <img className="lazyload1 img-cover" src={props?.image}
                            alt={props?.title} data-id={props.index} />
                    </a>

                </div>
            </div>
        )
    }

    const ItemSmall = (props) => {

        return (
            <div className="thumbnail-image" onClick={() => selectImage(props?.index)}>
                <div className="thumb-img itemthumb current" data-id="0">
                    <span className="d-flex img-box"><img className="lazyload1 img-cover" src={
                        props?.image
                    } alt="KHÁM PHÁ DUBAI – ABU DHABI 0" data-id={props?.index} /></span>
                </div>
            </div>
        )
    }

    const InforTour = (props) => {
        return (
            <div className="col-12 col-lg-4 slidebar product-brief mb-3 mb-lg-0">
                <div className="boxDesign1">
                    <div className="name">{props?.title}</div>
                    <div className="attr">
                        <ul>
                            <li>
                                <div className="at">Mã tour</div>
                                <div className="as">{props?.idTour}</div>
                            </li>
                            <li>
                                <div className="at">Thời gian:</div>
                                <div className="as">{props?.time}</div>
                            </li>
                            <li>
                                <div className="at">Khởi hành:</div>
                                <div className="as"> {
                                    props?.start && props?.start.length > 0
                                        ? props.start.map((item, index) => (
                                            <p className="text-decoration-underline bg-info-subtle rounded-2" key={index}>{item}</p>
                                        ))
                                        : 'Theo yêu cầu'
                                }</div>
                            </li>
                            <li>
                                <div className="at">Điểm đến:</div>
                                <div className="as">{props?.destination}</div>
                            </li>
                            <li>
                                <div className="at">Kết thúc:</div>
                                <div className="as">{props?.end}</div>
                            </li>
                            <li>
                                <div className="at">Chỗ trống:</div>
                                <div className="as">
                                    {props?.status ? 'Còn chỗ' : 'Hết chỗ'}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="boxPrice">
                    <div className="price">
                        <div className="txt">Giá từ:</div>
                        <div className="pr" id="giactt">{
                            props?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' đ'
                        }</div>

                    </div>
                    <div className="attr">
                        <div className="first-show-text">
                            <p><strong>Điểm Nổi Bật Chương Trình:</strong></p>
                            <p
                                className='text-start'
                            >{
                                    props?.description
                                }</p>
                        </div>
                    </div>
                    <div className="bot">


                        <div className="form-home ">
                            <div className="formbox wrap mx-auto" >
                                <div className="form-body">
                                    <form id="subscribe-form" className="row pd8" action="/site/subscribe" method="post">
                                        <input type="hidden" name="_csrf-frontend" value="Pzh0908uxYQgTPLQKPUyc_2YuzRPFqWNuypUt3BvIUdzfCOcOX33zBkEtulmj0oZzKDtWz9J1r6DRiH1LzdZIQ==" />                                                <div className="col-12 " >
                                            <div className="form-group field-subscribeform-name required">

                                                <input type="text" id="subscribeform-name" className="form-control" name="SubscribeForm[name]" placeholder="Họ và tên" aria-required="true" />

                                                <p className="help-block help-block-error"></p>
                                            </div>
                                        </div>
                                        <div className="col-12  ">
                                            <div className="form-group field-subscribeform-phone required">

                                                <input type="text" id="subscribeform-phone" className="form-control" name="SubscribeForm[phone]" placeholder="Điện thoại" aria-required="true" />

                                                <p className="help-block help-block-error"></p>
                                            </div>                                                </div>
                                        <div className="col-12  ">
                                            <div className="form-group field-subscribeform-email required">

                                                <input type="text" id="subscribeform-email" className="form-control" name="SubscribeForm[email]" placeholder="Email" aria-required="true" />

                                                <p className="help-block help-block-error"></p>
                                            </div>                                                </div>
                                        <div className="col-12 ">
                                            <div className="form-group field-subscribeform-address required">

                                                <input type="text" id="subscribeform-address" className="form-control" name="SubscribeForm[address]" placeholder="Địa chỉ" aria-required="true" />

                                                <p className="help-block help-block-error"></p>
                                            </div>                                                </div>
                                        <div className="col-12 ">
                                            <div className="form-group field-subscribeform-number required">

                                                <input type="text" id="subscribeform-number" className="form-control" name="SubscribeForm[number]" placeholder="Số chỗ" aria-required="true" />

                                                <p className="help-block help-block-error"></p>
                                            </div>                                                </div>
                                        <div className="col-12 ">
                                            <div className="form-group field-subscribeform-body">

                                                <input type="text" id="subscribeform-body" className="form-control" name="SubscribeForm[body]" placeholder="Nội dung tin nhắn" />

                                                <p className="help-block help-block-error"></p>
                                            </div>
                                        </div>
                                        <div className="form-footer text-center col-12 ">
                                            <button type="button" className="btn btn-submit btn-submit-tour d-block mx-auto px-2 px-lg-3 ">Đăng ký ngay</button>                                                </div>
                                        <div className="d-none">
                                            <div className="form-group field-subscribeform-type required">

                                                <input type="hidden" id="subscribeform-type" className="form-control" name="SubscribeForm[type]" value="enquiry" />

                                                <p className="help-block help-block-error"></p>
                                            </div>                                                </div>
                                        <div className="d-none">
                                            <div className="form-group field-subscribeform-productid required">

                                                <input type="hidden" id="subscribeform-productid" className="form-control" name="SubscribeForm[productid]" value="69" />

                                                <p className="help-block help-block-error"></p>
                                            </div>                                                </div>
                                        <input type="hidden" id="product-id" name="id" value="69" />
                                    </form>                                            </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="product-order my-2 d-none">
                    <form className="shopcart_form form_row" action="/site/addcart" method="POST">
                        <input type="hidden" name="_csrf-frontend" value="Pzh0908uxYQgTPLQKPUyc_2YuzRPFqWNuypUt3BvIUdzfCOcOX33zBkEtulmj0oZzKDtWz9J1r6DRiH1LzdZIQ==" />								<div className="row no-gutters">
                            <div className="col-xs-12 col-lg-6 col-xl-5 pr-xl-0 input_cart col-md-6">
                                <button onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;" className="btn-minus btn-cts" type="button">–</button>
                                <input type="text" name="quantity" id="qty" value="1" min="1" max="10" />
                                <button onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;" className="btn-plus btn-cts" type="button">+</button>
                            </div>
                            <div className=" col-12 col-lg-6 col-xl-7 pl-xl-0 button_cart col-md-6">
                                <button type="submit" name="btn_order"><strong>Đặt hàng</strong></button>
                            </div>
                            <div className="col-12 mt-2 d-none">
                                <a href="tel:0973.055.948" className="hotline_cart">
                                    <span>Hotline</span>
                                    <p>0973.055.948</p>
                                </a>
                            </div>
                        </div>
                    </form>							</div>

            </div>
        )
    }



    return (
        <section className="content product py-4 py-lg-5 list-product">
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="box-shadow1 bg_white1 p1-3">
                            <h1 className="title mb-4  border-0">{
                                data?.title
                            }</h1>
                            <div className="row">
                                <div className="col-12  col-lg-8 mb-4 mb-md-0" id="productslick">
                                    <div className="product-image">
                                        <div className="slider-for mb-3 big-slide ">
                                            <i
                                                onClick={() => prevImage()}
                                                class="fa-solid fa-angle-left ave"></i>
                                            <ItemBig image={data?.image[currentIndex]} alt="slider" />
                                            <i
                                                onClick={() => nextImage()}
                                                class="fa-solid fa-angle-right"></i>
                                        </div>
                                        <div className=" slider-nav thumb-image small-slide">
                                            {data.image.map((item, index) => (
                                                <ItemSmall image={item} index={index} />
                                            ))}
                                        </div>
                                    </div>


                                    <div className="content-style my-3 pt-lg-3">
                                        <p className="product-tit"><strong>Giới thiệu</strong></p>
                                        <p style={{ textAlign: "center" }}>
                                            <span style={{ fontSize: "18px" }}>
                                                <span style={{ fontFamily: "'Times New Roman', serif" }}>
                                                    <strong>
                                                        <span style={{ fontFamily: "'Segoe UI', sans-serif" }}>
                                                            <span style={{ color: "#0070c0" }}>
                                                                {
                                                                    data?.title
                                                                }
                                                            </span>
                                                        </span>
                                                    </strong>
                                                </span>
                                            </span>
                                        </p>

                                        <p style={{ textAlign: "center" }}>
                                            <span style={{ fontSize: "14px" }}>
                                                <span style={{ fontFamily: "'Times New Roman', serif" }}>
                                                    <strong>
                                                        <span style={{ color: "#0098fe" }}>PHƯƠNG TIỆN: EMERATES </span>
                                                    </strong>
                                                    <strong>5 SAO <span style={{ color: "#0098fe" }}>| </span></strong>
                                                    <strong><span style={{ color: "#0098fe" }}>KHÁCH SẠN: </span></strong>
                                                    <strong>4 SAO</strong>
                                                </span>
                                            </span>
                                        </p>

                                        <p style={{ textAlign: "center" }}>
                                            <img src={data?.image[0]} style={{ width: "100%" }} />
                                        </p>
                                    </div>
                                </div>


                                {/* Infor Tour  */}
                                <InforTour title={data?.title}
                                    time={data?.time}
                                    idTour={data?.idTour}
                                    start={data?.start}
                                    destination={data?.destination}
                                    end={data?.end}
                                    price={data?.price}
                                    status={data?.status}
                                    description={data?.description}
                                />
                                {/* The end infor */}
                            </div>
                        </div>
                        {/*  */}


                        <div className="mt-3 mt-lg-4 mt-xl-5 product-infomation">
                            <p className="product-tit pb-2 mb-3 border-bottom"><i className="fas fa-info-circle"></i> Thông tin</p>
                            <button className='btnGetInfo'>
                                <a href={
                                    data?.linkDocs
                                }>Nhận thông tin</a>
                            </button>
                            <div className="product-infomation-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTour;