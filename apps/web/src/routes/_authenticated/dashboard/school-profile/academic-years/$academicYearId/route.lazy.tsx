import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AcademicYearStatusBadge } from '@/features/school-profile/AcademicYearStatusBadge';
import { academicYears } from '@/features/school-profile/data';
import { TermStatusBadge } from '@/features/school-profile/TermStatusBadge';
import { createLazyFileRoute, notFound } from '@tanstack/react-router';
import { MoreVertical } from 'lucide-react';
import { ReactNode } from 'react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/school-profile/academic-years/$academicYearId')({
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

function DetailCol({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex flex-col justify-between  gap-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

function RouteComponent() {
  const { academicYearId } = Route.useParams();
  const academicYear = academicYears.find((a) => a.id === academicYearId);

  if (!academicYear) {
    throw notFound();
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            <h3 className="text-2xl font-medium">Academic Year Information</h3>
          </CardTitle>
          <Button variant={'ghost'} size={'icon'}>
            <MoreVertical className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Main Information */}
          <div className="space-y-6">
            <h3 className="font-semibold">Main Information</h3>
            <div className="space-y-4">
              <DetailRow label="Academic Year" value={academicYear.name} />
              <DetailRow
                label="Start Date"
                value={
                  academicYear.startDate instanceof Date ? academicYear.startDate.toLocaleDateString() : academicYear.startDate
                }
              />
              <DetailRow
                label="End Date"
                value={academicYear.endDate instanceof Date ? academicYear.endDate.toLocaleDateString() : academicYear.endDate}
              />

              <DetailRow label="Terms" value={academicYear.terms.length} />
              <DetailRow label="Status" value={<AcademicYearStatusBadge status={academicYear.status} />} />
            </div>
          </div>

          <Separator />

          {/* Terms Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Terms Information</h3>
            {academicYear.terms.map((term, index) => (
              <div key={index} className="space-y-2 py-2">
                <p className="font-medium">Term {index + 1}</p>
                <div className="flex items-center justify-between">
                  <DetailCol
                    label="Start Date"
                    value={
                      academicYear.startDate instanceof Date
                        ? academicYear.startDate.toLocaleDateString()
                        : academicYear.startDate
                    }
                  />
                  <DetailCol
                    label="End Date"
                    value={
                      academicYear.endDate instanceof Date ? academicYear.endDate.toLocaleDateString() : academicYear.endDate
                    }
                  />
                  <DetailCol label="Status" value={<TermStatusBadge status={term.status} />} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
