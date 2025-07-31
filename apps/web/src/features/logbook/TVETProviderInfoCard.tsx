interface TVETProviderInfoCardProps {
  name?: string;
  trade?: string;
  level?: string;
  schoolYear?: string;
  contact?: string;
}

const defaultData = {
  name: 'Nyabihu TSS School',
  trade: 'Welding',
  level: 'Level 2',
  schoolYear: '2024 - 2025',
  contact: '0793455621',
};

export default function TVETProviderInfoCard(props: TVETProviderInfoCardProps = defaultData) {
  const data = { ...defaultData, ...props };
  return (
    <div>
      <h2 className="font-semibold mb-4 text-lg">TVET provider</h2>
      <div className="grid grid-cols-2 gap-y-2">
        <span className="text-muted-foreground">Name of TVET Provider</span>
        <span>{data.name}</span>
        <span className="text-muted-foreground">Trade</span>
        <span>{data.trade}</span>
        <span className="text-muted-foreground">RQL Level</span>
        <span>{data.level}</span>
        <span className="text-muted-foreground">School Year</span>
        <span>{data.schoolYear}</span>
        <span className="text-muted-foreground">Supervisor</span>
        <span>{data.contact}</span>
        <span className="text-muted-foreground">Phone</span>
        <span>{data.contact}</span>
      </div>
    </div>
  );
}
