import './App.css'
import { useAuthContext } from '@asgardeo/auth-react'

function App() {

  const {state,signIn,signOut} = useAuthContext();

  return (
    <>
      {state.isAuthenticated ? (
        <>
          {/* <h1>Welcome {stateuser}</h1> */}
          <button onClick={() => signOut}>Sign out</button>
        </>
      ) :
        (
          <>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}

    </>
  )
}

export default App
