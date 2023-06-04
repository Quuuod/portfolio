import React, { useEffect } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import runAllThemeFunctions from '../../scripts/runAllThemeFunctions';

function App() {
  useEffect(() => runAllThemeFunctions());

  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
