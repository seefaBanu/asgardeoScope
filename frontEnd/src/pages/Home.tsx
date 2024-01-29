import { useAuthContext } from "@asgardeo/auth-react"
import { useEffect,useState } from "react";

function Home() {
    const {getBasicUserInfo,signOut} = useAuthContext();
    const [userInfo, setUserInfo] = useState('') || null;

  useEffect(() => {
    getBasicUserInfo()
    .then((res) => {
      console.log(res);
      if(res.email){
      setUserInfo(res.email);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  } , [getBasicUserInfo()])

  return (
    <>
    <div style={{display:"flex"}}>
      <h3>user name : </h3>
      <h3 style={{marginLeft: "20px"}}>{userInfo}</h3>
    </div>
    
    <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}

export default Home