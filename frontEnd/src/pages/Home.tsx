import { useAuthContext } from "@asgardeo/auth-react"
import { useEffect,useState } from "react";
import axios from 'axios';

function Home() {
    const {getBasicUserInfo,signOut,getAccessToken} = useAuthContext();
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

  useEffect(() => {
    getAccessToken().then((token) => {
      console.log(token);
    axios.get('https://a1e2c832-3205-42a5-ba03-4441268b25aa-dev.e1-us-east-azure.choreoapis.dev/ikll/apiservice/user-294/v1/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res) => {
      console.log("response");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  })
  }
  , [])

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