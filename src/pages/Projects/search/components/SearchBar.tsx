import { useState } from 'react';

const SearchBar = () => {
  const [searchType, setSearchType] = useState('any');

  return (
    <div className="m-10 flex h-screen flex-col items-start md:mt-20">
      <div className="flex h-16 w-full max-w-lg items-center justify-center rounded-full bg-primary-300 font-mono md:text-xl">
        <ul className="flex h-full w-full items-center justify-center divide-x divide-solid divide-primary-900 text-primary-900">
          <li className="h-full w-full">
            <button
              className="h-full w-full rounded-s-full px-5 hover:bg-primary-100 focus:bg-tertiary-200"
              onClick={() => setSearchType('title')}>
              Title
            </button>
          </li>
          <li className="h-full w-full">
            <button
              className="h-full w-full px-5 hover:bg-primary-100 focus:bg-tertiary-200"
              onClick={(e) => setSearchType('description')}>
              Description
            </button>
          </li>
          <li className="h-full w-full">
            <button
              className="h-full w-full px-5 hover:bg-primary-100 focus:bg-tertiary-200"
              onClick={() => setSearchType('technology')}>
              Technology
            </button>
          </li>
          <li className="h-full w-full">
            <button
              className="h-full w-full rounded-r-full px-5 hover:bg-primary-100 focus:bg-tertiary-200"
              onClick={() => setSearchType('tags')}>
              Tags
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-8 h-auto w-full">
        <input
          className="h-16 w-full border-b-2 border-primary-300 bg-transparent font-mono text-lg text-tertiary-300 placeholder-primary-300 focus:border-tertiary-300 focus:placeholder-tertiary-300 focus:outline-none md:h-32 md:text-6xl"
          type="text"
          placeholder={`Search projects by ${searchType}...`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
