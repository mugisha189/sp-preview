import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetTeacher } from '@/features/teachers/service';
import { RowInfo } from '@/features/training/rowInfo';
import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/dashboard/teachers/$teacherId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { teacherId } = useParams({ from: Route.id });
  const { data: details, isLoading, isError } = useGetTeacher(teacherId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 pl-6">Teacher Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-6 space-y-8">
          <div className="border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Main Information</h2>
            <RowInfo label="Level" value={details?.level ?? ''} />
            <RowInfo label="Trade" value={details?.trade ?? ''} />
            <RowInfo label="Qualification" value={details?.qualification ?? ''} />
            <RowInfo label="Status" value={details?.status ?? ''} isStatus={true} variant={'success'} />
          </div>

          <div className="border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">TMIS Information</h2>
            <RowInfo label="Teacher Name" value={details?.name ?? ''} />
            <RowInfo label="Qualification" value={details?.qualification ?? ''} />
            <RowInfo label="Teacher contact" value={details?.phone ?? ''} />
            <RowInfo label="Date of Birth" value={details?.dateOfBirth ?? ''} />
            <RowInfo label="School" value={details?.school ?? ''} />
            <RowInfo label="Province & District" value={details?.province ?? ''} />
          </div>

          <div className="border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Teacher Information</h2>
            <RowInfo label="Province & District" value={details?.province ?? ''} />
            <RowInfo label="Locations" value={details?.district ?? ''} />
            <RowInfo label="Contact" value={details?.phone ?? ''} />
            <RowInfo label="ID" value={details?.idNumber ?? ''} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
