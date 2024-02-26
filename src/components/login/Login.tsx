const LoginForm = () => {
  return (
    <div className="bg-gradient-to-b from-primary-950 to-primary-800 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a className="mb-16 text-4xl text-tertiary-400 font-bold">PROJECTOPIA</a>
      <div className="w-full bg-primary-400 rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl font-semibold text-primary-900">Sign in to your account</h1>
          <form className="space-y-2 md:space-y-4">
            <div>
              <label className="mb-20 font-medium text-lg text-primary-900">Your email</label>
              <input
                type="email"
                className="w-full font-medium p-2 border-2 border-primary-900 rounded-lg bg-primary-200"
                placeholder="name@company.com"></input>
            </div>
            <div>
              <label className="mb-2 font-medium text-lg text-primary-900">Password</label>
              <input
                type="password"
                className="w-full font-medium p-2 border-2 border-primary-900 rounded-lg bg-primary-200"
                placeholder="••••••••"></input>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-6">
                    <input type="checkbox" className="w-4 h-4"></input>
                  </div>
                  <div className="ml-2 text-md">
                    <label className="text-primary-900">Remember me</label>
                  </div>
                </div>
                <a className="text-md text-primary-900 font-semibold hover:underline">Forgot password?</a>
              </div>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full transition duration-500 bg-secondary-200 border-2 border-secondary-700 shadow-xl font-medium text-center text-secondary-700 py-2 hover:bg-secondary-300 rounded-lg focus:ring-2 hover:scale-105">
                Sign in
              </button>
              <p className="text-sm font-light text-primary-900 mt-2">
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
