import { Badge } from '@/components/ui/badge';
import { TermStatus } from './types';

const dotColor = {
  Active: 'bg-green-400',
  Ended: 'bg-red-400',
  Planned: 'bg-orange-300',
};

const variant = {
  Active: 'success',
  Ended: 'destructive',
  Planned: 'warning',
} as any;

export function TermStatusBadge({ status }: { status: TermStatus }) {
  return (
    <div className="cursor-pointer">
      <Badge variant={variant[status]} className="flex items-center gap-2 px-4 py-1">
        <div className={`w-2 h-2 rounded-full ${dotColor[status]}`} />
        {status}
      </Badge>
    </div>
  );
}
