import React from 'react'
import {Form} from'react-bootstrap'

function Contact() {
  return (
    <div>
      <section className='bg-black text-center text-white mt-1' id='contact-us'>
        <div className="container">
          <h2>Contact <span className='bg-red'>Us</span></h2>
          <div className="row">
            <div className="col-sm-12 mt-4">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Place</Form.Label>
                  <Form.Control type="text" placeholder="Enter your place" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder='Enter your message' />
                </Form.Group>
              </Form>
              <button className='btn btn-primary mb-3'>Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

