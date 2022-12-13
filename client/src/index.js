import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import ContextProvider from './components/Context';
import Dashboard from './components/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ContextProvider>
        <BrowserRouter>
                <App />
                <Routes>
                    <Route element={<Register />} path='/register'/>
                    <Route element={<Login />} path='/login'/>
                    <Route element={<Dashboard />} path='/dashboard'/>
                </Routes>
        </BrowserRouter>
    </ContextProvider>
);

