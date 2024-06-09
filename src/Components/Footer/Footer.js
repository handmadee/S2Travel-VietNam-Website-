import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer row>
      <div class=" wrap1 py-4 py-lg-5">
        <div class="bg"></div>
        <div class="container ">
          <div class="box footer-wrap d-md-flex justify-content-md-between mb-4 mb-lg-5">
            <div class="logo-ft-wrap d-flex align-items-center">
              <a class="logo d-flex mr-3" href="https://hoaphuongtim.com/">
                <img class="img-contain m-auto" src={
                  require('./../../Assets/Images/logo.png')
                } alt="CÔNG TY TNHH DU LỊCH HOA PHƯỢNG TÍM menu" />
              </a>
            </div>
            <div class="company-info mr-lg-0  mr-md-3  mb-4 mb-xl-0">

              <p class="title text-uppercase  mb-3 ">Liên hệ</p>
              <p class="mb-2 mt-3 "><i class="fa fa-map-marker-alt"></i> <strong>Trụ sở chính:</strong>  Số 21, Xóm Vật Tư, Phường Hà Tu, Thành phố Hạ Long, Tỉnh Quảng Ninh, Việt Nam</p>
              <p class="mb-2 mt-3 "><i class="fa fa-map-marker-alt"></i> <strong>Văn phòng đại diện miền nam:</strong> 102/21 đường 2/4 phường Vĩnh Phước, Nha Trang, Khánh Hòa

              </p>
              <p class="mb-2 "><i class="fa fa-phone rotate"></i> <strong>Điện thoại:</strong> <a href="tel:0971691414">0971.691.414</a> - <a href="tel:0785503329">0785.503.329</a></p>
              <p class="mb-2 "><i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:hoaphuongtimtourist@gmail.com">hoaphuongtimtourist@gmail.com</a></p>
              <p class="mb-2 "><i class="fas fa-globe-europe"></i> <strong>Website:</strong> <a href="http://hoaphuongtim.com">hoaphuongtim.com</a></p>
              <div class="item network_social">
                <div class="d-flex align-items-center ">
                  <a class="facebook_icon rounded mr-2 mr-xl-3" href="https://www.facebook.com/dulichhoaphuongtim/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square"></i></a>                                <a class="youtube rounded mr-2 mr-xl-3" href="https://www.youtube.com/channel/UC3L8xIJH3tL6aTZI9NGrnzg" target="_blank" rel="noreferrer"><i class="fab fa-youtube-square"></i></a>                                <a class="twitter_url rounded" href="https://goldweld.trustpass.alibaba.com/" target="_blank" rel="noreferrer"><i class="fab fa-twitter-square"></i></a>                            </div>
              </div>
            </div>
            <div class="hotline-ft  d-none">
              <p class="title-hl mb-1 ">Hotline liên hệ</p>
              <a class="hotline d-block mb-2" href="tel:0973.055.948"><i class="fa fa-phone rotate"></i> 0973.055.948</a>
              <p class="mb-2"><i class="far fa-clock"></i> T2 - T7    <strong>8h00 - 17h30</strong></p>

            </div>
            <div class="face box mb-3 mb-lg-0 d-none">
              <div class="fb-page" data-width="250" data-height="190" data-href="https://www.facebook.com/dulichhoaphuongtim/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true">
                <div class="fb-xfbml-parse-ignore">
                  <blockquote cite="https://www.facebook.com/dulichhoaphuongtim/">
                    <a href="https://www.facebook.com/dulichhoaphuongtim/">S2 TRAVEL VIET NAM COMPANY LIMITED</a>
                  </blockquote>
                </div>
              </div>
            </div>
            <div class="map box mb-3 mb-lg-0 ">
              <p class="title mb-3">Bản đồ</p>
              <a href='https://www.google.com/maps/place/H%C3%A0+Tu,+Tp.+H%E1%BA%A1+Long,+Qu%E1%BA%A3ng+Ninh,+Vi%E1%BB%87t+Nam/@20.956161,107.1071871,13z/data=!3m1!4b1!4m6!3m5!1s0x314a57cabd98a47d:0xa175a971553bf533!8m2!3d20.9546746!4d107.1425442!16s%2Fg%2F1hb_f1rc4?entry=ttu' class="map-wrap">
                <img class="img-contain" src={require('./../../Assets/Images/maps.png')} alt="Bản đồ công ty du lịch S2Travel Viet Nam" />
              </a>

            </div>
          </div>
          <div class='d-md-flex justify-content-md-center align-items-md-center'>
            <div class="box copyright text-right mt-3 mt-md-0">Bản quyền thuộc về S2 Travel VietNam. Thiết kế web <a href="http://vinaweb.vn">Console.vn</a></div>
          </div>
        </div>
      </div>

    </footer>

  )
}

export default Footer;