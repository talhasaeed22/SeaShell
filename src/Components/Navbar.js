import React from 'react';
import logo from '../img/logo.png'
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar(props) {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/Welcome`;
        navigate(path);
    }
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/Signup');
    }
    const location = useLocation();
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link id='logo' className="text-light navbar-brand" to="/">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Sea Shell
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-4"><Link className={`nav-link ${location.pathname === '/Standard' ? "active" : ""}`} aria-current="page" to="/Standard">Standard</Link></li>

                            <li className="nav-item mx-4"><Link className={`nav-link ${location.pathname === '/Luxury' ? "active" : ""}`} aria-current="page" to="/Luxury">Luxury</Link></li>

                            <li className="nav-item mx-4"><Link className={`nav-link ${location.pathname === '/Deluxe' ? "active" : ""}`} aria-current="page" to="/Deluxe">Deluxe</Link></li>


                            <li className="nav-item mx-4">
                                <Link className={`nav-link ${location.pathname === '/About' ? "active" : ""}`} aria-current="page" to="/About">About</Link>
                            </li>
                        </ul>
                        <div style={{ fontSize: '1.1rem' }} className={` form-check form-switch text-light mx-3 `}>
                            <input className="form-check-input" style={{ cursor: 'pointer' }} type="checkbox" onClick={props.switchMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                        </div>
                        <div>
                        </div>
                        {!localStorage.getItem('token')?<div id='nav-bbtn' className="d-flex">
                            <button onClick={routeChange} className="nav-btn">Sign In</button>
                        </div>:<label style={{fontSize:'1.2rem'}} className={`text-${props.mode === 'light' ? 'black' : 'light'}`}> Hello, Welcome Back <button style={{padding:'9px 9px'}} onClick={handleLogout} className="nav-btn mx-2" id="signup">Logout</button> </label>}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
