import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import { useAuthContext } from '@asgardeo/auth-react'
import SignIn from './pages/SignIn';
import { useEffect } from 'react';
import Home from './pages/Home';

function App() {

  const {state} = useAuthContext();

  useEffect(() => {
    console.log(state)
  } , [state])

  return (
    <BrowserRouter>
    <Routes>
          <Route  path="/" element={<SignIn/>} />
          <Route  path="/home" element={<Home/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
