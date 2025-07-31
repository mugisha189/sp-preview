import { DataTable } from '@/components/core/data-table';
import { Button } from '@/components/ui/button';
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Eye, Filter, MoreVertical, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/logbook/')({
  component: () => <LogbookIndexPage />,
});

type StatusType = 'Inprogress' | 'Certified' | 'Terminated';

interface LogbookRow {
  id: number;
  name: string;
  location: string;
  classLevel: string;
  timeline: string;
  status: StatusType;
}

const mockData: LogbookRow[] = [
  {
    id: 1,
    name: 'Sina Gerard Nyiragarama',
    location: 'Nyirangarama in Rulindo District,',
    classLevel: 'Level 3',
    timeline: '12 May 2025 - 23 July 2025',
    status: 'Inprogress',
  },
  {
    id: 2,
    name: 'M-Hotle',
    location: 'Kigali in Nyarugenge District,',
    classLevel: 'Level 2',
    timeline: '12 May 2025 - 23 July 2025',
    status: 'Certified',
  },
  {
    id: 3,
    name: 'Mazomaka Mike',
    location: '1000456',
    classLevel: 'Level 2',
    timeline: '12 May 2025 - 23 July 2025',
    status: 'Terminated',
  },
  {
    id: 4,
    name: 'Mazomaka Mike',
    location: '1000456',
    classLevel: 'Level 2',
    timeline: '12 May 2025 - 23 July 2025',
    status: 'Certified',
  },
  {
    id: 5,
    name: 'Mazomaka Mike',
    location: '1000456',
    classLevel: 'Level 2',
    timeline: '12 May 2025 - 23 July 2025',
    status: 'Certified',
  },
  {
    id: 6,
    name: 'Niyomungeli Aline',
    location: '1000287',
    classLevel: 'Level 1',
    timeline: '12 May 2025 - 23 July 2025',
    status: 'Terminated',
  },
  {
    id: 7,
    name: 'Mazomaka Mike',
    location: '1000456',
    classLevel: 'Level 2',
    timeline: '12 May 2025 - 23 July 2025',
    status: 'Certified',
  },
];

const statusStyles: Record<StatusType, string> = {
  Inprogress: 'bg-green-100 text-green-700',
  Certified: 'bg-blue-100 text-blue-700',
  Terminated: 'bg-red-100 text-red-700',
};
const statusDot: Record<StatusType, string> = {
  Inprogress: 'bg-green-500',
  Certified: 'bg-blue-500',
  Terminated: 'bg-red-500',
};

export default function LogbookIndexPage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    if (!search) return mockData;
    return mockData.filter(
      (row) =>
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.location.toLowerCase().includes(search.toLowerCase()) ||
        row.classLevel.toLowerCase().includes(search.toLowerCase()) ||
        row.timeline.toLowerCase().includes(search.toLowerCase()) ||
        row.status.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const columns = [
    {
      accessorKey: 'name',
      header: 'Industrial name',
      cell: ({ row }: { row: { original: LogbookRow } }) => (
        <div>
          <div className="font-semibold">{row.original.name}</div>
          <div className="text-xs text-muted-foreground">{row.original.location}</div>
        </div>
      ),
    },
    {
      accessorKey: 'classLevel',
      header: 'Class Level',
    },
    {
      accessorKey: 'timeline',
      header: 'Training Timeline',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }: { row: { original: LogbookRow } }) => (
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusStyles[row.original.status]}`}
        >
          <span className={`w-2 h-2 rounded-full ${statusDot[row.original.status]}`}></span>
          {row.original.status}
        </span>
      ),
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }: { row: { original: LogbookRow } }) => (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            // onClick={() => navigate({ to: '/dashboard/logbook/details', search: { id: row.original.id } })}
            asChild
          >
            <Link to="/dashboard/logbook/details" search={{ id: row.original.id }}>
              <Eye className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-8">
      <h1 className="text-2xl font-bold mb-6">TVET IAP Liaison books</h1>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            className="w-80 pl-10 pr-4 py-2 border rounded-lg bg-background text-sm focus:outline-none"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filter
        </Button>
      </div>
      <DataTable columns={columns} data={filteredData} search={search} onSearchChange={setSearch} showPagination />
      <div className="flex items-center justify-between mt-6 text-sm text-muted-foreground">
        <span>Showing Result (24 out of 96)</span>
      </div>
    </div>
  );
}
