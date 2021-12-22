import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import CreatorNav from './components/Nav/CreatorNav';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Creator from './pages/CreatorCenter/Creator';
import CreatorEdit from './pages/CreatorCenter/CreatorEdit';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import CreatorNav from './components/Nav/CreatorNav';
import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />
      <CreatorNav />
      <Routes>
        <Route path="/:id" element={<ProductList />} />
        <Route path="/category" element={<ProductListCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/creator/:id/edit" element={<CreatorEdit />} />
        <Route
          path="/login"
          element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
      </Routes>
      <Footer isLogin={isLogin} setIsLogin={setIsLogin} />
    </BrowserRouter>
  );
};
