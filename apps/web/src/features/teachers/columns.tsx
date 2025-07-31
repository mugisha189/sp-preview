'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Link } from '@tanstack/react-router';
import { Eye, FileText, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Teacher } from './type';
import { UpdateStudentForm } from './updateTeacherForm';

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: 'industryName',
    header: 'Industry Name',
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.name}</div>
        <div className="text-muted-foreground">{row.original.email}</div>
      </div>
    ),
  },
  {
    accessorKey: 'trade',
    header: 'Trade',
  },
  {
    accessorKey: 'level',
    header: 'Class Level',
  },
  {
    accessorKey: 'qualification',
    header: 'Qualification',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      const variant = {
        'on-leave': 'default',
        active: 'success',
        deactivated: 'destructive',
      }[status] as 'default' | 'success' | 'destructive';

      const dotColor = {
        'on-leave': 'bg-primary',
        active: 'bg-chart-4',
        deactivated: 'bg-destructive',
      }[status];

      return (
        <Badge variant={variant} className="flex items-center gap-2 px-4 py-1">
          <div className={`w-2 h-2 rounded-full ${dotColor}`} />
          {status}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <div className="flex items-center gap-2">
            <Link to={'/dashboard/teachers/$teacherId'} params={{ teacherId: row.original.id }}>
              <Eye className="h-5 w-5" />
            </Link>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <FileText className="h-5 w-5" />
                  Edit
                </Button>
              </PopoverContent>
            </Popover>
          </div>
          <UpdateStudentForm open={open} onOpenChange={setOpen} teacher={row.original} />
        </>
      );
    },
  },
];
