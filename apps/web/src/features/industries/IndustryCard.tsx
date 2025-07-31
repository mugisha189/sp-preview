import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Eye, MoreVertical } from 'lucide-react';
import { Industry } from './types';

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Card className="p-4 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{industry.name}</h3>
        <div className="flex items-center gap-2">
          <Link to={'/dashboard/industries/$industryId'} params={{ industryId: industry.id }}>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Eye className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <p className="text-muted-foreground">Location</p>
          <p>{industry.location}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-muted-foreground">Contact</p>
          <p>{industry.contact}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-muted-foreground">Trainings offered</p>
          <p>{industry.trades.join(', ')}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-muted-foreground">Company supervisor Name</p>
          <p>{industry.companySupervisorName}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-muted-foreground">Company supervisor Contact</p>
          <p>{industry.companySupervisorContact}</p>
        </div>
      </div>
    </Card>
  );
}
