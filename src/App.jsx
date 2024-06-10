// App.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импортируем BrowserRouter или HashRouter

import Home from "./pages/Home.jsx";

import Header from "./components/header.jsx";
import Primer from "./pages/Primer.jsx";

function App() {
    return (
        <Router> {/* Оборачиваем все компоненты в Router */}
            <Header />
            <div style={{ marginLeft: "122px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Route path="/page2" element={<Primer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
