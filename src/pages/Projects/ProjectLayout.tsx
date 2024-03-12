import Header from '../../common/components/header/Header';
import SearchBar from './search/components/SearchBar';

const pageTitle = 'EXPLORE PROJECTS';

const ProjectLayout = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="fixed top-0 z-10 w-full">
        <Header />
      </div>
      <div className="w-2/3">
        <div className="relative mt-32 flex w-full flex-col items-start justify-center">
          <h1 className="font-mono text-3xl font-bold text-tertiary-300 md:text-3xl">{pageTitle}</h1>
        </div>
        <div className="w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
