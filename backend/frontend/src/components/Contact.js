import React from 'react'
import { Form , Button } from 'react-bootstrap'

function Contact() {
  return (
    
    <Form>
       <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Disabled input" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Subject</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>

  )
}

export default Contact
