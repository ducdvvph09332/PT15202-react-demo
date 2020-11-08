import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'
import Products from './Products';
import Header from './Header';
import Nav from './Nav';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Nav/>
      <Products/>
    </div>
  );
}

export default App;
