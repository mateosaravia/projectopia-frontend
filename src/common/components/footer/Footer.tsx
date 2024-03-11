const Footer = () => {
  return (
    <footer className="w-full p-2">
      <div className="flex w-full justify-between border-t-2 border-primary-300 p-4">
        <span className="text-xl text-primary-300">© 2024. All Rights Reserved</span>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-xl text-primary-300 hover:text-primary-100">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-xl text-primary-300 hover:text-primary-100">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
