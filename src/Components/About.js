import React from 'react'
import pic from '../img/about.png'
import './About.css';

const About = () => {
  return (
    <>
      <div className="container my-5 d-flex about-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img style={{borderRadius:'21px'}} src={pic} alt="about" className="w-100 thumbnail" />
          </div>
          <div className="col-lg-6 col-md-12 text">
            <h1>About Hotel</h1>
            <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            <br /><br /> <br />
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About