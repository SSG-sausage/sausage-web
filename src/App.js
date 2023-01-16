import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import CartShareDetailPage from './pages/order/CartShareDetailPage';
import CartSharePage from './pages/order/CartSharePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/mbr/LoginPage';
import ItemListPage from './pages/item/ItemListPage';
import ItemDetailPage from './pages/item/ItemDetailPage';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    word-break: keep-all;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cart-share" element={<CartSharePage />} />
                <Route path="/cart-share/:cartShareId" element={<CartShareDetailPage />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/item-list" element={<ItemListPage/>} />
                <Route path="/item/:itemId" element={<ItemDetailPage />} />


            </Routes>
        </>
    );
}

export default App;
