import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'


function About() {
  return (
    <section className='about_sction py-5'>
        <Container>
            <Row>
                <h1 className='text-center '>About Us</h1>
                <Col>
                    <div className='vert'>
                        <p className='mb-3'>
                            DieticianPalesa is a one stop shop for all your nutritional and health needs, founded by Palesa Maleka a profesional clinical dietitian, Dietician Palesa offers worldclass nutritional advice and products. 
                        </p>
                    </div>
                </Col>

                <Col>
                    <div className='pic py-3'>
                        <img src='static/images/palesa.jpg' className='img1' alt='founder' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>


  )
}

export default About
