import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importando o Router
import './index.css';
import App from './pages/App';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Rota para Home */}
        <Route path="/login" element={<Login />} /> {/* Rota para Login */}        
        <Route path="/signup" element={<SignUp />} /> {/* Rota para SignUp */}
        <Route path="/profile" element={<Profile />} /> {/* Rota para Profile */}
        <Route path="/upload" element={<Upload />} /> {/* Rota para Profile */}
        
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
