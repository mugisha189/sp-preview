import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetStudent } from '@/features/students/services';
import { RowInfo } from '@/features/training/rowInfo';
import { createFileRoute, useParams } from '@tanstack/react-router';
export const Route = createFileRoute('/_authenticated/dashboard/students/$studentId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { studentId } = useParams({ from: Route.id });
  const { data: details, isLoading, isError } = useGetStudent(studentId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 pl-6">Student Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-6 space-y-8">
          <div className="border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Main Information</h2>
            <RowInfo label="Level" value={details?.classLevel ?? ''} />
            <RowInfo label="Trade" value={details?.trade ?? ''} />
            <RowInfo label="Current Company" value={details?.company ?? ''} />
            <RowInfo label="Status" value={details?.status ?? ''} isStatus={true} variant={'success'} />
          </div>

          <div className="border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">SDMS Information</h2>
            <RowInfo label="Student Name" value={details?.name ?? ''} />
            <RowInfo label="Code" value={details?.code ?? ''} />
            <RowInfo label="date of birth" value={details?.dateOfBirth ?? ''} />
            <RowInfo label="Shool" value={details?.school ?? ''} />
            <RowInfo label="Province & District" value={`${details?.province} in ${details?.district}`} />
          </div>

          <div className="border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Parent/Guardian Information</h2>
            <RowInfo label="Parent/Guardian Name" value={details?.parentName ?? ''} />
            <RowInfo label="Province & District" value={`${details?.parentProvince} in ${details?.parentDistrict}`} />
            <RowInfo label="Locations" value={details?.parentLocation ?? ''} />
            <RowInfo label="Contact" value={details?.parentContact ?? ''} />
            <RowInfo label="ID of the parent" value={details?.parentId ?? ''} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
