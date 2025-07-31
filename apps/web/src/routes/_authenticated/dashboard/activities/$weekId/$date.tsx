import { useQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';
import { ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';

import { StateDisplay } from '@/components/shared/state-display';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TimePicker } from '@/components/ui/time-picker';
import { getDayDetails } from '@/features/activities/services';
import { TaskReportModal } from '@/features/activities/TaskReportModal';
import { TaskStatusBadge } from '@/features/activities/TaskStatusBadge';
import { Task } from '@/features/activities/types';
import { AlertTriangle } from 'lucide-react';

export const Route = createFileRoute('/_authenticated/dashboard/activities/$weekId/$date')({
  component: DailyTasksPage,
});

function DailyTasksPage() {
  const { date } = useParams({ from: Route.id });
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [timeIn, setTimeIn] = useState<Date | undefined>(new Date());
  const [timeOut, setTimeOut] = useState<Date | undefined>(new Date());

  const {
    data: details,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['dayDetails', date],
    queryFn: () => getDayDetails(date),
    enabled: !!date,
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-32 mb-2" />
            <Skeleton className="h-4 w-40" />
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <div className="pt-6">
              <Skeleton className="h-6 w-1/2 mb-4" />
              <div className="space-y-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError) {
    return (
      <StateDisplay
        icon={AlertTriangle}
        title="Failed to load details"
        description="An error occurred while fetching the details for this day. Please try again later."
      />
    );
  }

  if (!details) {
    return (
      <StateDisplay
        title="No details found"
        description="There are no details available for the selected day. Please check back later or select a different day."
      />
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{details.day}</CardTitle>
          <CardDescription>{details.date}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Training Attendance (Time In / Time Out)</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="time-in">Time in*</Label>
                  <TimePicker date={timeIn} setDate={setTimeIn} />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="time-out">Time out*</Label>
                  <TimePicker date={timeOut} setDate={setTimeOut} />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-primary">Note</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The time you record will be reviewed and justified by your supervisor.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Today's Assigned Activities / Tasks</h3>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Task</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="w-[150px]">Status</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {details.tasks.map((task, index) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <Badge variant="outline">Task {index + 1}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">{task.title}</TableCell>
                      <TableCell>
                        <TaskStatusBadge status={task.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center text-primary font-semibold"
                          onClick={() => setSelectedTask(task)}
                        >
                          Report
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
      {selectedTask && <TaskReportModal isOpen={!!selectedTask} onClose={() => setSelectedTask(null)} task={selectedTask} />}
    </div>
  );
}
