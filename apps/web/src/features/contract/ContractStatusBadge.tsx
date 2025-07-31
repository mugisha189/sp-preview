import { Badge } from '@/components/ui/badge';
import { ContractStatus } from './types';

const dotColor = {
  Approved: 'bg-green-400',
  Terminated: 'bg-red-400',
  Pending: 'bg-orange-300',
};

const variant = {
  Approved: 'success',
  Terminated: 'destructive',
  Pending: 'warning',
} as any;

export function ContractStatusBadge({ status }: { status: ContractStatus }) {
  return (
    <div className="cursor-pointer">
      <Badge variant={variant[status]} className="flex items-center gap-2 px-4 py-1">
        <div className={`w-2 h-2 rounded-full ${dotColor[status]}`} />
        {status}
      </Badge>
    </div>
  );
}
