import { Badge } from '@/components/ui/badge';
import { SectorTradeStatus } from './types';

const dotColor = {
  Active: 'bg-green-400',
  Inactive: 'bg-red-400',
};

const variant = {
  Active: 'success',
  Inactive: 'destructive',
} as any;

export function SectorTradeStatusBadge({ status }: { status: SectorTradeStatus }) {
  return (
    <div className="cursor-pointer">
      <Badge variant={variant[status]} className="flex items-center gap-2 px-4 py-1">
        <div className={`w-2 h-2 rounded-full ${dotColor[status]}`} />
        {status}
      </Badge>
    </div>
  );
}
