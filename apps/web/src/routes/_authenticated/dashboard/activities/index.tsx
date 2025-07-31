import { useQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';
import { ChevronRight, Filter, Search } from 'lucide-react';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getActivities } from '@/features/activities/services';
import { ActivityStatus } from '@/features/activities/types';

const getStatusBadge = (status: ActivityStatus) => {
  switch (status) {
    case 'Completed':
      return <Badge variant="success">Completed</Badge>;
    case 'Pending':
      return <Badge variant="warning">Pending</Badge>;
    case 'Current week':
      return <Badge variant="success">Current week</Badge>;
    case 'Upcoming':
      return <Badge variant="default">Upcoming</Badge>;
    default:
      return <Badge variant="default">{status}</Badge>;
  }
};

export const Route = createFileRoute('/_authenticated/dashboard/activities/')({
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const {
    data: activities,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['activities'],
    queryFn: getActivities,
  });

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;
  const totalItems = activities?.length ?? 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentActivities = React.useMemo(() => {
    if (!activities) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return activities.slice(startIndex, endIndex);
  }, [activities, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-center pb-6 px-0">
          <h3 className="text-2xl font-medium">Activities</h3>
        </CardTitle>
        <div className="flex items-center pt-4 justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Input
                icon={<Search className="h-4 w-4 text-muted-foreground" />}
                id="search"
                placeholder="Search here..."
                className="pl-8 w-80"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="current">Current Week</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Period</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-4 w-16 mb-2" />
                    <Skeleton className="h-3 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 w-24" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-28" />
                  </TableCell>
                </TableRow>
              ))
            ) : isError ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Failed to load activities.
                </TableCell>
              </TableRow>
            ) : (
              currentActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>
                    <div className="font-medium">{activity.week}</div>
                    <div className="text-muted-foreground">{activity.period}</div>
                  </TableCell>
                  <TableCell>{getStatusBadge(activity.status)}</TableCell>
                  <TableCell>{activity.progress}</TableCell>
                  <TableCell>
                    <Link
                      to={'/dashboard/activities/$weekId'}
                      params={{ weekId: activity.id }}
                      className="flex items-center text-primary font-semibold"
                    >
                      View daily task
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between pt-4 w-full">
          <div className="text-sm text-muted-foreground">
            Showing <strong>{currentActivities.length}</strong> out of <strong>{totalItems}</strong> results
          </div>
          <Pagination className="mt-4 flex-1 justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink isActive={currentPage === page} onClick={() => handlePageChange(page)}>
                    {String(page).padStart(2, '0')}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
}
