import { Badge } from '@/components/ui/badge';
import { ComplaintStatus } from './types';

const dotColor = {
  Reviewed: 'bg-primary',
  Approved: 'bg-chart-4',
  Rejected: 'bg-destructive',
  Pending: 'bg-chart-1',
};

const variant = {
  Reviewed: 'default',
  Approved: 'success',
  Rejected: 'destructive',
  Pending: 'warning',
} as any;

export function ComplaintStatusBadge({ status }: { status: ComplaintStatus }) {
  return (
    <div className="cursor-pointer">
      <Badge variant={variant[status]} className="flex items-center gap-2 px-4 py-1">
        <div className={`w-2 h-2 rounded-full ${dotColor[status]}`} />
        {status}
      </Badge>
    </div>
  );
}
