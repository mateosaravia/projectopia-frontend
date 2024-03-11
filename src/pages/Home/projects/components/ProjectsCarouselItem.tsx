import TechnologyTag from './TechnologyTag';

const ProjectsCarouselItem = ({ project }: { project: any }) => {
  return (
    <div className="flex h-52 w-full flex-col items-center rounded-xl bg-gradient-to-br from-black to-transparent shadow-lg shadow-black sm:max-w-sm md:mt-0 xl:p-0">
      <div className="flex h-40 w-96 flex-col items-start justify-start space-y-4 p-4 sm:p-6">
        <h1 className="text-3xl font-semibold text-tertiary-300">{project.name}</h1>
        <div className="space-y-4">
          <p className="text-tertiary-300">{project.description}</p>
          <ul className="flex space-x-4 text-tertiary-300">
            {project.skills.map((skill: any, index: number) => {
              return <TechnologyTag technology={skill} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarouselItem;
