import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from '@asgardeo/auth-react'

const config = {
  signInRedirectURL: "https://localhost:5173",
  clientID: "SYwidN5DlMTP51JStxbTOgVT2_Ia",
  baseUrl: "https://api.asgardeo.io/t/sborg",
  scope: [ "openid","profile" ]
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider config={ config }>
    <App />
    </AuthProvider>
  
)
