import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sectorTrades } from '@/features/school-profile/data';
import { SectorTradeStatusBadge } from '@/features/school-profile/SectorTradeStatusBadge';
import { createLazyFileRoute, notFound } from '@tanstack/react-router';
import { MoreVertical } from 'lucide-react';
import { ReactNode } from 'react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/school-profile/sector-trade/$sectorTradeId')({
  component: RouteComponent,
});

function DetailRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex justify-between items-center ">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

function RouteComponent() {
  const { sectorTradeId } = Route.useParams();
  const sectorTrade = sectorTrades.find((s) => s.id === sectorTradeId);

  if (!sectorTrade) {
    throw notFound();
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between ">
          <CardTitle>
            <h3 className="text-2xl font-medium">Sector & Trade Information</h3>
          </CardTitle>
          <Button variant={'ghost'} size={'icon'}>
            <MoreVertical className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 border-t pt-5">
            <h3 className="font-semibold">Overall Information</h3>
            <div className="space-y-4">
              <DetailRow label="Trade Name" value={sectorTrade.tradeName} />
              <DetailRow label="Sector Name" value={sectorTrade.sectorName} />
              <DetailRow label="Levels" value={sectorTrade.levels.join(',')} />
              <DetailRow label="Students Enrolled" value={sectorTrade.studentsEnrolled} />
              <DetailRow label="Status" value={<SectorTradeStatusBadge status={sectorTrade.status} />} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
