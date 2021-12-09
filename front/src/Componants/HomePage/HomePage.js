import React, { useContext, useState } from 'react'
import './HomePage.sass';

import UserContext from '../../Context/UserContext';

function HomePage() {

    const UserContextValue = useContext(UserContext);
    
    const [userName, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userName);
        UserContextValue.updateName(userName);
        setUserName("");
    }

    return (
        <div className='home-page-main-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-line">
                    <label htmlFor="name">Votre prénom : </label>
                    <input type="text" name="name" id="name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <button type='submit'>Enregistrer</button>
            </form>
            
        </div>
    )
}

export default HomePage
