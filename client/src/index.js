import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
            <Routes>
                <Route element={<App />} path='/'/>
                <Route element={<Register />} path='/register'/>
                <Route element={<Login />} path='/login'/>
                {/* <Route element={<Dashboard />} path='/dashboard'/> */}
            </Routes>
    </BrowserRouter>
);

