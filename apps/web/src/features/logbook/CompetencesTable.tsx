interface CompetenceRow {
  number: number;
  day: string;
  date: string;
  activities: string;
}

const data: CompetenceRow[] = [
  { number: 1, day: 'Monday', date: '12 May 2024', activities: '4 activities' },
  { number: 2, day: 'Tuesday', date: '12 May 2024', activities: '2 activities' },
  { number: 3, day: 'Wednesday', date: '12 May 2024', activities: '4 activities' },
  { number: 4, day: 'Thursday', date: '12 May 2024', activities: '5 activities' },
];

export default function CompetencesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separateborder-spacing-y-2">
        <thead>
          <tr className="text-muted-foreground text-sm border-b">
            <th className="text-left font-normal pb-2">Number</th>
            <th className="text-left font-normal pb-2">Specific competences</th>
            <th className="text-left font-normal pb-2">ctivities to carry out</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.number} className="border-b">
              <td className="py-4 align-top w-16">{row.number}</td>
              <td className="py-4 align-top">
                <div className="font-semibold">{row.day}</div>
                <div className="text-xs text-muted-foreground">{row.date}</div>
              </td>
              <td className="py-4 align-top">{row.activities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
