import { DataTable } from '@/components/core/data-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { columns } from '@/features/industries/columns';
import { industries } from '@/features/industries/data';
import { Industry } from '@/features/industries/types';
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { ArrowRight, DownloadCloud, Filter, Search, UploadCloud } from 'lucide-react';
import { useState } from 'react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/industries/recommended')({
  component: RouteComponent,
});

function RouteComponent() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleRowClick = (row: Industry) => {
    navigate({
      to: '/dashboard/industries/$industryId',
      params: { industryId: row.id },
    });
  };

  return (
    <div className="p-4">
      <Card className="border-0 shadow-none p-4">
        <CardHeader className="flex flex-row justify-between items-center pb-6 px-0">
          <h3 className="text-2xl font-medium">Recommended Industries</h3>
          <div>
            <Link to="/dashboard/industries">
              <Button size="lg">
                View industries
                <ArrowRight className="ml-2 h-4 w-4 -rotate-45" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search here...."
                name="query"
                className="w-80"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon={<Search className="h-4 w-4 text-muted-foreground" />}
              />
              <Button variant={'outline'}>
                <Filter className="h-5 w-5" />
                <span className="ml-2">Filter</span>
              </Button>
            </div>
            <div className="space-x-2">
              <Button variant={'outline'}>
                <DownloadCloud className="h-5 w-5" />
                <span className="ml-2">Export Industries</span>
              </Button>
              <Button variant={'outline'}>
                <UploadCloud className="h-5 w-5" />
                <span className="ml-2">Import Industries</span>
              </Button>
            </div>
          </div>
          <div className=" overflow-hidden">
            <DataTable columns={columns} data={industries} search={search} onSearchChange={setSearch} onCellClick={handleRowClick} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
