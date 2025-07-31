import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@tanstack/react-router';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { IndustryStatusBadge } from './IndustryStatusBadge';
import { Industry } from './types';

export const columns: ColumnDef<Industry>[] = [
  {
    accessorKey: 'name',
    header: 'Industry Name & Location',
    cell: ({ row }) => (
      <div>
        <div>{row.original.name}</div>
        <div className="text-muted-foreground text-sm">{row.original.location}</div>
      </div>
    ),
  },
  {
    accessorKey: 'trades',
    header: 'Trades',
    cell: ({ row }) => row.original.trades.join(', '),
  },
  {
    accessorKey: 'studentsPlaced',
    header: 'Students Placed',
  },
  {
    accessorKey: 'contact',
    header: 'Contacts',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <IndustryStatusBadge status={row.original.status} />,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const industry = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link to="/dashboard/industries/$industryId" params={{ industryId: industry.id }}>
                View Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
