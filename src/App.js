import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Cookies } from 'react-cookie';
import CartShareDetailPage from './pages/order/CartShareDetailPage';
import CartSharePage from './pages/order/CartSharePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/mbr/LoginPage';
import ItemListPage from './pages/item/ItemListPage';
import ItemDetailPage from './pages/item/ItemDetailPage';
import AuthLayout from './containers/mbr/AuthLayout';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    word-break: keep-all;
    width: auto;
    height: 100vh;
    background: #f2f2f2;
    font-family: 'line';
    align-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
    border-radius: 20px;
    width: 380px;
    height: 880px;
    background: white;
    font-family: 'line';
`;

function App() {
    return (
        <>
            <GlobalStyle />

            <Container>
                <Routes>
                    <Route path="/cart-share" element={<CartSharePage />} />
                    <Route path="/cart-share/:cartShareId" element={<CartShareDetailPage />} />
                    <Route path="/login" element={<LoginPage />} />

                    <Route element={<AuthLayout />}>
                        <Route path="/" element={<ItemListPage />} />
                        <Route path="/item-list" element={<ItemListPage />} />
                        <Route path="/item/:itemId" element={<ItemDetailPage />} />
                    </Route>
                </Routes>
            </Container>
        </>
    );
}

export default App;
