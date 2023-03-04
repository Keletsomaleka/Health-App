import React from 'react'
import { Container,Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-5'>
                    Copyright &copy; Keletso Maleka
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
