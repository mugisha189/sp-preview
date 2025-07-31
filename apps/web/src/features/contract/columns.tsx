import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { Link } from '@tanstack/react-router';
import { MoreHorizontal } from 'lucide-react';
import { ContractStatusBadge } from './ContractStatusBadge';
import { Contract } from './types';

export const columns: ColumnDef<Contract>[] = [
  {
    accessorKey: 'contractTitle',
    header: 'Contract Title & Type',
    cell: ({ row }) => (
      <div>
        <p className="font-medium">{row.original.contractTitle}</p>
        <p className="text-sm text-muted-foreground">{row.original.contractType}</p>
      </div>
    ),
  },
  {
    accessorKey: 'partiesInvolved',
    header: 'Parties Involved',
    cell: ({ row }) => (
      <div>
        <p className="font-medium">{row.original.partyA}</p>
        <p className="text-sm text-muted-foreground">{row.original.partyB}</p>
      </div>
    ),
  },
  {
    accessorKey: 'contractPeriod',
    header: 'Contract Period',
    cell: ({ row }) => (
      <div>
        <p className="font-medium">Contract timeline</p>
        <p className="text-sm text-muted-foreground">{`From ${row.original.startDate} to ${row.original.endDate}`}</p>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return <ContractStatusBadge status={row.original.status} />;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
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
            <Link to={'/dashboard/contract/$contractId'} params={{ contractId: row.original.id }}>
              <DropdownMenuItem>
                View details
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
