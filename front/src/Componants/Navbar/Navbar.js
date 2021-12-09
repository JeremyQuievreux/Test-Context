import React, { useContext } from 'react'
import './Navbar.sass';
import UserContext from '../../Context/UserContext';

function Navbar() {

    const UserContextValue = useContext(UserContext);

    return (
        <nav className='navbar-container'>
            <div className="navbar-title">
                <h1>Context Test</h1>
            </div>
            <div className="navbar-menu">
                <p>{UserContextValue.name}</p>
            </div>
        </nav>
    )
}

export default Navbar
