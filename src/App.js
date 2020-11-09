import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import { productData } from './components/Products/data';
import Products from './components/Products'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading={'Choose your favourite'} data={productData} />
    </Router>
  );
}

export default App;
