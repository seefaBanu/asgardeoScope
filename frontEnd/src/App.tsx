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
          {state.isAuthenticated ? (
               <Route  path="/" element={<Home/>} />
          ):(
            <Route>
            <Route  path="/" element={<SignIn/>} />
            <Route  path='/*' element ={<h1>Not Authorized</h1> } />
            </Route>
          )}
         
    </Routes>
    </BrowserRouter>

  )
}

export default App
