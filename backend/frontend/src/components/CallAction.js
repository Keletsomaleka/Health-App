import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useSearchParams, useNavigate, redirect } from 'react-router-dom'

function CallAction() {

  let navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  const redir = searchParams.get('redirect') ? searchParams.get('redirect') : '/'

  const routeChange = () => {
    let path = '/register'
    navigate(path)
  }

  return (
    <section className='call_action mt-5'>
        <h3 className='callfont py-5'>Join our community!</h3>
        <Row>
            <Col>
                <div className='center'>
                    <button className='btn btn-success' onClick={routeChange}
                    >Sign Up</button>
                </div>
            </Col>
        </Row>
    </section>
  )
}

export default CallAction
