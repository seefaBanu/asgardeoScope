import { useAuthContext } from "@asgardeo/auth-react"

function Home() {
    const { signOut} = useAuthContext()
  return (
    <>
    <h1>You are  logged in</h1>
    <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}

export default Home