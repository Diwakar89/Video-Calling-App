import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div>
      <Toaster position='top-right' />
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route element={<Home />} path="" />
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Register />} path="register" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;