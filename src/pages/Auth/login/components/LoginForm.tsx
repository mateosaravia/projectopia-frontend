import { useEffect, useState } from 'react';
import { postLogin } from '../../../../services/sessions/session-service';
import Cookies from 'js-cookie';
import useAuth from '../hooks/useAuth';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { isAuthenticated, logIn } = useAuth();

  const handleLogin = async (e: any) => {
    console.log('loginData', loginData);
    e.preventDefault();
    const response = await postLogin('mateo22@gmail.com', '@mateo123');

    if (response instanceof Error) {
      setError(true);
      setErrorMessage(''); // ver como devuelvo el mensaje
    } else {
      setError(false);
      Cookies.set('token', response.data.token);
      logIn('response.role');
    }
  };

  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <a className="mb-16 text-4xl font-bold text-tertiary-400">PROJECTOPIA</a>
      <div className="w-full rounded-lg bg-gradient-to-br from-primary-950 to-transparent shadow-lg shadow-black sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-3xl font-semibold text-tertiary-300">Sign in to your account</h1>
          <form onSubmit={handleLogin} className="space-y-2 md:space-y-4">
            <div>
              <label className="mb-20 text-lg font-medium text-tertiary-300">Your email</label>
              <input
                type="email"
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="mt-1 w-full rounded-lg border-2 border-tertiary-200 bg-transparent p-3 font-medium text-tertiary-200"
                placeholder="name@company.com"></input>
            </div>
            <div>
              <label className="mb-2 text-lg font-medium text-tertiary-300">Password</label>
              <input
                type="password"
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="mt-1 w-full rounded-lg border-2 border-tertiary-200 bg-transparent p-3 font-medium text-tertiary-200"
                placeholder="••••••••"></input>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-6 items-center">
                    <input type="checkbox" className="h-4 w-4"></input>
                  </div>
                  <div className="text-md ml-2">
                    <label className="text-tertiary-300">Remember me</label>
                  </div>
                </div>
                <a className="text-md font-semibold text-tertiary-300 hover:underline">Forgot password?</a>
              </div>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-br from-black to-primary-950 py-2 text-center font-medium text-tertiary-300 shadow-md transition duration-500 hover:scale-105 hover:bg-primary-300 focus:ring-2">
                Sign in
              </button>
              <p className="mt-2 text-sm font-light text-tertiary-300">
                Don't have an account yet?{' '}
                <a href="" className="font-bold hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
