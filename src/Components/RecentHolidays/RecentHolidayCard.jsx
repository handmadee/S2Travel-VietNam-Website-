import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function RecentHolidayCard(props) {

    const delay = ((props.index % 3) + 1) * 100;

    return (
        <div className='col-lg-6 col-md-12 mb-4  cardItem' data-aos="fade-up" data-aos-delay={delay} >
            <Card className='shadow-sm d-flex flex-row h-100 overflow-hidden'>
                <div className='col-6 p-0'>
                    <Card.Img
                        className='h-100 w-100'
                        src={props.itemImage}
                        alt={props.itemTitle}
                        style={{ objectFit: 'cover' }} />
                </div>
                <div className='col-6 d-flex flex-column'>
                    <Card.Body className='p-3 d-flex flex-column'>
                        <Card.Title className='text-start text-uppercase fw-bold mb-2'>{props.itemTitle}</Card.Title>
                        <ul className='list-unstyled mb-3 flex-grow-1'>
                            <li className='text-start'>{props.itemDescription}</li>
                            <li className='text-start'>{props.itemNights}</li>
                            <li className='price text-start text-success'>
                                <strong>{props.itemPrice}</strong>
                            </li>
                        </ul>
                        <Button variant='success' className='mt-auto'>Xem ngay</Button>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}


export default RecentHolidayCard;
