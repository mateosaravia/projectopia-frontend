const Header = () => {
  return (
    <header>
      <nav className="flex h-16 w-full border-primary-200 bg-transparent shadow shadow-primary-200 backdrop-blur-sm">
        <div className="mx-auto flex h-full w-full flex-wrap items-center justify-around">
          <div className="w-3/12 text-white">Logo</div>
          <div className="w-1/2">
            <ul className="flex items-center justify-between">
              <li>
                <a href="#" className="font-mono text-primary-200 hover:text-tertiary-300">
                  Feature 1
                </a>
              </li>
              <li>
                <a href="#" className="font-mono text-primary-200 hover:text-tertiary-300">
                  Feature 2
                </a>
              </li>
              <li>
                <a href="#" className="font-mono text-primary-200 hover:text-tertiary-300">
                  Feature 3
                </a>
              </li>
              <li>
                <a href="#" className="font-mono text-primary-200 hover:text-tertiary-300">
                  Feature 4
                </a>
              </li>
              <button className="rounded-full bg-transparent px-3 py-1 font-mono text-primary-200 shadow shadow-primary-200 hover:text-tertiary-300 hover:shadow-tertiary-300">
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
