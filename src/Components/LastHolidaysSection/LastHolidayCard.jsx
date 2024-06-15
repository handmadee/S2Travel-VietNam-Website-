import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LastHolidayCard(props) {
  let navigate = useNavigate();
  const title = props.itemTitle.substring(0, 35) + '...';
  const des = props.itemDescription.substring(0, 100) + '...';

  // Redirect to page
  const handleRedirect = () => {
    return navigate('/about-tour', {
      state: {
        data: props?.item
      }
    })
  }
  return (
    <div className='col-lg-4'>
      <Card className='shadow h-100 overflow-hidden'>
        <Card.Img className='img-hover' variant='top' src={props.itemImage} />
        <Card.Body className='p-4'>
          <Card.Title className='title text-start text-uppercase fw-bold'>{title}</Card.Title>
          <Card.Text className='text-start'>{des}</Card.Text>

          <button
            onClick={handleRedirect}
            variant='success' className=' btn_vip mt-auto bg-success'
          >Xem ngay</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LastHolidayCard;