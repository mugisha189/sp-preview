import { Badge } from '@/components/ui/badge';
import { DayStatus } from './types';

export const DayStatusBadge = ({ status }: { status: DayStatus }) => {
  switch (status) {
    case 'Completed':
      return <Badge variant="success">Completed</Badge>;
    case 'Missed':
      return <Badge variant="destructive">Missed</Badge>;
    case 'Current day':
      return <Badge variant="success">Current day</Badge>;
    case 'Upcoming':
      return <Badge variant="default">Upcoming</Badge>;
    default:
      return <Badge variant="default">{status}</Badge>;
  }
};
