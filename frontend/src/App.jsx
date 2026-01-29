
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {


  return (
    <>
      <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
