import '../src/Styles/App.css';
import React, { createContext, useState } from 'react';
import Home from './Pages/Home';
import NavBar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState({}) 

  return (
    <UserContext.Provider value={{user, setUser}} >
      <div className="App">
        <NavBar />
        <div id='content'>
          <Routes >
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
