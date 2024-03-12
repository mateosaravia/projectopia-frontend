const FeatureCard = ({ header, title, description }: { header: string; title: string; description: string }) => {
  return (
    <div className="from-black-700 flex w-full rounded-xl bg-gradient-to-r to-primary-800 shadow-xl shadow-black hover:border-2 hover:border-tertiary-300">
      <div className="flex flex-col p-6">
        <h1 className="font-mono text-9xl font-bold text-primary-400">{header}</h1>
        <div className="mb-2 w-full border-b-2 border-primary-300">
          <h2 className="bg-gradient text-2xl font-bold text-primary-300">{title}</h2>
        </div>
        <p className="text-md font-think text-primary-100">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
