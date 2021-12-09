import './App.sass';

import React, { useState } from 'react';

import HomePage from './Componants/HomePage/HomePage';
import Navbar from './Componants/Navbar/Navbar';
import Footer from './Componants/Footer/Footer';

import UserContext from './Context/UserContext';

function App() {

  const [userName, setUserName] = useState("Maurice")

  const UserContextValue = {
    name: userName,
    updateName: setUserName,
  }

  return (
    <UserContext.Provider value={UserContextValue}>

      <div className="App">
        <Navbar/>
        <HomePage/>
        <Footer/>
      </div>

    </UserContext.Provider>
  );
}

export default App;
