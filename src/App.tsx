import { useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)



  const handelSignOut = () => {
    setIsAuthenticated(false);
    setUser('');
  }

  const handelSignIn = () => {
    setIsAuthenticated(true);
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h1>Welcome {user}</h1>
          <button onClick={() => handelSignOut()}>Sign out</button>
        </>
      ) :
        (
          <>
            <div style={{ margin: '20px' }}>
              <label style={{ marginRight: '20px' }}>Username</label>
              <input type="text" onChange={(e) => setUser(e.target.value)} style={{ marginBottom: '10px' }} />
            </div>
            <button onClick={() => handelSignIn()}>Sign in</button>

          </>
        )}

    </>
  )
}

export default App
