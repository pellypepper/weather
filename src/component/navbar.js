import React, { useRef } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import cloudyIcon from '../assets/cloudy.png';


export default function NavBar() {

    const menuRef = useRef(null)
    function handleClick() {
        if (menuRef) {
            menuRef.current.classList.toggle('visible')
        }
    }

    return (
        <div className='nav-container'>
            <nav>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={cloudyIcon} alt="Weather Icon" />;<h1 style={{ color: "white" }}>Weather</h1>
                </div>

                <div className='menu-flex'>

                    <ul ref={menuRef}>
                        <Link to="/" > <li>Home</li></Link>
                        <Link to='/forecast'><li>Forecast</li></Link>
                        {/* <Link to='/history'><li>History</li></Link> */}
                    </ul>
                    <div className='btn' onClick={handleClick} >
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}