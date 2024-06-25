import React from 'react';
import './Contactpage.css';

function Contactpage() {
    return (
        <section className="content contact bg_grey py-4">
            <div className="container">
                <div className="row contact-form mb-3 mt-md-4 align-items-md-center">
                    <div className="col-12 col-md-6 col-lg-5 pr-md-5 mb-3 mb-md-0 pr-md-3">
                        <div className="info p-3 p-lg-4 p-xl-5">
                            <p className="text-uppercase title mb-3"><strong>
                                CÔNG TY TNHH S2 TRAVEL VIỆT NAM
                            </strong></p>
                            <div className="add mb-3 d-flex item">
                                <span className="icon"><i className="fa fa-map-marker-alt"></i></span>
                                <div>
                                    <strong className="d-block">Trụ sở chính</strong>
                                    <span> Số 21, Xóm Vật Tư, Phường Hà Tu, Thành phố Hạ Long, Tỉnh Quảng Ninh, Việt Nam
                                    </span>
                                </div>
                            </div>
                            <div className="add mb-3 d-flex item">
                                <span className="icon"><i className="fa fa-map-marker-alt"></i></span>
                                <div>
                                    <strong className="d-block">VP Đại Diện Miền Nam </strong>
                                    <span> 102/21 đường 2/4 phường Vĩnh Phước, Nha Trang, Khánh Hòa
                                    </span>
                                </div>
                            </div>
                            <div className="phone mb-3 item d-flex">
                                <span className="icon"><i className="fa fa-mobile-alt"></i></span>
                                <div>
                                    <strong className="d-block">Hotline</strong>
                                    <span>
                                        <a href="tel:0971691414">0971.691.414</a> - <a href="tel:0785503329">0785.503.329</a>
                                    </span>
                                </div>
                            </div>
                            <div className="email mb-0 item d-flex">
                                <span className="icon"><i className="far fa-envelope"></i></span>
                                <div>
                                    <strong className="d-block">Email</strong>
                                    <span><a href="mailto:booking@s2travelvietnam.vn">booking@s2travelvietnam.vn</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="form">
                            <h5 className="mb-4">Gửi yêu cầu cho chúng tôi</h5>
                            <form id="contact-form" action="/lien-he.html" method="post">
                                <input type="hidden" name="_csrf-frontend" value="-VlM3lg0jLOm-0n5TMvmAxXfPIDON-iWXjItZpNEblm1HRu1Lme--5-zDcACsZ5pJOdq775om6VmXlgkzBwWPw==" />
                                <div className="row">
                                    <div className="form-group col-6 mb-0 pr-2 field-contactform-name required">
                                        <input type="text" id="contactform-name" className="form-control" name="ContactForm[name]" autoFocus placeholder="Họ và tên" aria-required="true" />
                                        <p className="help-block help-block-error"></p>
                                    </div>
                                    <div className="form-group col-6 mb-0 pl-2 field-contactform-email required">
                                        <input type="text" id="contactform-email" className="form-control" name="ContactForm[email]" placeholder="Email" aria-required="true" />
                                        <p className="help-block help-block-error"></p>
                                    </div>
                                    <div className="form-group col-6 mb-0 pr-2 field-contactform-phone required">
                                        <input type="text" id="contactform-phone" className="form-control" name="ContactForm[phone]" placeholder="Điện thoại" aria-required="true" />
                                        <p className="help-block help-block-error"></p>
                                    </div>
                                    <div className="form-group col-6 mb-0 pl-2 field-contactform-subject required">
                                        <input type="text" id="contactform-subject" className="form-control" name="ContactForm[subject]" placeholder="Tiêu đề" aria-required="true" />
                                        <p className="help-block help-block-error"></p>
                                    </div>
                                    <div className="form-group col-12 mb-0 field-contactform-body">
                                        <textarea id="contactform-body" className="form-control" name="ContactForm[body]" rows="6" placeholder="Nội dung tin nhắn"></textarea>
                                        <p className="help-block help-block-error"></p>
                                    </div>
                                    <div className="form-group col-12 mb-0">
                                        <button type="submit" className="btn btn-submit mb-0">Gửi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mt-lg-5">
                    <div id="mapcont" className="mb-3"></div>
                </div>
            </div>
        </section>
    );
}

export default Contactpage;
