import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import CartShareDetailPage from './pages/CartShareDetailPage';
import CartSharePage from './pages/CartSharePage';
import MainPage from './pages/MainPage';

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
            </Routes>
        </>
    );
}

export default App;
