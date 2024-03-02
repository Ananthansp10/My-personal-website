import React from 'react'
import { Card } from 'react-bootstrap'

function Skills() {
    return (
        <div>
            <section className='bg-black mt-1 pt-5' id='skills'>
                <div className="container">
                    <div className="row text-white text-center skills">
                        <h2>Ski<span className='bg-red'>lls</span></h2>
                        <div className="col-sm-12 col-md-3 mt-2 text-center pt-3">
                            <Card style={{ width: '18rem', height:'18rem'}}>
                            <i className="fa-brands fa-html5 fa-2xl mt-3"></i>
                                <Card.Body>
                                    <Card.Title>HTML</Card.Title>
                                    <Card.Text>
                                    HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is a combination of Hypertext and Markup language. Hypertext defines the link between web pages.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-2">
                            <Card style={{ width: '18rem', height:'18rem'}}>
                            <i class="fa-brands fa-css3-alt fa-2xl mt-3"></i>
                                <Card.Body>
                                    <Card.Title>CSS</Card.Title>
                                    <Card.Text>
                                       Css (Cascading Style Sheets) is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to HTML documents. It describes how a webpage should look. It prescribes colors, fonts, spacing, etc. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-2">
                            <Card style={{ width: '18rem', height:'18rem'}}>
                            <i class="fa-brands fa-js fa-2xl mt-3"></i>
                                <Card.Body>
                                    <Card.Title>Javascript</Card.Title>
                                    <Card.Text>
                                    Javascript (JS) is the top programming language for web development, used for both Client-Side and Server-Side purposes. It’s is also known as a scripting language for web pages.It is commonly used to create dynamic and interactive content on websites.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-2">
                            <Card style={{ width: '18rem', height:'18rem'}}>
                            <i class="fa-brands fa-bootstrap fa-2xl mt-3"></i>
                                <Card.Body>
                                    <Card.Title>Bootstrap</Card.Title>
                                    <Card.Text>
                                    Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-2">
                            <Card style={{ width: '18rem', height:'18rem'}}>
                            <i class="fa-brands fa-node fa-2xl mt-3"></i>
                                <Card.Body>
                                    <Card.Title>Nodejs</Card.Title>
                                    <Card.Text>
                                    NodeJS or Node.js is one of the powerful open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-2">
                            <Card style={{ width: '18rem', height:'18rem'}}>
                            <i class="fa-brands fa-react fa-2xl mt-3"></i>
                                <Card.Body>
                                    <Card.Title>React</Card.Title>
                                    <Card.Text>
                                    React is the most popular javascript library for building user interfaces. It is fast, flexible and it also has a strong community sitting online to help you every time.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-2">
                            <Card style={{ width: '18rem', height:'18rem'}}>
                            <i class="fa-solid fa-database fa-2xl mt-3"></i>
                                <Card.Body>
                                    <Card.Title>Mongodb Database</Card.Title>
                                    <Card.Text>
                                    MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-2">
                            <Card style={{ width: '18rem', height:'18rem'}}>
                            <i class="fa-brands fa-git fa-2xl mt-3"></i>
                                <Card.Body>
                                    <Card.Title>Git</Card.Title>
                                    <Card.Text>
                                    Git is a powerful and popular version control system that enables effective tracking of changes in source code. It was developed by Linus Torvalds in 2005 for Linux kernel development and It is used for keeping track of code changes and collaborating with others on code.
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

export default Skills
