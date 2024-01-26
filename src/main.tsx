import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from '@asgardeo/auth-react'

const config = {
  signInRedirectURL: "https://067c129c-e443-4995-bbf1-61a56c126b88.e1-us-east-azure.choreoapps.dev",
  //  signInRedirectURL: "https://localhost:5173/",
  clientID: "SYwidN5DlMTP51JStxbTOgVT2_Ia",
  baseUrl: "https://api.asgardeo.io/t/sborg",
  scope: [ "openid","profile","email","group" ]
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider config={ config }>
    <App />
    </AuthProvider>
  
)
