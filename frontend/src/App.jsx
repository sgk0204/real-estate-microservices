import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PropertyDetails from './pages/PropertyDetails';
import AddProperty from './pages/AddProperty';
import { AuthContext } from './context/AuthContext';
import './App.css';

function App() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          Real Estate Platform
        </Link>
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {currentUser ? (
            <>
              <li className="nav-item">
                <Link to="/add-property" className="nav-link">
                  Add Property
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logout}>
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-link">User: {currentUser.username}</span>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
