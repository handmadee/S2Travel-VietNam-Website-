import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const bgrDefault = require('../../Assets/Images/holidays-need-inspiration-bg.jpg');
function RecentHolidayCard(props) {
    let navigate = useNavigate();
    const delay = ((props.index % 3) + 1) * 100;
    const title = props.itemTitle.substring(0, 60) + '...';
    const des = props.itemDescription && props.itemDescription.length > 0 ? props.itemDescription.substring(0, 100) + '...' : '';
    const price = props?.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' đ';
    // Redirect to page
    const handleRedirect = () => {
        return navigate('/about-tour', {
            state: {
                data: props?.item
            }
        })
    }


    return (
        <div className='col-lg-6 col-md-12 mb-4  cardItem' data-aos="fade-up" data-aos-delay={delay} >
            <Card className='shadow-sm d-flex flex-row h-100 overflow-hidden'>
                <div className='col-6 p-0'>
                    <Card.Img
                        className='h-100 w-100'
                        src={props.itemImage[0] ? props.itemImage[0] : bgrDefault}
                        alt={props.itemTitle}
                        style={{ objectFit: 'cover' }} />
                </div>
                <div className='col-6 d-flex flex-column'>
                    <Card.Body className='p-3 d-flex flex-column'>
                        <Card.Title className='text-start text-uppercase fw-bold mb-2'>{title}</Card.Title>
                        <ul className='list-unstyled mb-3 flex-grow-1'>
                            <li className='text-start'><strong>
                                ID Tour:
                            </strong>
                                {props.itemDescription}</li>
                            <li className='text-start'>
                                <strong>Thời gian: </strong>
                                {props.itemNights}</li>
                            <li className='text-start'>
                                <strong>Trạng thái: </strong>
                                {props.status ? 'còn' : 'đang cập nhật'}</li>
                            <li className='price text-start text-success'>
                                <strong>{price}</strong>
                            </li>
                        </ul>
                        <button
                            onClick={handleRedirect}
                            variant='success' className='btn_vip  mt-auto'>Xem ngay</button>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}


export default RecentHolidayCard;
