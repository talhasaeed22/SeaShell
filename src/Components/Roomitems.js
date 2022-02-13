import React from 'react'
import standard from '../img/standard.jpg';

function Roomitems(props) {
    
    return (
        <>
            <div className="card" style={{border:'2px solid grey'}} >
                <img src={standard} className="w-50 " style={{paddingTop:'5px', display:'block', margin:'auto'}} alt="..."/>
                    <div className="card-body">
                        <h3 style={{textDecoration:'underline'}} className="card-title">Room No: {props.room.Number}</h3>
                        <strong><p className="card-title">Type: {props.room.Type}</p></strong>
                        <strong><p className="card-title">Category: {props.room.Category}</p></strong>
                        <strong><p className="card-title">Price: {props.room.Price}</p></strong>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" style={{display:'block', margin:'auto'}} className="btn ">Book Now!!!</a>
                    </div>
            </div>
        </>
    )
}

export default Roomitems