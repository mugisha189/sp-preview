'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from '@tanstack/react-router';
import { Eye, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Student } from './types';
import { UpdateStudentForm } from './UpdateStudentForm';

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: 'name',
    header: 'Student Names & Code',
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.name}</div>
        <div className="text-muted-foreground">{row.original.code}</div>
      </div>
    ),
  },
  {
    accessorKey: 'trade',
    header: 'Trades',
  },
  {
    accessorKey: 'classLevel',
    header: 'Class Level',
  },
  {
    accessorKey: 'company',
    header: 'Current Company',
    cell: ({ row }) => row.original.company || 'None',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      const variant = {
        Active: 'default',
        Graduated: 'success',
        Dropped: 'destructive',
        Transferred: 'warning',
      }[status] as 'default' | 'success' | 'destructive' | 'warning';

      const dotColor = {
        Active: 'bg-primary',
        Graduated: 'bg-chart-4',
        Dropped: 'bg-destructive',
        Transferred: 'bg-chart-1',
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
    cell: ({ row }) => {
      const student = row.original;
      console.log(student);
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
                  to: '/dashboard/students/$studentId',
                  params: { studentId: student.id },
                });
              }}
              asChild
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
                <DropdownMenuItem
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Update Student
                </DropdownMenuItem>
                <DropdownMenuItem>Change Status</DropdownMenuItem>
                <DropdownMenuItem>Delete Student</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <UpdateStudentForm open={open} onOpenChange={setOpen} student={student} />
        </>
      );
    },
  },
];
