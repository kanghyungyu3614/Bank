import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from './component/Index.jsx'
import Signup from "./component/bank/Signup"; // 회원가입
import 'bootstrap/dist/css/bootstrap.min.css'


import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);
*/


root.render(
    <React.StrictMode>
        <Signup/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
