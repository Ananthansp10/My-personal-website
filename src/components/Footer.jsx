import React from 'react'

function Footer() {
  return (
    <div>
        <section className='text-center text-white pt-2 bg-dark'>
            <div className="container">
                <h2>Social <span className='bg-red'>Connection</span></h2>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
                        <p>Copyright <i class="fa-solid fa-copyright"></i> Ananthan sp</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h6>This Website Was Developed By Ananthan <span className='bg-red'>sp</span></h6>
                    </div>
                    <div className="col-sm-12">
                    <a href="https://www.linkedin.com/in/ananthan-sp-51197b259/" className='icon'><i class="fa-brands fa-linkedin ms-2 icons"></i></a> <a href="https://www.instagram.com/ananthan_07/" className='icon'><i class="fa-brands fa-instagram ms-2 icons"></i></a> <a href="https://github.com/Ananthansp10" className='icon'><i class="fa-brands fa-github ms-2 icons"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
