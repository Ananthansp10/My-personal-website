import React from 'react';

function About() {
  return (
    <div>
      <section className='bg bg-dark text-white text-center mt-2 pt-5' id='about'>
        <div className="container">
          <div className="row">
            <h2>About <span className='bg-red'>Me</span></h2>
            <div className="col-12 col-md-6 pt-3 ms-auto my-auto">
              <p className='text-white para'>Hello Iam Ananthan sp and Iam a Web Designer and Iam Studying Full Stack Development in MERN Stack</p>
              <p className='para'> Everybody in this country should learn to program a computer because it teaches you how to think </p>
            </div>
            <div className="col-12 col-md-6  mx-auto mt-2">
              <div className="profile-image ms-auto">
                <img src='./images/profile-picture.jpg' className='rounded-circle' width="300px" height="300px" alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
