import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDel57Md6JZQtxWFXtsMRyIA0_kM4jxHtg",
  authDomain: "react-chat-app-706c4.firebaseapp.com",
  databaseURL: "https://react-chat-app-706c4-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-706c4",
  storageBucket: "react-chat-app-706c4.appspot.com",
  messagingSenderId: "649661168607",
  appId: "1:649661168607:web:c6c0cae9b13603110fa26a"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
