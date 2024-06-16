import React from 'react';
import './AboutCompany.css';
import './AccountControl.css'
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import { Partner } from '../../Components/Partner/Partner';

function AboutCompanyI() {
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
                                <li className="active">
                                    <a href="/trang-chinh-sach-quy-dinh">Điều kiện và điều khoản</a>
                                </li>
                                <li >
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
                    <div class="col-md-9 col-xs-12">
                        <div class="s35_m">
                            <div class="s35_h">
                                <h1 class="s35_t">Điều kiện và điều khoản</h1>
                            </div>
                            <div class="s35_b">
                                <p>BẠN PHẢI ĐỌC NHỮNG ĐIỀU KHOẢN SỬ DỤNG DƯỚI ĐÂY TRƯỚC KHI SỬ DỤNG TRANG WEB NÀY. VIỆC SỬ DỤNG TRANG WEB NÀY XÁC NHẬN VIỆC CHẤP THUẬN VÀ TUÂN THỦ CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN DƯỚI ĐÂY.</p>
                                <p>Website https://s2travelvietnam.vercel.app do Công ty TNHH Du Lịch và Dịch Vụ S2 Travel Tour quản lý và vận hành. Bằng cách truy cập và/hoặc sử dụng website https://s2travelvietnam.vercel.app bạn thừa nhận rằng bạn đã đọc, hiểu và đồng ý chịu sự ràng buộc bởi các Điều Khoản Sử Dụng được quy định dưới đây và các điều khoản và điều kiện khác liên quan đến Trang web, bao gồm nhưng không giới hạn ở các điều khoản và điều kiện về bảo mật và Các Câu Hỏi Thường Gặp, mà chúng cấu thành các thành phần không thể tách rời của các Điều Khoản Sử Dụng này.</p>
                                <p>Xin lưu ý rằng chúng tôi có thể thay đổi, sửa đổi, bổ sung và loại bỏ các Điều Khoản này vào bất cứ thời điểm nào mà không cần thông báo trước. Bạn phải đọc các Điều Khoản này một cách định kỳ. Bằng việc tiếp tục sử dụng Trang web này sau khi đã có những thay đổi như vậy đối với các Điều Khoản, người truy cập, người dùng đồng ý và chấp thuận với những thay đổi đó. Nếu bạn sử dụng bất kỳ dịch vụ nào khác của chúng tôi, thì việc sử dụng của bạn được dựa trên sự chấp thuận và tuân thủ các điều khoản và điều kiện được áp dụng đối với các dịch vụ đó.</p>
                                <h2>1. Phạm vi dịch vụ:</h2>
                                <p>Website https://s2travelvietnam.vercel.app chuyên giới thiệu, cung cấp các tour du thuyền tới du khách trong và ngoài nước. </p>
                                <h2>2. Giao nhận và vận chuyển</h2>
                                <p>Sau khi đặt mua đơn hàng và thanh toán 100% giá trị đơn hàng, https://s2travelvietnam.vercel.app sẽ gửi thông tin về đơn hàng đến địa chỉ email khách hàng đã đăng ký khi đặt mua đơn hàng.</p>
                                <p>Trường hợp khách hàng thay đổi email sử dụng sau khi thanh toán thành công và thông tin đơn hàng đã được gửi đi, https://s2travelvietnam.vercel.app sẽ không chịu trách nhiệm trong trường hợp mất mát thông tin đơn hàng.</p>
                                <p>Khách hàng khi có nhu cầu thay đổi số điện thoại đặt hàng/email tài khoản vui lòng liên hệ với chúng tôi theo một trong các phương thức sau:</p>
                                <p style={{ marginLeft: '20px' }}>- Gửi yêu cầu theo form “liên hệ” trên website</p>
                                <p style={{ marginLeft: '20px' }}>
                                    - Gửi thông tin tới địa chỉ email: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ef87809b9d80af8b9a9b879a968a81878e83808188c18c8082">[email &#160;protected]</a>
                                </p>
                                <p style={{ marginLeft: '20px' }}>- Gọi điện thoại tới số điện thoại: 0971.691.414    hoặc liên hệ trực tiếp với nhân viên phụ trách đơn hàng của quý khách.</p>
                                <h2>3. Chính sách bảo hành/bảo trì</h2>
                                <p>Sản phẩm giao dịch giữa https://s2travelvietnam.vercel.app và khách hàng là dịch vụ, nên không áp dụng chính sách bảo hành/bảo trì.</p>
                                <h2>4. Chính sách hoàn trả - đổi ngày đặt tour</h2>
                                <p>
                                    <strong>a. Phương thức hoàn trả dịch vụ:</strong>
                                </p>
                                <p>Khi có yêu cầu huỷ dịch vụ hoặc thay đổi dịch vụ, khách hàng cần liên hệ ngay với Duthuyenhalong.com bằng 1 trong các hình thức:</p>
                                <p style={{ marginLeft: '20px' }}>- Gửi yêu cầu theo form “liên hệ” trên website</p>
                                <p style={{ marginLeft: '20px' }}>
                                    - Gửi thông tin tới địa chỉ email: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ef9c8e838a9caf8b9a9b879a968a81878e83808188c18c8082">[email &#160;protected]</a>
                                </p>
                                <p style={{ marginLeft: '20px' }}>- Gọi điện thoại tới số điện thoại: 0971.691.414  hoặc liên hệ trực tiếp với nhân viên phụ trách đơn hàng của quý khách.</p>
                                <p>
                                    <strong>b. Phí hủy - đổi tour</strong>
                                </p>
                                <p>Trừ khi có thông báo khác, các giá tốt của Duthuyenhalong.com dành cho tour không hoàn huỷ.</p>
                                <p>Trường hợp đổi tour, chi phí đổi tour được quy định như sau: Phí đổi ngày của tour được quy định như sau: phí xử lý giao dịch 100,000/phòng và phí chênh lệch (nếu phát sinh) liên quan đến việc thay đổi ngày, thay đổi hạng phòng (bao gồm cả trường hợp hạng phòng cũ của khách không còn), phụ thu trẻ em và giường phụ (nếu phát sinh).</p>
                                <p>
                                    <strong>c. Huỷ tour do tình trạng thời tiết xấu</strong>
                                </p>
                                <p>Do đặc thù tour du thuyền diễn ra ngoài trời và trên môi trường mặt nước, Ban quản lý Vịnh Hạ Long / Vịnh Lan Hạ sẽ dựa vào tình hình thời tiết để quyết định cấp lệnh cho tàu ngủ đêm.</p>
                                <p>Trong trường hợp thời tiết mưa to nhưng không có lệnh cấm từ Ban quản lý, du thuyền vẫn hoạt động bình thường.</p>
                                <p>Trong trường hợp Ban quản lý Vịnh cấm ngủ đêm, chúng tôi sẽ thông báo tới khách hàng sớm nhất có thể và có phương án thay thế phù hợp (đổi tour sang vùng khác không bị ảnh hưởng của thời tiết hoặc đổi ngày đi du thuyền), trên cơ sở thoả thuận giữa các bên.</p>
                                <p>Trong trường hợp dịch vụ đã được sử dụng một phần trước khi nhận được thông báo cấm ngủ đêm từ Ban quản lý Vịnh, du thuyền sẽ tính phí các dịch vụ đã sử dụng (xe đón, bữa ăn trưa và tham quan trong ngày, số đêm đã nghỉ trên tàu trên tổng số đêm đặt) và hoàn trả cho khách hàng phần còn lại chưa sử dụng.</p>
                                <h2>5. Nghĩa vụ của khách hàng</h2>
                                <p>Cung cấp đầy đủ thông tin cá nhân có liên quan khi sử dụng dịch vụ trên Website https://s2travelvietnam.vercel.app như: Họ tên; Số điện thoại liên lạc; Email và chịu trách nhiệm về chính xác của các thông tin này. Duthuyenhalong.com không chịu trách nhiệm trong trường hợp Khách hàng cung cấp thông tin không chính xác.</p>
                                <p>Tuyệt đối không sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu website. Nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm phạm hệ thống Website https://s2travelvietnam.vercel.app. Mọi vi phạm sẽ bị xử lý theo quy định của pháp luật.</p>
                                <p>Sẽ tự chịu trách nhiệm về bảo mật và lưu giữ xác nhận đặt phòng của mình khi sử dụng sản phẩm, dịch vụ được mua trên website https://s2travelvietnam.vercel.app . Có trách nhiệm thông báo kịp thời cho website https://s2travelvietnam.vercel.app về những hành vi sử dụng trái phép, lạm dụng xác nhận đặt phòng của mình để hai bên cùng hợp tác xử lý.</p>
                                <p>Cam kết những thông tin cung cấp cho website https://s2travelvietnam.vercel.app là chính xác và hoàn chỉnh.</p>
                                <p>Cam kết, đồng ý không sử dụng dịch vụ của website https://s2travelvietnam.vercel.app vào những mục đích bất hợp pháp, không hợp lý, lừa đảo, đe doạ, thăm dò thông tin bất hợp pháp, phá hoại, tạo ra và phát tán virus gây hư hại tới hệ thống, cấu hình, truyền tải thông tin của website https://s2travelvietnam.vercel.app hay sử dụng dịch vụ của mình vào mục đích phá hoại, tạo những đơn đặt hàng giả, kể cả phục vụ cho việc phán đoán nhu cầu thị trường. Trong trường hợp vi phạm thì Khách hàng và/hoặc Nhà cung cấp phải chịu trách nhiệm về các hành vi của mình trước pháp luật.</p>
                                <p>Cam kết không được thay đổi, chỉnh sửa, ghép, sao chép, truyền bá, phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do website https://s2travelvietnam.vercel.app cung cấp cho một bên thứ ba, nếu không được sự đồng ý của https://s2travelvietnam.vercel.app.</p>
                                <p>Không được hành động gây mất uy tín của https://s2travelvietnam.vercel.app dưới mọi hình thức như tuyên truyền, phổ biến những thông tin sai sự thật bất lợi cho uy tín của website https://s2travelvietnam.vercel.app. </p>
                                <h2>6. Phương thức thanh toán</h2>
                                <p>Sau khi đăng ký sử dụng dịch vụ trên website https://s2travelvietnam.vercel.app, khách hàng vui lòng thanh toán theo một trong hai phương thức sau:</p>
                                <p style={{ marginLeft: '20px' }}>- Chuyển khoản qua ngân hàng: sau khi đặt hàng, khách hàng chuyển khoản số tiền đơn hàng vào tài khoản của website https://s2travelvietnam.vercel.app tại các hệ thống ngân hàng.</p>
                                <p>
                                    <br />
                                </p>
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

export default AboutCompanyI;