import React, { useContext } from 'react'
import './Footer.sass'

import UserContext from '../../Context/UserContext'


function Footer() {

    const UserContextValue = useContext(UserContext);

    return (
        <footer className="footer-container">
            <p>{UserContextValue.name}</p>
        </footer>
    )
}

export default Footer
