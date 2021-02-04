import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';

function Nav() {

    const navStyle = {
        color: 'white'
    }
    return (
        <Navbar >
            <h3>Cnavas</h3>
            <nav className="nav-links">
                <Link style={navStyle} to="/">
                    <ul>Home</ul>
                </Link>
                <Link style={navStyle} to="/AddInfo">
                    <ul>Add Info</ul>
                </Link>
                <Link style={navStyle} to="/About Us">
                    <ul>About Us</ul>
                </Link>

            </nav>
        </Navbar>
    )
}
export default Nav;