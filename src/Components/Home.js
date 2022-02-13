import React from 'react'
import './Home.css'
import breakfast from '../img/breakfast.png'
import mountains from '../img/mountains.png'
import pool from '../img/pool.png'

const Home = () => {
  return (

    <>
      <div className='home-image'>
        {/* <Content/> */}
        <div className="container home-container d-flex flex-column justify-content-center align-items-center">
          <h1 className='p-heading' >Once a year go someplace you've never been before.</h1>
          <div className="row service-row p-5">
            <h1 style={{textAlign:'center'}} className="pb-2">Our Services</h1>
            <div className="col-md-4 col-sm-12">
              <div className="home-card card" style={{width: "18rem"}}>
                <img src={breakfast} className="card-img-top" alt="Breakfast"/>
                  <div className="card-body">
                    <h3 className="card-title">Free Breakfast</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="home-card card" style={{width: "18rem"}}>
                <img src={pool} className="card-img-top" alt="Pool"/>
                  <div className="card-body">
                    <h3 className="card-title">Swimming Pool</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                  </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="home-card card" style={{width: "18rem"}}>
                <img src={mountains} className="card-img-top" alt="Trekking"/>
                  <div className="card-body">
                    <h3 className="card-title">Trekking</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home