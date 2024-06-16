import React from 'react';
import './Trip.css';
import Container from 'react-bootstrap/Container';

function Trip(props) {
    return (
        <div className='second-hero-section second-hero-section234 '>
            <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
                <h1 className='text-capitalize'>{props.secondHeroTitle}</h1>
            </Container>
        </div>
    )
}

export default Trip;