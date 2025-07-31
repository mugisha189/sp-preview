import { Badge } from '@/components/ui/badge';
import { Report } from './types';

interface ReportStatusBadgeProps {
  status: Report['status'];
}

export function ReportStatusBadge({ status }: ReportStatusBadgeProps) {
  const variant = {
    Approved: 'success',
    Terminated: 'destructive',
    Pending: 'warning',
  }[status] as 'success' | 'destructive' | 'warning';

  const dotColor = {
    Approved: 'bg-chart-4',
    Terminated: 'bg-destructive',
    Pending: 'bg-chart-1',
  }[status];

  return (
    <Badge variant={variant} className="flex items-center gap-2 px-4 py-1 rounded-sm">
      <div className={`w-2 h-2 rounded-full ${dotColor}`} />
      {status}
    </Badge>
  );
}
