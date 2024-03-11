const Header = () => {
  return (
    <header>
      <nav className="flex h-12 w-full border-primary-200 bg-transparent shadow shadow-primary-200 backdrop-blur-sm md:h-16">
        <div className="mx-auto flex h-full w-full flex-wrap items-center justify-between px-4 md:px-12">
          <div className="text-white">Logo</div>
          <div>
            <ul className="flex items-center justify-between space-x-4 md:space-x-12">
              <li className="hidden md:block">
                <a href="#" className="font-mono text-primary-200 hover:text-tertiary-300">
                  Feature 1
                </a>
              </li>
              <li className="hidden md:block">
                <a href="#" className="font-mono text-primary-200 hover:text-tertiary-300">
                  Feature 2
                </a>
              </li>
              <li className="hidden md:block">
                <a href="#" className="font-mono text-primary-200 hover:text-tertiary-300">
                  Feature 3
                </a>
              </li>
              <li className="hidden md:block">
                <a href="#" className="font-mono text-primary-200 hover:text-tertiary-300">
                  Feature 4
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="rounded-full bg-transparent px-3 py-1 font-mono text-primary-200 shadow shadow-primary-200 hover:text-tertiary-300 hover:shadow-tertiary-300">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
