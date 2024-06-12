import React from 'react';
import Login from "./pages/login";
import Register from './pages/register';
// // import Dashboard from "./pages/Dashboard"
import RegisterConfirmation from "./pages/registerConfirmation";
import {
  BrowserRouter,
  Route,
  Router,
  Routes
} from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/confirm-registration" element={<RegisterConfirmation />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
