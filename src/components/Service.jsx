import React from 'react'
import {Card} from 'react-bootstrap'

function Service() {
    return (
        <div>
            <section className='bg-black text-white text-center pt-5' id='service'>
            <h2 className='pt-3'>Ser<span className='bg-red'>vice</span></h2>
                    <div className="container service">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                            <Card style={{ width: '100%',height:'38rem'}}>
                                <Card.Img variant="top" src="./images/webdesign- image.jpg" />
                                <Card.Body>
                                    <Card.Title>Front-End <span className='bg-red'>Development</span></Card.Title>
                                    <Card.Text>
                                    Front-end Development is the development or creation of a user interface using some markup languages and other tools. It is basically the development of the user side where only user interaction will be counted. It consists of the interface where buttons, texts, alignments, etc are involved and used by the user.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                            <Card style={{ width: '100%',height:'38rem'}}>
                                <Card.Img variant="top" src="./images/webdevelopment- image.jpg" />
                                <Card.Body>
                                    <Card.Title>Back-End <span className='bg-red'>Development</span></Card.Title>
                                    <Card.Text>
                                    Backend Development refers to the server-side development of the web application. It is the part of the application where the server and database reside and the logics is build to perform operations. It includes the main features and functionalities of the application on the server. Programming languages for the backend are mainly Node. JS (for JavaScript), Django (for Python), Spring (Java), etc.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service
