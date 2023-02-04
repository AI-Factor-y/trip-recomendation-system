import React from "react";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={ <Login/>} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App
