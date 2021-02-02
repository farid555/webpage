import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>LoGo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/AddInfo">
                    <li>Add Info</li>
                </Link>
                <Link style={navStyle} to="/About Us">
                    <li >About Us</li>
                </Link>

            </ul>
        </nav>
    )
}
export default Nav;