import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Program({ program }) {
  return (
    <Card className='my-3 p-3 Card rounded center green'>
        <Link to={`/program/${program.id}`}>
            <Card.Img src={program.thumbnail}/>

        </Link>

        <Card.Body>
            <Link to={`/program/${program.id}`} className='program-link'>
                <Card.Title as="div" className='card-title'>
                   {program.name}
                </Card.Title>
            </Link>

        </Card.Body>

    </Card>

    
  )
}


export default Program
