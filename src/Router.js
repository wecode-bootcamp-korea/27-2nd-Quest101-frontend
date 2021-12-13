import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Creator from './pages/Creator/Creator';

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/:id" element={<ProductList />} />
      <Route path="/detail/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/creator" element={<Creator />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
