import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Cookies } from 'react-cookie';
import CartShareDetailPage from './pages/cartshare/CartShareDetailPage';
import CartSharePage from './pages/cartshare/CartSharePage';
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
    width: 390px;
    height: 844px;
    background: white;
    font-family: 'line';

    #status-bar {
        border-radius: 20px 20px 0px 0px;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />

            <Container>
                <img id="status-bar" src={require('./assets/status-bar.png')} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/cart-share" element={<CartSharePage />} />
                    <Route path="/cart-share/:cartShareId" element={<CartShareDetailPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/item-list" element={<ItemListPage />} />
                    <Route path="/item/:itemId" element={<ItemDetailPage />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
