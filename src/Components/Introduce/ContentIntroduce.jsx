import React from 'react';
import './ContentIntroduce.css';
import Container from 'react-bootstrap/Container';

export default function ContentIntroduce() {
    return (
        <section className="content pt-4 news pb-4 py-lg-5">
            <Container>
                <div className="row">
                    <div className="col-12 col-lg-8 pl-lg-3 left order-lg-last">
                        <h1 className="header-title mb-3 pb-2">Giới thiệu về chúng tôi</h1>
                        <div className="content-news content-style"
                            style={{
                                textAlign: "left"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>
                                    Công Ty TNHH S2TRAVEL VIETNAM là một đơn vị tổ chức tour chuyên nghiệp với Ban lãnh đạo có trên 12 năm kinh nghiệm trong lĩnh vực lữ hành, cùng đội ngũ nhân viên trẻ, năng động, giàu tính sáng tạo và nhiệt huyết trong công việc. Với chúng tôi, mỗi cá nhân là một mắt xích tạo nên một tập thể vững mạnh, hướng tới mục tiêu chung là mang lại sự hài lòng tuyệt đối đến quý khách hàng.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>
                                    Với phương châm "Sự hài lòng của Quý khách hàng là thành công của Chúng tôi", S2TRAVEL VIETNAM  đang nỗ lực không ngừng nâng cao chất lượng dịch vụ, đa dạng hóa sản phẩm du lịch nhằm tạo nên những trải nghiệm tốt nhất cho Quý du khách trong và ngoài nước.
                                </span>
                            </p>
                            <p>
                                <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>
                                    Chúng tôi đang đẩy mạnh khai thác các tuyến tour du lịch đa dạng và hấp dẫn như:
                                </span>
                            </p>
                            <ul style={{
                                textAlign: "left"
                            }}>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Du lịch trong nước</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Du lịch nước ngoài</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Tour trải nghiệm cho học sinh</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Team Building</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Tổ chức sự kiện</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Du lịch kết hợp hội thảo, hội nghị (MICE)</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Đại lý vé máy bay</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Cung cấp xe du lịch 7 - 45 chỗ</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>Cung cấp Voucher nghỉ dưỡng resort, du thuyền cao cấp...</span>
                                </li>
                            </ul>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>
                                    Bên cạnh những tour được thiết kế trước, chúng tôi luôn sẵn sàng thiết kế các tour theo yêu cầu và nhu cầu riêng của quý khách hàng.
                                </span>
                            </p>
                            <p style={{ textAlign: "justify" }}>
                                <span style={{ fontSize: "16px", color: "#8e44ad", fontFamily: "Georgia, serif" }}>
                                    Chúng tôi không ngừng lắng nghe, hoàn thiện và phát triển hơn nữa để trở thành một trong những thương hiệu du lịch gần gũi và đáng tin cậy. Du lịch S2Travel Vietnam cam kết là một người bạn đồng hành tận tụy, cung cấp dịch vụ chuẩn chỉnh và chất lượng nhất cho quý khách, cùng quý khách khám phá những điểm đến hấp dẫn trong và ngoài nước.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-4 mt-lg-0 pl-lg-0 side-right slidebar">
                        <div className="widget-box widget-category mb-3">
                            <div className="widget-title-wrap">
                                <div className="widget-title">Giới thiệu</div>
                            </div>
                            <div className="list-box">
                                <ul>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="/gioi-thieu-ve-chung-toi--a3.html" className="active">
                                                <i className="fas fa-caret-right"></i> Giới thiệu về chúng tôi
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pt-2 mt-2 border-top d-flex align-items-center justify-content-between">
                                            <a href="/gallery">
                                                <i className="fas fa-caret-right"></i> Hình ảnh tham quan
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-box widget-news news-latest">
                            <div className="widget-title">Tin tức mới</div>
                            <div className="list-news-latest">
                                <div className="item-article clearfix">
                                    <div className="post-image">
                                        <a href="/13-dia-diem-du-lich-mien-bac-dep-va-noi-tieng-nhat-n23.html">
                                            <img className="lazyload" src={
                                                require('./../../Assets/Images/dl.jpeg')
                                            } alt="13 địa điểm du lịch miền Bắc đẹp và nổi tiếng nhất" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <div className="title">
                                            <a href="/13-dia-diem-du-lich-mien-bac-dep-va-noi-tieng-nhat-n23.html">13 địa điểm du lịch miền Bắc đẹp và nổi tiếng nhất</a>
                                        </div>
                                        <div className="date">
                                            <i className="fa fa-calendar-alt"></i> 18/01/2023
                                        </div>
                                    </div>
                                </div>
                                <div className="item-article clearfix">
                                    <div className="post-image">
                                        <a href="/17-diem-du-lich-mien-trung-dep-khong-the-bo-qua-n22.html">
                                            <img className="lazyload" src={
                                                require('./../../Assets/Images/dl2.jpeg')
                                            } alt="17 điểm du lịch miền Trung đẹp không thể bỏ qua" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <div className="title">
                                            <a href="/17-diem-du-lich-mien-trung-dep-khong-the-bo-qua-n22.html">17 điểm du lịch miền Trung đẹp không thể bỏ qua</a>
                                        </div>
                                        <div className="date">
                                            <i className="fa fa-calendar-alt"></i> 20/08/2023
                                        </div>
                                    </div>
                                </div>
                                <div className="item-article clearfix">
                                    <div className="post-image">
                                        <a href="/kinh-nghiem-du-lich-singapore-tu-tuc-n21.html">
                                            <img className="lazyload"
                                                src={
                                                    require('./../../Assets/Images/dl3.jpeg')
                                                }
                                                alt="Kinh nghiệm du lịch Singapore tự túc" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <div className="title">
                                            <a href="/kinh-nghiem-du-lich-singapore-tu-tuc-n21.html">Kinh nghiệm du lịch Singapore tự túc</a>
                                        </div>
                                        <div className="date">
                                            <i className="fa fa-calendar-alt"></i>  6/06/2024
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget-box widget-social mb-3">
                            <div className="widget-title">Kết nối</div>
                            <div className="network-social">
                                <div className="d-flex align-items-center">
                                    <a className="facebook_icon rounded mr-2 mr-xl-3" href="https://www.facebook.com/ComboOanhNguyen" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="youtube rounded mr-2 mr-xl-3" href="https://www.facebook.com/ComboOanhNguyen" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a className="twitter_url rounded" href="https://www.facebook.com/ComboOanhNguyen" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="fixed-mucluc d-none">
                            <i className="fas fa-list-ol"></i>
                        </div>
                        <div className="er_toc er_toc_fixed d-none"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
