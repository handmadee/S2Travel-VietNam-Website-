import React, { useState } from 'react';
import './CityBreaksSection.css';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
function AmsterdamCityBreaksSection(props) {
  const [Tour, setTour] = useState(props?.listTour || [])
  let navigate = useNavigate();
  const handleRedirect = ({ item }) => {
    return navigate('/about-tour', {
      state: {
        data: item
      }
    })
  }
  const ItemTour = ({ image, title, id, end, time, start, price, item, des }) => {
    const handleRedirect = () => {
      return navigate('/about-tour', {
        state: {
          data: item
        }
      })
    }
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
      <div className="item-wrap col-12 mb-3 mb-lg-4">
        <div className="item ">
          <div className="product-box row pd10 align-items-lg-center">
            <div className="wrap-img-box col-12 col-lg-6">
              <a className="img-box d-flex" href="#">
                <img className="img-cover" src={image} alt="TOUR GHÉP HÀ NỘI - SAPA 4N3D" title="TOUR GHÉP HÀ NỘI - SAPA 4N3D" />
              </a>
            </div>
            <div className="info-box py-3  col-12 col-lg-6 ">
              <h4 className="product-name mb-1 "><a className="" href="https://hoaphuongtim.com/tour-ha-noi--sapa--p76.html">{title}</a></h4>
              <a className="cat-url mb-1 " href="/tour-mien-bac-c19">{props?.title}</a>
              <span className="icon"><i className="ri-arrow-right-line"></i></span>
              <p className="brief mb-2 mb-lg-3">{
                des}</p>
              <p className="tour-code mb-2 mb-lg-3"><i className="far fa-flag"></i> Mã Tour: {id}</p>
              <div className="info d-inline-block mb-2">
                <span className="d-inline-block mb-1 bgred"><i className="far fa-clock"></i> Ngày kết thúc: {end}</span>
                <span className="d-inline-block mb-1 "><i className="fas fa-users"></i> Chỗ còn nhận: </span>
                <span className="d-inline-block mb-1"><i className="fas fa-suitcase"></i> Thời gian: {time}</span>
                <span className="d-inline-block mb-1"><i className="fas fa-map-marker-alt"></i> Khởi hành: {start}</span>
              </div>
              <div className="price-more">
                <span className="price d-inline-block mb-1"><strong>{formattedPrice}đ</strong></span>
                <button onClick={() => handleRedirect()} className="btn_vip more d-inline-block mb-1" >Xem thêm</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='content city-break-section my-4 my-sm-5'>
      <Container className='containerStart' >
        <h3 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>{props.title}</h3>
        <div className="list-product row no-gutters view_grid">
          {/* Tour */}
          {
            Tour.length > 0 && Tour.map((item, index) => {
              return (
                <ItemTour title={item.title} des={item?.description} end={item.end} id={item?.idTour} image={item.image[0]} price={item.price} item={item} key={index} start={item.start[0]} time={item.time} />
              )
            })
          }
          {/* The end tour */}
          <div className="col-12">
          </div>
        </div>
        {/* The end content */}
      </Container>
    </div>
  )
}

export default AmsterdamCityBreaksSection;