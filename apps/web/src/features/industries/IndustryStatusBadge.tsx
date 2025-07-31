import { Badge } from '@/components/ui/badge';
import { IndustryStatus } from './types';

const dotColor = {
  Active: 'bg-chart-4',
  Deactivated: 'bg-destructive',
};

const variant = {
  Active: 'success',
  Deactivated: 'destructive',
} as any;

export function IndustryStatusBadge({ status }: { status: IndustryStatus }) {
  return (
    <div className="cursor-pointer">
      <Badge variant={variant[status]} className="flex items-center gap-2 px-4 py-1">
        <div className={`w-2 h-2 rounded-full ${dotColor[status]}`} />
        {status}
      </Badge>
    </div>
  );
}
