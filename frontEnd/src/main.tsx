import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from '@asgardeo/auth-react'

const config = {
  // signInRedirectURL: "https://067c129c-e443-4995-bbf1-61a56c126b88.e1-us-east-azure.choreoapps.dev",
   signInRedirectURL: "http://localhost:5173",
  clientID: "2a6xzZy6XhNwPS9g0nP1q6w6_4Ea",
  baseUrl: "https://api.asgardeo.io/t/eternity",
  scope: [ "openid","profile","email","group" ]
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider config={ config }>
    <App />
    </AuthProvider>
  
)
