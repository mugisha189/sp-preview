import { Badge } from '@/components/ui/badge';
import { TaskStatus } from './types';

export const TaskStatusBadge = ({ status }: { status: TaskStatus }) => {
  if (status === 'Reported') {
    return <Badge variant="default">Reported</Badge>;
  }

  if (status === 'Pending') {
    return <Badge variant="secondary">Pending</Badge>;
  }

  return null;
};
