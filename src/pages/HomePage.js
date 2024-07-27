
import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

const HomePage = () => {
    return (
        <div className="Home">
          <Header />
          <Home />
          <Footer />
        </div>
      );
};

export default HomePage;
