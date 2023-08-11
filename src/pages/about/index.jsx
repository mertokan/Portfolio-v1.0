import React from 'react'

const About = () => {
  return (
    //<!-- Start About Seciton -->
    <section id='about' className='st-about-wrap h-screen'>
      <div className='st-height-b100 st-height-lg-b80'></div>
      <div className='container'>
        <div className='st-section-heading st-style1'>
          <h4 className='st-section-heading-title'>ABOUT ME</h4>
          <h2 className='st-section-heading-subtitle'>ABOUT ME</h2>
        </div>
        <div className='st-height-b25 st-height-lg-b25'></div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 wow fadeInLeft'>
            <div className='st-about-img-wrap'>
              <div
                className='st-about-img st-dynamic-bg st-bg'
                data-src='assets/img/section/about.jpg'
              ></div>
            </div>
            <div className='st-height-b0 st-height-lg-b30'></div>
          </div>
          <div className='col-lg-6'>
            <div className='st-vertical-middle'>
              <div className='st-vertical-middle-in'>
                <div className='st-text-block st-style1'>
                  <h2 className='st-text-block-title'>Hi There! I'm Edward Davis</h2>
                  <h4 className='st-text-block-subtitle'>Visual Designer</h4>
                  <div className='st-text-block-text'>
                    <p>
                      I am a Visual Designer with a strong focus on digital branding. Visul design
                      seeks to attract, inspire, create desires and motivate people to respond to
                      messages, with a view to making a favorable impact.
                    </p>
                  </div>
                  <ul className='st-text-block-details st-mp0'>
                    <li>
                      <span>Birthday</span> : <span>May 07, 1990</span>
                    </li>
                    <li>
                      <span>Phone</span> : <span>+1 876-369-9009</span>
                    </li>
                    <li>
                      <span>Email</span> : <span>devis@example.com</span>
                    </li>
                    <li>
                      <span>From</span> : <span>2661 Hich meadow lane bear creek</span>
                    </li>
                    <li>
                      <span>Language</span> : <span>English, Germanic</span>
                    </li>
                    <li>
                      <span>Freelance</span> : <span>Available</span>
                    </li>
                  </ul>
                  <div className='st-text-block-btn'>
                    <a href='#' className='st-btn st-style1 st-color1'>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //<!-- End About Seciton -->
  )
}

export default About
