import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Creator from './pages/Creator/Creator';
import Login from './pages/Login/Login';
import CreatorNav from './components/Nav/CreatorNav';

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/category/:id" element={<ProductList />} />
      <Route path="/detail/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/creator" element={<Creator />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
