import FeatureCard from './FeatureCard';

const FeatureLayout = ({}) => {
  return (
    <div className="grid w-full gap-10 sm:grid-cols-1 md:grid-cols-2">
      <div>
        <FeatureCard
          header="5m"
          title="Lightning speed setup"
          description="Make your profile, and have your portfolio done in minutes."
        />
      </div>
      <div>
        <FeatureCard
          header="6m"
          title="Lightning speed setup"
          description="Make your profile, and have your portfolio done in minutes."
        />
      </div>
      <div>
        <FeatureCard
          header="6m"
          title="Lightning speed setup"
          description="Make your profile, and have your portfolio done in minutes."
        />
      </div>
      <div>
        <FeatureCard
          header="6m"
          title="Lightning speed setup"
          description="Make your profile, and have your portfolio done in minutes."
        />
      </div>
    </div>
  );
};

export default FeatureLayout;
