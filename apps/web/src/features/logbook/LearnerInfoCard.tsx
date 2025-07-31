interface LearnerInfoCardProps {
  name?: string;
  trade?: string;
  level?: string;
  schoolYear?: string;
  contact?: string;
}

const defaultData = {
  name: 'Uwase Kenia',
  trade: 'Welding',
  level: 'Level 2',
  schoolYear: '2024 - 2025',
  contact: '0793455621',
};

export default function LearnerInfoCard(props: LearnerInfoCardProps = defaultData) {
  const data = { ...defaultData, ...props };
  return (
    <div>
      <h2 className="font-semibold mb-4 text-lg">Learner's Information</h2>
      <div className="grid grid-cols-2 gap-y-2">
        <span className="text-muted-foreground">Name</span>
        <span>{data.name}</span>
        <span className="text-muted-foreground">Trade</span>
        <span>{data.trade}</span>
        <span className="text-muted-foreground">RQL Level</span>
        <span>{data.level}</span>
        <span className="text-muted-foreground">School Year</span>
        <span>{data.schoolYear}</span>
        <span className="text-muted-foreground">Learn's contacts</span>
        <span>{data.contact}</span>
      </div>
    </div>
  );
}
