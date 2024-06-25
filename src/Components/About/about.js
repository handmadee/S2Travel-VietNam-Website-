import React from 'react';
import './abountSection.css';
const phone = require('./../../Assets/Images/phone.png');
export function AboutSection() {
    return (
        <section class=" about-home py-4 py-lg-5" >
            <div class="bg"></div>
            <div class="container pt-lg-3">
                <div class="row align-items-lg-center">
                    <div class="col-12 col-md-7 about-content pr-lg-5  " data-aos="fade-right" data-aos-delay="100">
                        <p class="mb-1 title " >Giới thiệu về chúng tôi</p>
                        <div class="info  mb-3 text-uppercase utgod" >
                            S2 Travel VietNam
                        </div>
                        <div class="mb-2 brief mx-auto"  >Công Ty TNHH S2travel VietNam là một đơn vị tổ chức tour chuyên nghiệp với Ban lãnh đạo có trên 15 năm kinh nghiệm trong lĩnh vực lữ hành, cùng đội ngũ nhân viên trẻ, năng động, giàu tính sáng tạo và nhiệt huyết trong công việc. Với chúng tôi, mỗi cá nhân là một mắt xích tạo nên một tập thể vững mạnh, hướng tới mục tiêu chung là mang lại sự hài lòng tuyệt đối đến quý khách hàng.

                            Với phương châm "Sự hài lòng của Quý khách hàng là thành công của Chúng tôi", Du lịch S2travel VietNam đang nỗ lực không ngừng nâng cao chất lượng dịch vụ, đa dạng hóa sản phẩm du lịch nhằm tạo nên những trải nghiệm tốt nhất cho Quý du khách trong và ngoài nước.

                            Chúng tôi đang đẩy mạnh khai thác các tuyến tour du lịch đa dạng và hấp dẫn như:


                            Du lịch trong nước
                            Du lịch nước ngoài
                            Tour trải nghiệm cho học sinh
                            Team Building
                            Tổ chức sự kiện
                            Du lịch kết hợp hội thảo, hội nghị (MICE)
                            Đại lý vé máy bay
                            Cung cấp xe du lịch 7 - 45 chỗ
                            Cung cấp Voucher nghỉ dưỡng resort, du thuyền cao cấp...


                            Bên cạnh những tour được thiết kế trước, chúng tôi luôn sẵn sàng thiết kế các tour theo yêu cầu và nhu cầu riêng của quý khách hàng.

                            Chúng tôi không ngừng lắng nghe, hoàn thiện và phát triển hơn nữa để trở thành một trong những thương hiệu du lịch gần gũi và đáng tin cậy.

                            Du lịch S2travel VietNam  cam kết là một người bạn đồng hành tận tụy, cung cấp dịch vụ chuẩn chỉnh và chất lượng nhất cho quý khách, cùng quý khách khám phá những điểm đến hấp dẫn trong và ngoài nước.
                        </div>
                    </div>
                    <div class="col-12 col-md-5 about-hotline pl-lg-5" data-aos="fade-left" data-aos-delay="100">
                        <div class="hotline d-flex align-items-center" onclick="tel:0971691414">
                            <img src={phone} alt="about-hotline-background" />
                            <div class="text">
                                <p class="mb-0">Hotline tư vấn</p>
                                <a class="utgod" href="tel:0971691414">097 169 1414</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
