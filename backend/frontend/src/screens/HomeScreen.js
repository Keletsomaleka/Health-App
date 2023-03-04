import React, { useState, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import Program from '../components/Program'
import CallAction from '../components/CallAction'
import About from '../components/About'
import axios from 'axios'

function HomeScreen() {

    const [programs, setPrograms] = useState([])

    useEffect(() => {

        async function fetchPrograms (){
            const { data } = await axios.get('/api/programs/')
            setPrograms(data)
        }
        fetchPrograms()
    },[])

    return (
    <div>
        <Row>
            <CallAction />
        </Row>

        <Row>
            <div className='about'>
            <About />
            </div>
        </Row>
        <h1 className='text-center py-3 '>Check out our challenges</h1>
        <Row>
            {programs.map(program => (
                        <Col key={program.id} sm={12} md={6} lg={4} xl={3}>
                        
                            <Program program={program} />
                        </Col>
                    ))}
        </Row>
    </div>
    )
}

export default HomeScreen
