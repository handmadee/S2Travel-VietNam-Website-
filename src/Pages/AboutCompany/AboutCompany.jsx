import React from 'react';
import './AboutCompany.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import { Partner } from '../../Components/Partner/Partner';

function AboutCompany() {
    return (
        <div className='holidays-page'>
            <SecondHeroSection secondHeroTitle='LIÊN HỆ TỚI CHÚNG TÔI' />
            {/* <SearchForm /> */}
            {/*  */}
            <div className="container">
                <div className="row s35_row">
                    <div className="col-md-3 col-xs-12">
                        <nav className="s35_n">
                            <ul className="s35_nm">
                                <li>
                                    <a href="/trang-chinh-sach-quy-dinh">Điều kiện và điều khoản</a>
                                </li>
                                <li className="active">
                                    <a href="/introduce">Giới thiệu công ty</a>
                                </li>
                                <li>
                                    <a href="/danh-gia-khach-hang">Khách hàng nói về chúng tôi</a>
                                </li>
                                <li>
                                    <a href="/contact">Hỗ trợ khách hàng</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9 col-xs-12">
                        <div className="s35_m">
                            <div className="s35_h">
                                <h1 className="s35_t">Giới thiệu công ty</h1>
                            </div>
                            <div className="s35_b">
                                <div className="s35_i">
                                    <h3>1. Chúng tôi là S2 Travel</h3>
                                    <p>
                                        Hoạt động trong lĩnh vực du lịch và dịch vụ từ năm 2011, S2 Travel tự tin
                                        mang đến chất lượng du lịch vượt trội, chuyên cung cấp và hỗ trợ việc đặt
                                        vé máy bay, phòng khách sạn, resort, tour du thuyền hạng sang cho khách
                                        hàng Việt Nam. Với đội ngũ nhân viên nhiệt tình, giàu kinh nghiệm, S2 Travel
                                        sẽ là cầu nối mang đến cho quý khách trải nghiệm du lịch tốt nhất, dù là
                                        chuyến đi cùng gia đình, bạn bè hay đồng nghiệp.
                                    </p>
                                    <p>
                                        Duthuyenhalong.com là một sản phẩm trực thuộc S2 Travel, với mục tiêu cung
                                        cấp dịch vụ tư vấn và tổ chức các tour du thuyền chất lượng, tin cậy với
                                        giá tốt nhất đến khách hàng. S2 Travel liên kết chọn lọc với các khách sạn,
                                        các hãng hàng không và các đối tác du thuyền uy tín nhất nhằm cung cấp đa dạng
                                        các dịch vụ, được kết hợp thông minh, mang đến cho khách hàng những chuyến đi
                                        cùng trải nghiệm đáng nhớ bên gia đình và người thân.
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                    <p>
                                        <img
                                            src={require('./../../Assets/Images/S2Tourr.png')}
                                            className="fr-fic fr-dib"
                                            style={{ width: '600px', height: '600px' }}
                                            alt="S2 Travel Team"
                                        />
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                </div>
                                <div className="s35_i">
                                    <h3>2. Tại sao chọn chúng tôi</h3>
                                    <p>
                                        Đưa du thuyền Hạ Long lại gần hơn với mỗi kỳ nghỉ của những gia đình người
                                        Việt là điều mà chúng tôi luôn hướng tới. Nếu như trước đây, du thuyền Hạ
                                        Long luôn chỉ hấp dẫn đối với du khách quốc tế còn du khách Việt Nam thì
                                        thường chỉ chọn ở khách sạn thì hiện nay, rất nhiều người Việt đã lựa chọn
                                        đi du thuyền để khám phá vịnh Hạ Long để kết hợp trong kỳ nghỉ của mình. Hiểu
                                        được nhu cầu của khách hàng, cùng với mong muốn giới thiệu những du thuyền tốt
                                        nhất cho du khách, chúng tôi đã xây dựng nên thương hiệu Duthuyenhalong.com để
                                        bạn và gia đình, bạn bè yên tâm tin tưởng và lựa chọn.
                                    </p>
                                    <p>Chúng tôi tự hào khi mang lại cho khách hàng những giá trị cốt lõi:</p>
                                    <p>
                                        <strong>Đội ngũ nhân viên chuyên nghiệp, tâm huyết</strong>
                                    </p>
                                    <p>
                                        Chúng tôi có một đội ngũ nhân viên đầy kinh nghiệm, tận tâm với nghề cùng sự
                                        nhiệt tình với khách hàng sẽ luôn lắng nghe, phục vụ quý khách 24/7 qua hệ thống
                                        tổng đài, hotline, fanpage được kết nối liên tục và thông suốt. Những kiến thức
                                        mà nhân viên của chúng tôi tích lỹ được trong rất nhiều năm là nguồn nguyên liệu
                                        quý giá để mang lại quý khách những tư vấn những lựa chọn được sản phẩm phù hợp
                                        nhất cũng như giải đáp mọi ý kiến, vấn đề phát sinh trong suốt quá trình quý khách
                                        tham gia du thuyền cho đến khi kết thúc chuyến đi an toàn và vui vẻ.
                                    </p>
                                    <p>
                                        <strong>Sản phẩm phong phú</strong>
                                    </p>
                                    <p>
                                        Những du thuyền mới nhất, sang trọng và hiện đại nhất để đáp ứng tất cả những yêu
                                        cầu của du khách sẽ luôn được cập nhật trên website của chúng tôi. Tại
                                        Duthuyenhalong.com, khách hàng có thể dễ dàng tìm thấy một du thuyền phù hợp với
                                        nhu cầu nghỉ dưỡng cho các cặp đôi, gia đình, nhóm bạn hay các đoàn thể. Đặc biệt,
                                        Du thuyền Hạ Long hứa hẹn sẽ là một điểm check in sang chảnh của giới trẻ. Quý khách
                                        vừa được tận hưởng chuyến nghỉ dưỡng thoải mái, vừa lưu giữ được những hình ảnh tuyệt
                                        đẹp trên du thuyền mà hiếm có nơi nào có được.
                                    </p>
                                    <p>
                                        <strong>Mức giá hấp dẫn</strong>
                                    </p>
                                    <p>
                                        Duthuyenhalong.com luôn cam kết mang đến mức giá ưu đãi và tốt nhất dành riêng cho
                                        khách hàng. Chúng tôi chắc chắn rằng, số tiền mà quý khách chi trả hoàn toàn xứng
                                        đáng với giá trị và chất lượng dịch vụ mà chúng tôi mang lại. Bên cạnh đó, chúng tôi
                                        luôn có mức giá đặc biệt được thiết kế riêng cho kỳ nghỉ của từng nhóm khách hàng.
                                    </p>
                                </div>
                                <div className="s35_i">
                                    <h3>3. Sản phẩm và dịch vụ</h3>
                                    <p>
                                        S2 Travel cung cấp đa dạng các dịch vụ du lịch, được kết hợp thông minh để tiết kiệm
                                        tối đa chi phí và thời gian cho khách hàng, đồng thời đem lại những trải nghiệm mới
                                        mẻ và độc đáo:
                                    </p>
                                    <div className="s35_s">
                                        <div className="s35_si">
                                            <div className="s35_so c1">
                                                <i className="ua ua-ship"></i>
                                            </div>
                                            <p>
                                                <strong>Du lịch du thuyền</strong>
                                                <br />
                                                Cung cấp đa dạng các tour du thuyền trong nước và quốc tế, với tầm nhìn 2025 liên
                                                kết với các hãng tàu biển đẳng cấp quốc tế để mang đến trải nghiệm du lịch độc đáo
                                                này cho các du khách Việt Nam.
                                            </p>
                                        </div>
                                        <div className="s35_si">
                                            <div className="s35_so c2">
                                                <i className="ua ua-hotel"></i>
                                            </div>
                                            <p>
                                                <strong>Đặt phòng khách sạn và resort</strong>
                                                <br />
                                                Chúng tôi tự hào là đại lý cấp 1 của Vinpearl - chuỗi khách sạn / resort hàng đầu
                                                Việt Nam, đồng thời triển khai liên tục các chương trình voucher khuyến mãi lớn
                                                khách sạn, resort trên khắp cả nước. Đội ngũ tư vấn viên sẽ đưa ra những lời khuyên
                                                để giúp khách hàng chọn được nơi nghỉ chất lượng và phù hợp nhất với yêu cầu của quý
                                                khách.
                                            </p>
                                        </div>
                                        <div className="s35_si">
                                            <div className="s35_so c3">
                                                <i className="ua ua-globe"></i>
                                            </div>
                                            <p>
                                                <strong>Du lịch Quốc tế Inbound</strong>
                                                <br />
                                                S2 Travel tự hào đã phục vụ khách hàng từ hơn 100 quốc gia trên thế giới và giới thiệu
                                                những gì đẹp nhất, tinh tế nhất của Việt Nam đến với bạn bè năm châu. Các dịch vụ cho
                                                khách quốc tế bao gồm tổ chức tour ngắn ngày, tour du thuyền, tour nghỉ dưỡng kết hợp
                                                chơi golf và hội nghị hội thảo.
                                            </p>
                                        </div>
                                        <div className="s35_si">
                                            <div className="s35_so c5">
                                                <br />
                                            </div>
                                            <p>
                                                <strong>Dịch vụ du lịch khác</strong>
                                                <br />
                                                Ngoài các dịch vụ nêu trên, S2 Travel cung cấp linh hoạt các dịch vụ đặt vé máy bay,
                                                visa, vé tàu, thuê xe du lịch, thuê hướng dẫn viên, giúp khách hàng có thêm lựa chọn
                                                khi muốn tự do khám phá điểm đến.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="s35_i">
                                        <h3>4. Đối tác của S2 Travel</h3>
                                        <p>
                                            <img
                                                src={require('./../../Assets/Images/mia-tours1.png')}
                                                alt="Đối tác của S2 Travel"
                                                className="d-none d-sm-block fr-fic fr-dii"
                                            />
                                            <img
                                                src={require('./../../Assets/Images/mia-tours-sp.png')}
                                                alt="Đối tác của S2 Travel"
                                                className="d-block d-sm-none fr-fic fr-dii"
                                            />

                                        </p>
                                    </div>
                                    <div className="s35_i">
                                        <h3>5. Liên hệ với chúng tôi</h3>
                                        <p>
                                            <strong>S2 TRAVEL</strong>
                                            <br />
                                            <strong>Trụ sở chính: </strong>: Số 21, Xóm Vật Tư, Phường Hà Tu, Thành phố Hạ Long, Tỉnh Quảng Ninh, Việt Nam
                                            <br />
                                            <strong>Văn phòng đại diện miền nam:: </strong>:
                                            102/21 đường 2/4 phường Vĩnh Phước, Nha Trang, Khánh Hòa

                                            <br />
                                            Điện thoại: 0971.691.414
                                            <br />
                                            Hotline: 0785.503.329
                                            <br />
                                            Email:
                                            lamoanh.s2travelvietnam@gmail.com
                                            <br />
                                            Website: <a href="https://s2travelvietnam.vercel.app/">www.s2travel.com</a>
                                        </p>
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

export default AboutCompany;




