import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './pages/Layout';
import AddGame from './pages/AddGame';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path='Login' element={<Login/>} />
            <Route path='Dashboard' element={<AdminDashboard/>} />
            <Route path='AddGame' element={<AddGame/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
