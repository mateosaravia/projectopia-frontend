import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({ email: '', username: '', password: '' });

  const handleLogin = () => {};

  return (
    <div className="mx-auto flex flex-col items-center justify-center bg-gradient-to-b from-primary-950 to-primary-800 px-6 py-8 md:h-screen lg:py-0">
      <div className="w-full rounded-lg bg-primary-400 shadow-2xl sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-3xl font-semibold text-primary-900">Sign up</h1>
          <form onSubmit={handleLogin} className="space-y-2 md:space-y-4">
            <div>
              <label className="mb-20 text-lg font-medium text-primary-900">Email</label>
              <input
                type="email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border-2 border-primary-900 bg-primary-200 p-2 font-medium"
                placeholder="your@company.com"></input>
            </div>
            <div>
              <label className="mb-20 text-lg font-medium text-primary-900">Username</label>
              <input
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full rounded-lg border-2 border-primary-900 bg-primary-200 p-2 font-medium"
                placeholder="company123"></input>
            </div>
            <div>
              <label className="mb-20 text-lg font-medium text-primary-900">Password</label>
              <input
                type="password"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full rounded-lg border-2 border-primary-900 bg-primary-200 p-2 font-medium"
                placeholder="••••••••"></input>
            </div>
            <div>
              <label className="mb-20 text-lg font-medium text-primary-900">Confirm password</label>
              <input
                type="password"
                className="w-full rounded-lg border-2 border-primary-900 bg-primary-200 p-2 font-medium"
                placeholder="••••••••"></input>
            </div>
            <div className="pt-6 md:pt-8">
              <button
                type="submit"
                className="w-full rounded-lg border-2 border-secondary-700 bg-secondary-200 py-2 text-center font-medium text-secondary-700 shadow-xl transition duration-500 hover:scale-105 hover:bg-secondary-300 focus:ring-2">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
