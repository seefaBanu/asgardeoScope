import { useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState('user')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if(isAuthenticated && user === 'admin') {
    return (
      <>
        <h1>Welcome {user}</h1>
        <button onClick={()=> setIsAuthenticated(false)}>Sign out</button>
      </>
    )
  }
  if(isAuthenticated && user === 'user') {
    return (
      <>
        <h1>Welcome {user}</h1>
        <button onClick={()=> setIsAuthenticated(false)}>Sign out</button>
      </>
    )
  }

  return (
    <>
       <button onClick={()=> setIsAuthenticated(true)}>Sign in</button>
    </>
  )
}

export default App
