import React from 'react'


function Banner() {
  return (
    <div>
      <section className='banner-section text-black text-center pt-5' id='banner'>
        <div className="row">
          <div className="col-12 mt-4">
            <h3>Hi Iam </h3>
            <h3>Ananthan <span className='bg-red change-colour'>sp</span></h3>
            <h3 className='bg-red change-colour'>Freelancer</h3>
            <h2 className='change-colour'><span>Web Developer</span><br /><span>Web Designer</span><br /><span>Full Stack Developer</span></h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
