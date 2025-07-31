interface CompanyInfoCardProps {
  name?: string;
  phone?: string;
  email?: string;
  district?: string;
  sector?: string;
  cell?: string;
  village?: string;
  supervisorName?: string;
  supervisorContact?: string;
  className?: string;
}

const defaultData = {
  name: 'Sina Gerard Nyirangarama ltd',
  phone: '0793843322',
  email: 'nyirangarama@gmail.com',
  district: 'Gakenke District',
  sector: 'Nyirangarama',
  cell: 'Base',
  village: 'Nyirangarama',
  supervisorName: 'Uwima Maria Anne',
  supervisorContact: '0793455621',
};

export default function CompanyInfoCard(props: CompanyInfoCardProps = defaultData) {
  const { className = '', ...rest } = props;
  const data = { ...defaultData, ...rest };
  return (
    <div className={className}>
      <h2 className="font-semibold mb-4 text-lg">Company identification</h2>
      <div className="grid grid-cols-2 gap-y-2">
        <span className="text-muted-foreground">Name</span>
        <span>{data.name}</span>
        <span className="text-muted-foreground">Phone</span>
        <span>{data.phone}</span>
        <span className="text-muted-foreground">Email Address</span>
        <span>{data.email}</span>
        <span className="text-muted-foreground">Location/ District</span>
        <span>{data.district}</span>
        <span className="text-muted-foreground">Sector</span>
        <span>{data.sector}</span>
        <span className="text-muted-foreground">Cell</span>
        <span>{data.cell}</span>
        <span className="text-muted-foreground">Village</span>
        <span>{data.village}</span>
        <span className="text-muted-foreground">Company supervisor name</span>
        <span>{data.supervisorName}</span>
        <span className="text-muted-foreground">Company supervisor Contact</span>
        <span>{data.supervisorContact}</span>
      </div>
    </div>
  );
}
