import React, { useState, useEffect } from 'react'
import { Form , Button } from 'react-bootstrap'
import axios from 'axios'

function ContactScreen() {

    const [name, setName ] = useState()
    const [email, setEmail ] = useState()
    const [subject, setSubject ] = useState()
    const [message, setMessage ] = useState()

    useEffect(()=>{

        async function postContactData() {
            const { data } = await axios.post(`/api/contacts/`,{
                name:name,
                email:email,
                subject:subject,
                message:message
            })
        }
        postContactData()
    })

    return (
        <Form className='my-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name"  onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setSubject(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
    )
}

export default ContactScreen
