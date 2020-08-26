import React from 'react';
//import logo from './logo.svg';
import './App.css';
import RoutesFile from './routes/RoutesFile';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Header />
        <RoutesFile />
        <Footer />
        
    </div>
  );
}

export default App;
