import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ComplaintStatusBadge } from '@/features/complaints/ComplaintStatusBadge';
import { complaints } from '@/features/complaints/data';
import { createLazyFileRoute, notFound } from '@tanstack/react-router';
import { MoreVertical } from 'lucide-react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/complaints/$complaintId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { complaintId } = Route.useParams();
  const complaint = complaints.find((c) => c.id === complaintId);

  if (!complaint) {
    throw notFound();
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-medium">Complaints Informations</h3>
            <Button variant={'ghost'} size={'sm'}>
              <MoreVertical />
            </Button>
          </div>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="mb-6">
            <h4 className="text-xl font-medium mb-4">Training Information</h4>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Industrial Name</p>
                <p className="font-medium text-sm">{complaint.industrialName}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{complaint.location}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Training Timeline</p>
                <p className="text-sm font-medium">{complaint.trainingTimeline}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Complaint Status</p>
                <ComplaintStatusBadge status={complaint.status} />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Sent on</p>
                <p className="text-sm font-medium">{complaint.sentOn}</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="mt-6 mb-3">
            <h4 className="text-lg font-medium mb-2">Complaints</h4>
            <p className="text-muted-foreground">{complaint.complaints}</p>
          </div>
          <Separator />
        </CardContent>
      </Card>
    </div>
  );
}
