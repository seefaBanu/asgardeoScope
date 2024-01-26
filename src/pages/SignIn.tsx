import { useAuthContext } from '@asgardeo/auth-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; // Import useEffect

export default function SignIn() {
  const { state, signIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.isAuthenticated) {
      navigate('/home');
    }
  }, [state, navigate]);

  return (
    <div>
      {!state?.isAuthenticated && (
        <div>
          <h1>You are not logged in</h1>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
    </div>
  );
}
