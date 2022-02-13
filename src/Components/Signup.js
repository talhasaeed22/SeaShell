import React from 'react'
import {Link} from 'react-router-dom'
import profile from '../img/profile.png';
import './Signup.css'
function Signup() {
    return (
        <>
            <div class="signup-container">
                <div class="signup_box" id="left_box">
                    <div class="image">
                        <img style={{display:'block', margin:'auto'}} src={profile} alt="" height="230px" width="230px" />
                    </div>
                    <div class="labels">
                        <h1>Let's get you started</h1>
                        <strong >Fill the form to create Account</strong>
                        <p>Already have an Account? <strong> <Link to="/Welcome">Click Here</Link> </strong></p>
                    </div>
                </div>
                <div class="signup_box" id="right_box">
                    <h1 style={{textDecoration:"underline"}}>Sign Up</h1>
                    <div class="content">
                        <form id="form" action="/addAdmin" method="post">
                            <label for="lname">Enter Your Name</label><br />
                            <input onfocusin="myFunction()" class="inp" type="text" name="lname" id="lname" placeholder="Name Here" />

                            <br /><br />
                            <label for="pass">Enter Password</label><br />
                            <input onfocusin="myFunction()" class="inp" type="password" name="pass" id="pass" placeholder="Must 1 Capital and numeric values (e.g Abc@1234)" />

                            <br /> <br />
                            <label for="email">Enter Email</label><br />
                            <input onfocusin="myFunction()" class="inp" type="email" name="email" id="email" placeholder="abc@example.com" />

                            <br /><br />
                            <label for="gender">Select Gender</label><br />
                            <select class="inp" name="gender" id="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>

                            <br /><br />
                            <label for="age">Enter Age</label><br />
                            <input onfocusin="myFunction()" class="inp" type="number" name="age" id="age" placeholder="Your Age" />

                            <br /> <br />
                            <input id="submit" type="submit" value="Submit" class="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup