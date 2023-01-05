import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
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
            </Routes>
        </>
    );
}

export default App;
