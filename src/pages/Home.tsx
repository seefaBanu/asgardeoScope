import { useAuthContext } from "@asgardeo/auth-react"

function Home() {
    const {state,signOut} = useAuthContext()
  return (
    <>
    <h1>{state.displayName} are  logged in</h1>
    <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}

export default Home