import { useQuery } from '@tanstack/react-query';
import { Link, createFileRoute, useParams } from '@tanstack/react-router';
import { AlertTriangle, ChevronRight } from 'lucide-react';

import { StateDisplay } from '@/components/shared/state-display';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DayStatusBadge } from '@/features/activities/DayStatusBadge';
import { getWeekDetails } from '@/features/activities/services';

export const Route = createFileRoute('/_authenticated/dashboard/activities/$weekId/')({
  component: WeeklyActivitiesPage,
});

function WeeklyActivitiesPage() {
  const { weekId } = useParams({ from: Route.id });
  const {
    data: details,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['weekDetails', weekId],
    queryFn: () => getWeekDetails(weekId),
    enabled: !!weekId,
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-7 w-40 mb-2" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isError || !details) {
    return (
      <StateDisplay
        icon={AlertTriangle}
        title="Failed to load details"
        description="An error occurred while fetching the details for this week. Please try again later."
      />
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{details.title}</CardTitle>
        <p className="text-muted-foreground text-sm">{details.subtitle}</p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Period</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Number of activities</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {details.days.map((day) => (
              <TableRow key={day.day}>
                <TableCell>
                  <div className="font-medium">{day.day}</div>
                  <div className="text-sm text-muted-foreground">{day.date}</div>
                </TableCell>
                <TableCell>{<DayStatusBadge status={day.status} />}</TableCell>
                <TableCell>{day.activities}</TableCell>
                <TableCell>
                  <Link
                    to={'/dashboard/activities/$weekId/$date'}
                    params={{ weekId, date: day.id }}
                    className="flex items-center text-primary font-semibold"
                  >
                    Report
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
