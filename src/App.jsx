
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import EventsPage from './components/EventPage/EventsPage.jsx';

import './styles/styles.css';


function App() {
  return (
    <div className="my-app">
      <Router>

        <Routes>

          <Route path="/" element={<HomePage />} />


          <Route path="/events" element={<EventsPage />} />


          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;