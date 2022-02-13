import React from 'react'
import {Link} from 'react-router-dom'
import './Welcome.css'

function Welcome() {
    return (
        <>
            <div className="login-container">
                <div className="box" id="left_box">
                    <br />
                    <h1 style={{textDecoration:"underline"}}>Admin Login</h1>
                    <div className="content">
                        <br />
                        <form >
                            <label htmlFor="email">Enter Email</label><br />
                            <input className="inp adminEmail" type="email" name="email" id="email" placeholder="abc@example.com" />
                            <label className="error" id="usrname_error"></label>
                            <br /><br />
                            <label htmlFor="pass">Enter Password</label><br />
                            <input className="inp" type="password" name="pass" id="pass" placeholder="******** (8 Digit)" />
                            <label className="error" id="pass_error"></label>
                            <br />
                            <input type="submit" value="SignIn" className="welcome-btn" />
                        </form>
                    </div> <br />
                    <label htmlFor="create_acc">New to our app? <strong> <Link id="create_aacount" to="/Signup">Create Account</Link> </strong></label>
                </div>
                <div className="box" id="right_box">
                    <div style={{padding:'18%'}} className="d-flex flex-column align-items-center">
                        <h2 style={{textAlign:'center'}}>Welcome to Our App</h2> <br />
                        <p style={{textAlign:'center'}}>Please Enter your Login Information Correctly to use our app. </p> <br />
                        <p style={{textAlign:'center'}}>You are required to login in order to book any room</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome