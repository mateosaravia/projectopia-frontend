const TechnologyTag = ({ technology }: { technology: string }) => {
  return (
    <div className="rounded-full bg-transparent p-3 text-tertiary-200 shadow shadow-tertiary-200">
      <span>{technology}</span>
    </div>
  );
};

export default TechnologyTag;
