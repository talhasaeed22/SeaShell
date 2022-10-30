import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Welcome.css'

function Welcome() {
    const url = 'http://localhost:5000';

    const [loginCred, setLoginCred] = useState({email:"", password:""});
    let nevigate = useNavigate();


    const handleLogin = async (e)=>{
        if(loginCred.password.length < 5 || loginCred.email.length === 0){
            alert("please Enter Valid Email and Password")
            e.preventDefault();
        }else{

            e.preventDefault();
            const response = await fetch(`${url}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email:loginCred.email, password:loginCred.password})
            });
            const json = await response.json();
        
                localStorage.setItem('token', json.token);
                localStorage.setItem('name', json.name);
                alert('logged in successfully')
                nevigate('/')
        }
    }
    const onChange = (e) => {
        setLoginCred({ ...loginCred, [e.target.name]: e.target.value })
    }
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
                            <input onChange={onChange} className="inp adminEmail" type="email" name="email" id="email" placeholder="abc@example.com" />
                            <label className="error" id="usrname_error"></label>
                            <br /><br />
                            <label htmlFor="pass">Enter Password</label><br />
                            <input onChange={onChange} className="inp" type="password" name="password" id="pass" placeholder="******** (8 Digit)" />
                            <label className="error" id="pass_error"></label>
                            <br />
                            <input onClick={handleLogin} type="submit" value="SignIn" className="welcome-btn" />
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