'use client'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './contactForm.css'

const ContactForm = () => {
  return (
    <div className='form'>
      <h3>Contact Me</h3>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder='Enter message' />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm
