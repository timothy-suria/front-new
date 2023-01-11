import React from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Index from './components/pages/admin/dashboard/Index';
import Register from './components/admin/form/RegisterComponent';
import Login from './components/admin/form/FormLoginComponent';


function App() {
  return (
      <BrowserRouter>
   
      <Routes>
        <Route path="/dashboard-admin" element={<Index/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

