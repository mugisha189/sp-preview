'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Eye, Trash2Icon } from 'lucide-react';
import { ComplaintStatusBadge } from './ComplaintStatusBadge';
import { Complaint } from './types';

export const columns: ColumnDef<Complaint>[] = [
  {
    accessorKey: 'industrialName',
    header: 'Industry name',
    cell: ({ row }) => (
      <div>
        <p className="font-medium">{row.original.industrialName}</p>
        <p className="text-muted-foreground">{row.original.location}</p>
      </div>
    ),
  },
  {
    accessorKey: 'sentOn',
    header: 'Sent on',
    cell: ({ row }) => <div>{row.original.sentOn}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return <ComplaintStatusBadge status={row.original.status} />;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Link to={'/dashboard/complaints/$complaintId'} params={{ complaintId: row.original.id }}>
            <Button variant="ghost" size="icon" className="rounded-full cursor-pointer" onClick={() => {}}>
              <Eye className="h-5 w-5" />
            </Button>
          </Link>

          <Button variant="ghost" size="sm">
            <Trash2Icon className="h-5 w-5" />
          </Button>
        </div>
      );
    },
  },
];
