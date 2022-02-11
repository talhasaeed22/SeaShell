import React from 'react'
import Roomitems from './Roomitems'
// import luxury from '../img/luxury.jpg'
// import deluxe from '../img/Deluxe.jpeg'
// import standard from '../img/standard.jpg'
import './Rooms.css'

function Rooms(props) {
    const rooms = [
        23,
        24,
        25,
        25,
        25,
        25,
        25,
        25,
        25,
        25,
        25,
    ]
    return (
        <>
        <div className="header">
            {/* <img id="image" src={props.category === 'Standard'?standard : props.category === 'Luxury'? "":""} class="img-fluid" alt="..."/> */}
            <div className='image' id={`${props.category === 'Standard'?'standard-image' : props.category === 'Luxury'? "luxury-image":"deluxe-image"}`}>

            </div>
        </div>
            <h1 className='my-4' style={{textAlign:'center'}}>{props.category}</h1>
            <div className="container">
                <div className="row">
                    {rooms.map(element => {
                        return <div className="col-md-4 col-sm-12 my-4 ">
                            <Roomitems category={props.category}/>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Rooms