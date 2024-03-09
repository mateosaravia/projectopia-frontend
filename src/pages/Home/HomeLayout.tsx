import Footer from '../../common/components/footer/Footer';
import Header from '../../common/components/header/Header';
import FeatureLayout from './features/components/FeatureLayout';
import ProjectsCarousel from './projects/components/ProjectsCarousel';

// Assuming you have some project data
const projectData1 = {
  name: 'Sample Project 1',
  description: 'This is a sample project description.',
  skills: ['HTML', 'CSS', 'JavaScript'],
  tags: ['Web Development', 'Frontend'],
};

const projectData = {
  name: 'Sample Project',
  description: 'This is a sample project description.',
  skills: ['HTML', 'CSS', 'JavaScript'],
  tags: ['Web Development', 'Frontend'],
};

const projects = [projectData1, projectData, projectData, projectData, projectData, projectData];

const HomeLayout = () => {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-b from-primary-950 to-primary-800">
      <div className="fixed top-0 z-10 w-full">
        <Header />
      </div>
      <div className="relative mx-auto mt-48 flex h-auto w-2/3 flex-grow flex-col items-center justify-center space-y-16 overflow-y-auto overflow-x-hidden px-1 py-8 md:space-y-40 md:px-6">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="font-mono text-3xl font-bold text-tertiary-300 md:text-7xl">PROJECTOPIA</h1>
          <p className="font-mono text-xl text-tertiary-300">Page Description</p>
        </div>
        <div className="flex w-full justify-center">
          <ProjectsCarousel projects={projects} />
        </div>
        <div className="flex w-full flex-col items-start justify-center overflow-visible">
          <div className="my-6 w-full border-b-2 border-primary-300">
            <h1 className="my-2 font-mono text-lg font-bold text-primary-300 md:text-3xl">Get Started</h1>
          </div>
          <div className="my-10 w-full">
            <FeatureLayout />
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
