import { useAuthContext } from '@asgardeo/auth-react'

export default function SignIn() {
  const {state,signIn,signOut } = useAuthContext();

  return (
    <div>
      {state.isAuthenticated ? (
        <>
                  
                  <h1>You are  logged in</h1>
                  <button onClick={() => signOut()}>Sign Out</button>
        </>

        ) :
          (
            <>
            <h1>You are not logged in</h1>
            <button onClick={() => signIn()}>Sign in</button>
            </>
          )
          }

    </div>
  )
}
