const SignupForm = () => {
  return (
    <div className="bg-gradient-to-b from-primary-950 to-primary-800 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-primary-400 rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl font-semibold text-primary-900">Sign up</h1>
          <form className="space-y-2 md:space-y-4">
            <div>
              <label className="mb-20 font-medium text-primary-900 text-lg">Email</label>
              <input
                type="email"
                className="w-full font-medium border-2 p-2 border-primary-900 rounded-lg bg-primary-200"
                placeholder="your@company.com"></input>
            </div>
            <div>
              <label className="mb-20 font-medium text-primary-900 text-lg">Username</label>
              <input
                type="password"
                className="w-full font-medium border-2 p-2 border-primary-900 rounded-lg bg-primary-200"
                placeholder="company123"></input>
            </div>
            <div>
              <label className="mb-20 font-medium text-primary-900 text-lg">Password</label>
              <input
                type="password"
                className="w-full font-medium border-2 p-2 border-primary-900 rounded-lg bg-primary-200"
                placeholder="••••••••"></input>
            </div>
            <div className="pt-6 md:pt-8">
              <button
                type="submit"
                className="w-full transition duration-500 bg-secondary-200 border-2 border-secondary-700 shadow-xl font-medium text-center text-secondary-700 py-2 hover:bg-secondary-300 rounded-lg focus:ring-2 hover:scale-105">
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
