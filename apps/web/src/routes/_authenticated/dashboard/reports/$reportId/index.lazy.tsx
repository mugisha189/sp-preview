import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { reports } from '@/features/reports/data';
import { createLazyFileRoute, useParams } from '@tanstack/react-router';
import { DownloadCloudIcon, FileIcon } from 'lucide-react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/reports/$reportId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { reportId } = useParams({ from: '/_authenticated/dashboard/reports/$reportId/' });
  const report = reports.find((r) => r.id === reportId);

  if (!report) {
    return <div>Report not found</div>;
  }

  return (
    <div className="p-4">
      <Card className="border-0 shadow-none p-4">
        <CardHeader className="flex flex-row justify-between items-center pb-6 px-0">
          <div>
            <h3 className="text-2xl font-medium">TVET industrial attachment Participation Certificate</h3>
            <h4 className="text-sm text-muted-foreground">Sina Genard Nyirangarama Ltd</h4>
          </div>
          <a href={report.fileUrl} download className="mt-4">
            <Button variant="outline">
              <DownloadCloudIcon className="mr-2 h-4 w-4" />
              Download Certificate
            </Button>
          </a>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg bg-muted/50 min-h-[400px]">
            <FileIcon className="w-16 h-16 text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground mb-2">Certificate Preview Not Available</p>
            <p className="text-sm text-muted-foreground">Please use the download button to view the certificate</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
