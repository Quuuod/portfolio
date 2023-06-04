import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import runAllThemeFunctions from '../../scripts/runAllThemeFunctions';

import HomePage from '../HomePage/HomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

function App() {
  useEffect(() => runAllThemeFunctions());

  return (
    <div className="App">
      <Nav />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="*" element={<SummaryPage/>} />
        <Route path="*" element={<SummaryPage/>} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
