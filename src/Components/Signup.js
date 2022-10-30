import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profile from '../img/profile.png';
import './Signup.css'
function Signup() {
    const url = 'http://localhost:5000';
    const [signupCred, setSignupCred] = useState({ name: "", email: "", password: "", age: "", gender: "" });
    let nevigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch(`${url}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: signupCred.name, email: signupCred.email, password: signupCred.password, age: signupCred.age })
        });
        const json = await response.json();
        console.log(json);
        alert('User Signed Up')
        nevigate('/')

    }
    const onChange = (e) => {
        setSignupCred({ ...signupCred, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div class="signup-container">
                <div class="signup_box" id="left_box">
                    <div class="image">
                        <img style={{ display: 'block', margin: 'auto' }} src={profile} alt="" height="230px" width="230px" />
                    </div>
                    <div class="labels">
                        <h1>Let's get you started</h1>
                        <strong >Fill the form to create Account</strong>
                        <p>Already have an Account? <strong> <Link to="/Welcome">Click Here</Link> </strong></p>
                    </div>
                </div>
                <div class="signup_box" id="right_box">
                    <h1 style={{ textDecoration: "underline" }}>Sign Up</h1>
                    <div class="content">
                        <form id="form" method="post">
                            <label for="lname">Enter Your Name</label><br />
                            <input onChange={onChange} onfocusin="myFunction()" class="inp" type="text" name="name" id="lname" placeholder="Name Here" />

                            <br /><br />
                            <label for="pass">Enter Password</label><br />
                            <input onChange={onChange} onfocusin="myFunction()" class="inp" type="password" name="password" id="pass" placeholder="Must 1 Capital and numeric values (e.g Abc@1234)" />

                            <br /> <br />
                            <label for="email">Enter Email</label><br />
                            <input onChange={onChange} onfocusin="myFunction()" class="inp" type="email" name="email" id="email" placeholder="abc@example.com" />

                            <br /><br />
                            <label for="gender">Select Gender</label><br />
                            <select onChange={onChange} class="inp" name="gender" id="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>

                            <br /><br />
                            <label for="age">Enter Age</label><br />
                            <input onChange={onChange} onfocusin="myFunction()" class="inp" type="number" name="age" id="age" placeholder="Your Age" />

                            <br /> <br />
                            <input onClick={handleSignup} id="submit" type="submit" value="Submit" class="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup