import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from '@asgardeo/auth-react'

const config = {
  // signInRedirectURL: "https://067c129c-e443-4995-bbf1-61a56c126b88.e1-us-east-azure.choreoapps.dev",
  signInRedirectURL: "http://localhost:5173",
  clientID: "VdrluxHLBjFbLr9JY9f1whkUHcga",
  baseUrl: "https://api.asgardeo.io/t/sborg",
  scope: [ "openid","profile","email","group","urn:sborg:apiserviceuser:test" ]
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider config={ config }>
    <App />
    </AuthProvider>
  
)
