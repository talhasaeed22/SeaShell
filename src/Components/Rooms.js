import React, { useState, useEffect } from 'react'
import Roomitems from './Roomitems'
import './Rooms.css'

function Rooms(props) {

    const [rooms, setRooms] = useState([])

    const url = 'http://localhost:5000';
    const fetchall = async ()=>{
        const response = await fetch( `${url}/api/rooms/fetchall` , {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'category':`${props.category}`
            }
        });
        const jsonresponse = await response.json();
        
        console.log(jsonresponse);
        setRooms(jsonresponse);
    }
    useEffect(() => {
      fetchall()
    }, [])
    
    
    return (
        <>
        <div className="header">
            <div className='image' id={`${props.category === 'Standard'?'standard-image' : props.category === 'Luxury'? "luxury-image":"deluxe-image"}`}>

            </div>
        </div>
            <h1 className='my-4' style={{textAlign:'center', textDecoration:"underline"}}>{props.category} Rooms</h1>
            <div className="container">
                <div className="row">
                    {rooms.map(room => {
                        return <div className="col-md-4 col-sm-12 my-4 ">
                            <Roomitems category={props.category} room ={room}/>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Rooms
