import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const App =() => {
    return (
        <>
        <Navbar />
         <div className="max-w-7xl mx-auto pt-20 px-6">
            <LandingPage />
        </div>
        </>
    )
}

export default App;