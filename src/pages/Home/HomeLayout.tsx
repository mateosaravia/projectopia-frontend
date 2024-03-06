import Header from '../../common/components/header/Header';
import ProjectsCarousel from './projects/components/ProjectsCarousel';
import ProjectCard from './projects/components/ProjectsCarouselItem';

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

const ProjectTop = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center overflow-y-auto bg-gradient-to-b from-primary-950 to-primary-800 px-6 py-8 md:h-screen lg:py-0">
      <div className="inset-x-o fixed top-0 w-full">
        <Header />
      </div>
      <div className="top-4 flex h-full w-full flex-col items-center justify-center">
        <h1 className="font-mono text-7xl font-bold text-tertiary-300">PROJECTOPIA</h1>
        <p className="font-mono text-xl text-tertiary-300">Page Description</p>
      </div>
      <div className="flex w-[100rem]">
        <ProjectsCarousel projects={projects} />
      </div>
      <div></div>
    </div>
  );
};

export default ProjectTop;
