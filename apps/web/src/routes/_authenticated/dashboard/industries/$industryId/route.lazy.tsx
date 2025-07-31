import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { IndustryStatusBadge } from '@/features/industries/IndustryStatusBadge';
import { industries } from '@/features/industries/data';
import { createLazyFileRoute, notFound } from '@tanstack/react-router';
import { MoreVertical } from 'lucide-react';
import { ReactNode } from 'react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/industries/$industryId')({
  component: RouteComponent,
});

function DetailRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

function RouteComponent() {
  const { industryId } = Route.useParams();
  const industry = industries.find((c) => c.id === industryId);

  if (!industry) {
    throw notFound();
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            <h3 className="text-2xl font-medium">Industry Information</h3>
          </CardTitle>
          <Button variant={'ghost'} size={'icon'}>
            <MoreVertical className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Industry Overview */}
          <div className="space-y-4">
            <h3 className="font-semibold">Industry Overview</h3>
            <div className="space-y-2">
              <DetailRow label="Name" value={industry.name} />
              <DetailRow label="Location" value={industry.location} />
              <DetailRow label="Contact" value={industry.contact} />
              <DetailRow label="Students Placed" value={industry.studentsPlaced} />
              <DetailRow label="Status" value={<IndustryStatusBadge status={industry.status} />} />
            </div>
          </div>
          <Separator />
          {/* Available Training Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold">Available Training Programs</h3>
            {industry.trades.map((trade, index) => (
              <div key={index} className="space-y-2 py-2">
                <DetailRow label="Name" value={trade} />
                <DetailRow label="Duration" value="3 month" />
                <DetailRow label="Status" value="Available" />
                <DetailRow label="Industry supervisor Name" value="Ishimwe Neza" />
                <DetailRow label="Industry supervisor Number" value="0793990765" />
                {index !== industry.trades.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
