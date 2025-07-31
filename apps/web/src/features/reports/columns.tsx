import { ColumnDef } from '@tanstack/react-table';
import { DownloadCloud } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ReportStatusBadge } from './ReportStatusBadge';
import { Report } from './types';

export const columns: ColumnDef<Report>[] = [
  {
    accessorKey: 'title',
    header: 'Documents',
    cell: ({ row }) => {
      const report = row.original;
      return (
        <div className="py-2">
          <div className="font-medium sm:text-base text-foreground">{report.title}</div>
          <div className="text-sm text-muted-foreground">
            {report.company_district}, {report.company_sector}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'timeline',
    header: 'Timeline',
    cell: ({ row }) => {
      const report = row.original;
      return (
        <div>
          From {report.timeline_from} to {report.timeline_to}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <ReportStatusBadge status={row.original.status} />,
  },
  {
    id: 'actions',
    header: 'Action',
    enableHiding: false,
    cell: ({ row }) => {
      const report = row.original;

      return (
        <a href={report.fileUrl} download>
          <Button variant="ghost" size="icon">
            <DownloadCloud />
          </Button>
        </a>
      );
    },
  },
];
