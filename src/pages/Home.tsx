import { useAuthContext } from "@asgardeo/auth-react"
import { useEffect } from "react";

function Home() {
    const {getBasicUserInfo,signOut} = useAuthContext();
    // const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    getBasicUserInfo()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  } , [])

  return (
    <>
    <h1>{} are  logged in</h1>
    <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}

export default Home