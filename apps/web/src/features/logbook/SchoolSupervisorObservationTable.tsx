import { CheckboxRadioGroup, CheckboxRadioGroupItem } from '@/components/ui/checkbox-radio-group';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const rankLabels = [5, 4, 3, 2, 1];
const rankLegend = [
  { value: 5, label: 'Excellent' },
  { value: 4, label: 'Very Good' },
  { value: 3, label: 'Good' },
  { value: 2, label: 'Sufficient' },
  { value: 1, label: 'Fair' },
];

const sections = [
  {
    title: 'A. Company Engagement',
    rows: [
      { key: 'a', obs: 'The schedule of IAP activities is established and communicated', rank: 5, comment: 'Added' },
      { key: 'b', obs: 'The schedule of IAP activities is established and communicated', rank: 3, comment: 'none' },
      { key: 'c', obs: 'The schedule of IAP activities is established and communicated', rank: 1, comment: 'none' },
    ],
  },
  {
    title: 'B. Learner Engagement',
    rows: [
      { key: 'a', obs: 'Attendance is regularly recorded', rank: 5, comment: 'Added' },
      { key: 'b', obs: "Learner is engaged and have access to company's equipment and tools", rank: 3, comment: 'none' },
      { key: 'c', obs: 'Achievement of expected outcome', rank: 1, comment: 'none' },
      { key: 'd', obs: 'All performed activities are relevant to the IAP expected outcomes', rank: 1, comment: 'none' },
      { key: 'e', obs: 'Learner contributes to the overall outcomes of company production', rank: 1, comment: 'none' },
    ],
  },
  {
    title: 'C. Working Environment',
    rows: [
      { key: 'a', obs: "Companies' rules and Regulations related to IAP are communicated", rank: 5, comment: 'Added' },
      { key: 'b', obs: 'Emergencies/Special cases are handled effectively', rank: 3, comment: 'none' },
      { key: 'c', obs: 'Hazards are controlled', rank: 1, comment: 'none' },
    ],
  },
];

const authorizedPersons = [
  {
    number: 1,
    name: 'Manzi Mike Bizimana',
    function: 'Function description is placed here',
    date: '23 May 2025',
    signature: '.',
  },
  {
    number: 2,
    name: 'Uwamariya Jane Rose',
    function: 'Function description is placed here',
    date: '12 July 2025',
    signature: '.',
  },
];

export default function SchoolSupervisorObservationTable() {
  // Local state for selected rank per row (static, not persisted)
  const [ranks, setRanks] = useState(() => {
    const initial: Record<string, string> = {};
    sections.forEach((section) => {
      section.rows.forEach((row) => {
        initial[`${section.title}-${row.key}`] = row.rank.toString();
      });
    });
    return initial;
  });

  const handleRankChange = (rowKey: string, value: string) => {
    setRanks((prev) => ({ ...prev, [rowKey]: value }));
  };

  return (
    <div className="space-y-10">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-primary mb-2">1. General Observation</h2>
        <p className="text-sm mb-2">
          Rank these elements related to the IAP implementation with a brief explanation by ticking to the number corresponding to
          the statement describing your observation as follows:
        </p>
        <div className="flex flex-wrap gap-4 mb-2">
          {rankLegend.map((r) => (
            <span key={r.value} className="flex items-center gap-1">
              <span className="font-semibold">{r.value}</span> {r.label}
            </span>
          ))}
        </div>
      </div>
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold mb-2 text-gray-700">{section.title}</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-muted-foreground text-sm">
                  <th className="text-left font-normal pb-2 w-16">Number</th>
                  <th className="text-left font-normal pb-2">Observation during visit</th>
                  <th className="text-left font-normal pb-2">Rank</th>
                  <th className="text-left font-normal pb-2">Comments</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => {
                  const rowKey = `${section.title}-${row.key}`;
                  return (
                    <tr key={row.key} className="border-b last:border-b-0 align-top">
                      <td className="py-4 align-top font-medium">{row.key}</td>
                      <td className="py-4 align-top">{row.obs}</td>
                      <td className="py-4 align-top">
                        <CheckboxRadioGroup
                          value={ranks[rowKey]}
                          onValueChange={(val) => handleRankChange(rowKey, val)}
                          className="flex gap-2"
                        >
                          {rankLabels.map((val) => (
                            <CheckboxRadioGroupItem key={val} value={val.toString()}>
                              {val}
                            </CheckboxRadioGroupItem>
                          ))}
                        </CheckboxRadioGroup>
                      </td>
                      <td className="py-4 align-top">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-xs">{row.comment}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="mt-12">
        <h2 className="text-base font-semibold text-primary mb-2">2. Any other observation/recommendation during IAP visit</h2>
        <p className="text-sm mb-2">Input your other observation or recommendation</p>
        <textarea
          className="w-full min-h-[120px] border rounded-lg p-4 text-sm text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Minimum  word of 123"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-base font-semibold text-primary mb-2">3. Authorized person for follow-up/monitoring</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-muted-foreground text-sm">
                <th className="text-left font-normal pb-2 w-16">Number</th>
                <th className="text-left font-normal pb-2">Name</th>
                <th className="text-left font-normal pb-2">Functions</th>
                <th className="text-left font-normal pb-2">Date of Visit</th>
                <th className="text-left font-normal pb-2">Signature</th>
              </tr>
            </thead>
            <tbody>
              {authorizedPersons.map((person) => (
                <tr key={person.number} className="border-b last:border-b-0 align-top">
                  <td className="py-4 align-top">{person.number}</td>
                  <td className="py-4 align-top">{person.name}</td>
                  <td className="py-4 align-top">{person.function}</td>
                  <td className="py-4 align-top">{person.date}</td>
                  <td className="py-4 align-top">{person.signature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
