import ProjectsCarouselItem from './ProjectsCarouselItem';

const ProjectsCarousel = ({ projects }: { projects: any[] }) => {
  return (
    <div className="relative flex h-64 w-full items-center space-x-6 overflow-hidden whitespace-nowrap">
      <div className="inline-block flex animate-scroll space-x-6">
        {projects.map((project: any, index: number) => {
          return <ProjectsCarouselItem project={project} key={index} />;
        })}
      </div>
      <div className="inline-block flex animate-scroll space-x-6">
        {projects.map((project: any, index: number) => {
          return <ProjectsCarouselItem project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
