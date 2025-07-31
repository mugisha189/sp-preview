'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from '@tanstack/react-router';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { Eye, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { AcademicYearStatusBadge } from './AcademicYearStatusBadge';
import { SectorTradeStatusBadge } from './SectorTradeStatusBadge';
import { AcademicYear, SectorTrade } from './types';
import { UpdateAcademicYearForm } from './UpdateAcademicYearForm';
import { UpdateSectorTradeForm } from './UpdateSectorTradeForm';

export const academicYearColumns: ColumnDef<AcademicYear>[] = [
  {
    accessorKey: 'name',
    header: 'Academic Year',
    cell: ({ row }) => <div className="font-medium">{row.original.name}</div>,
  },
  {
    accessorKey: 'terms',
    header: 'Terms',
    cell: ({ row }) => `${row.original.terms.length} term${row.original.terms.length != 1 && 's'}`,
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
    cell: ({ row }) => format(new Date(row.original.startDate), 'yyyy-MM-dd'),
  },
  {
    accessorKey: 'endDate',
    header: 'End Date',
    cell: ({ row }) => format(new Date(row.original.endDate), 'yyyy-MM-dd'),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return <AcademicYearStatusBadge status={row.original.status} />;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const academicYear = row.original;
      const [open, setOpen] = useState(false);
      const router = useRouter();

      return (
        <>
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => {
                router.navigate({
                  to: '/dashboard/school-profile/academic-years/$academicYearId',
                  params: { academicYearId: academicYear.id },
                });
              }}
            >
              <Eye className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setOpen(true)}>Update Academic Year</DropdownMenuItem>
                <DropdownMenuItem>Change Status</DropdownMenuItem>
                <DropdownMenuItem>Delete Academic Year</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <UpdateAcademicYearForm open={open} onOpenChange={setOpen} academicYear={academicYear} />
        </>
      );
    },
  },
];

export const sectorTradeColumns: ColumnDef<SectorTrade>[] = [
  {
    accessorKey: 'tradeName',
    header: 'Trade Name',
    cell: ({ row }) => <div className="font-medium">{row.original.tradeName}</div>,
  },
  {
    accessorKey: 'sectorName',
    header: 'Sector',
  },
  {
    accessorKey: 'level',
    header: 'Levels Offered',
    cell: ({ row }) => row.original.levels.join(', '),
  },
  {
    accessorKey: 'studentsEnrolled',
    header: 'Enrolled Students',
    cell: ({ row }) => <div className="text-right font-medium">{row.original.studentsEnrolled}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return <SectorTradeStatusBadge status={row.original.status} />;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const sectorTrade = row.original;
      const [open, setOpen] = useState(false);
      const router = useRouter();

      return (
        <>
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => {
                router.navigate({
                  to: '/dashboard/school-profile/sector-trade/$sectorTradeId',
                  params: { sectorTradeId: sectorTrade.id },
                });
              }}
            >
              <Eye className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setOpen(true)}>Update Sector & Trade</DropdownMenuItem>
                <DropdownMenuItem>Change Status</DropdownMenuItem>
                <DropdownMenuItem>Delete Sector & Trade</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <UpdateSectorTradeForm open={open} onOpenChange={setOpen} sectorTrade={sectorTrade} />
        </>
      );
    },
  },
];
