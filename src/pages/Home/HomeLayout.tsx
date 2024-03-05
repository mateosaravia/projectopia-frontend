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

const projects = [projectData1, projectData, projectData, projectData];

const ProjectTop = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-b from-primary-950 to-primary-800 px-6 py-8 md:h-screen lg:py-0">
      <ProjectsCarousel projects={projects} />
    </div>
  );
};

export default ProjectTop;
