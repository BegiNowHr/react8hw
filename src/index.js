import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LessonPage from './main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <LessonPage/>
  </React.StrictMode>
);
