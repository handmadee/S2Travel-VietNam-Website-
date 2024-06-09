import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './header.css';
function HeaderPhone() {
    return (
        <Navbar expand='lg' className='header w-100 z-2' style={{
            top: 0,
            height: '20px',
            padding: '10px 0',
        }}
        >
            <Container>
                <p>
                    S2 Travel VietNam - Your best choice
                </p>

                <div className='flex phone'>
                    <i class="fa-solid fa-phone"></i>
                    <p><a>
                        0123456789
                    </a></p>
                </div>
            </Container>
        </Navbar>
    )
}

export default HeaderPhone;