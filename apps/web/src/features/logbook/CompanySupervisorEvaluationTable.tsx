import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.default';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import ScorePicker from './ScorePicker';

const sectionTabs = [
  { key: 'technical', label: 'Technical competencies' },
  { key: 'attitude', label: 'Appropriate attitude at the workplace' },
  { key: 'quality', label: 'Quality of work' },
  { key: 'comment', label: 'Comment' },
];

const sections = [
  {
    key: 'technical',
    title: 'A. Technical competences (30 points)',
    groups: [
      {
        label: 'Job routine',
        description: 'The earner operates job routines in accordance with the occupational norms with supervision',
        rows: [
          { number: 1, desc: 'The earner cleans the workstation and stores tools/equipment after use' },
          { number: 2, desc: 'He/she knows and applies the correct procedures and techniques' },
          { number: 3, desc: 'He/she knows and respects the different stages/steps of working process' },
        ],
      },
      {
        label: 'Use of tools and equipments',
        description: 'The earner adequately uses the materials, tools and equipment (with supervision)',
        rows: [
          { number: 4, desc: 'He/she uses materials, tools and equipment without hesitation' },
          { number: 5, desc: 'He/she maintains tools and equipment' },
        ],
      },
    ],
  },
  {
    key: 'attitude',
    title: 'B. Appropriate attitude at the workplace (60 points)',
    groups: [
      {
        label: 'Individual attitudes',
        description: 'The earner has developed the expected individual attitudes at the workplace',
        rows: [
          { number: 1, desc: 'The earner is punctual' },
          { number: 2, desc: 'He/she has a sense of responsibility, and hard working' },
          { number: 3, desc: 'He/she has shown some initiative' },
          { number: 4, desc: 'He/she has shown the willingness to innovate' },
        ],
      },
      {
        label: 'Interactive attitudes',
        description: 'The earner has developed the required interactive attitudes at the workplace',
        rows: [
          { number: 5, desc: 'The earner is a team worker' },
          { number: 6, desc: 'He/she has good interpersonal communication skills' },
          { number: 7, desc: 'He/she has acquired some self-confidence' },
        ],
      },
      {
        label: 'Organizational skills',
        description: 'The earner has developed the required organization attitudes',
        rows: [
          { number: 8, desc: 'The earner can work according to a schedule' },
          { number: 9, desc: 'He/she can plan some tasks' },
          { number: 10, desc: 'He/she uses resources efficiently without waste' },
        ],
      },
      {
        label: 'Rules and Regulations',
        description: 'The earner complies with the rules and regulations',
        rows: [
          { number: 11, desc: 'The earner complies with workplace rules and regulations' },
          { number: 12, desc: 'He/she respects hygiene, safety, and security regulations at the workplace' },
        ],
      },
    ],
  },
  {
    key: 'quality',
    title: 'C. Quality of work (10 points)',
    groups: [
      {
        label: 'Work relevance',
        description: 'The earner complies with orders from the clients or instructions from the supervisor',
        rows: [
          { number: 1, desc: 'The earner complies with orders from the clients or instructions from the supervisor' },
          { number: 2, desc: 'The earner completes tasks with respect to the time allocated' },
        ],
      },
    ],
  },
];

const scoreOptions = [1, 2, 3, 4, 5];

export default function CompanySupervisorEvaluationTable() {
  const [activeTab, setActiveTab] = useState('technical');
  // State: { [sectionKey-groupLabel-rowNumber]: score }
  const [scores, setScores] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    sections.forEach((section) => {
      section.groups.forEach((group) => {
        group.rows.forEach((row) => {
          initial[`${section.key}-${group.label}-${row.number}`] = 1;
        });
      });
    });
    return initial;
  });

  const handleScoreChange = (sectionKey: string, groupLabel: string, rowNumber: number, value: number) => {
    setScores((prev) => ({ ...prev, [`${sectionKey}-${groupLabel}-${rowNumber}`]: value }));
  };

  const renderSection = (section: (typeof sections)[number]) => (
    <div className="gap-y-5 flex flex-col">
      <div className="flex flex-wrap gap-4 text-sm text-primary mb-2">
        {scoreOptions.map((val) => (
          <span key={val} className="flex items-center gap-1">
            <span className="font-semibold">{val}</span> {['Excellent', 'Very Good', 'Good', 'Sufficient', 'Fair'][5 - val]}
          </span>
        ))}
      </div>
      <h2 className="font-semibold mb-2 text-gray-700">{section.title}</h2>
      {section.groups.map((group) => (
        <div key={group.label} className="">
          <div className="overflow-x-auto">
            <Table className="min-w-full border-collapse border-spacing-y-2">
              <TableHeader>
                <TableRow className="text-foreground/90 text-sm">
                  <TableHead className="text-left pb-2 ">Number</TableHead>
                  <TableHead className="text-left pb-2">
                    <div className="flex flex-col font-bold">
                      {group.label}
                      <div className="text-xs text-foreground/90">{group.description}</div>
                    </div>
                  </TableHead>
                  <TableHead className="text-left pb-2">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {group.rows.map((row) => {
                  const key = `${section.key}-${group.label}-${row.number}`;
                  return (
                    <TableRow key={row.number} className="border-b align-bottom">
                      <TableCell className="py-4 align-bottom pt-8">{row.number}</TableCell>
                      <TableCell className="py-4 align-bottom pt-8">{row.desc}</TableCell>
                      <TableCell className="py-4 align-bottom pt-8">
                        <ScorePicker
                          value={scores[key]}
                          onChange={(val) => handleScoreChange(section.key, group.label, row.number, val)}
                          options={scoreOptions}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={2} className="text-left font-semibold py-2 pr-4">
                    Sub-total
                  </TableCell>
                  <TableCell className="font-semibold text-right py-2"> ... Out of {group.rows.length * 5}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
      <div className="flex justify-end text-sm font-semibold text-muted-foreground mb-4">...Out of 15</div>
    </div>
  );

  return (
    <div className="space-y-10">
      <Tabs value={activeTab} onValueChange={setActiveTab} variant="underline">
        <TabsList className="">
          {sectionTabs.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent key={section.key} value={section.key}>
            {renderSection(section)}
          </TabsContent>
        ))}
        <TabsContent value="comment">
          <div className="mb-8">
            <h2 className="font-semibold mb-2 text-gray-700">
              Company supervisor's comments (Observations and ideas on how to improve the TVET-IAP)
            </h2>
            <Textarea className="min-h-[8rem]" placeholder="Minimum  word of 123" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
