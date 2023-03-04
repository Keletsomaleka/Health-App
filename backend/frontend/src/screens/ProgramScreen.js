import React, { useEffect, useState }  from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import axios from 'axios'

function ProgramScreen() {

    const navigate = useNavigate()
    const pk = useParams()
    const [program, setProgram] = useState([])

    useEffect(() => {

        async function fetchProduct(){

            const { data } = await axios.get(`/api/programs/${pk.id}`)
            setProgram(data)
        }
        fetchProduct()
    },[])

    const signMeUpHandler = () => {

        navigate(`/contact/`)

    }
    //const program = programs.find((p) => p._id == pr.id)

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={program.thumbnail} alt={program.name} fluid/>
            </Col>

            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>
                           { program.name}
                        </h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                     
                          Description: {program.description}
                       
                    </ListGroup.Item>
                </ListGroup>
            </Col>


            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>category:</Col>
                                <Col>
                                    <strong>{program.category}</strong>
                                </Col>
                            </Row>

                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                   {program.is_active == 'True' ? 'Currently active' : 'Not active'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <button onClick={signMeUpHandler} className='btn-block dark' type='button' disabled={program.is_active == 'False'}>Sign me up</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ProgramScreen
