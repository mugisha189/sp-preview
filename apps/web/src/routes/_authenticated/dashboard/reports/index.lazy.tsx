import { DataTable } from '@/components/core/data-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { columns } from '@/features/reports/columns';
import { reports } from '@/features/reports/data';
import { Report } from '@/features/reports/types';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { Filter, Search } from 'lucide-react';
import { useState } from 'react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/reports/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleRowClick = (row: Report) => {
    navigate({ to: '/dashboard/reports/$reportId', params: { reportId: row.id } });
  };

  return (
    <div className="p-4">
      <Card className="border-0 shadow-none p-4">
        <CardHeader className="flex flex-row justify-between items-center pb-6 px-0">
          <h3 className="text-2xl font-medium">Reports & Certificates</h3>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex justify-between mb-6">
            <div className="flex items-center justify-between gap-2 w-full">
              <Input
                placeholder="Search here...."
                name="query"
                className="w-80"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon={<Search className="h-4 w-4 text-muted-foreground" />}
              />
              <Button size="lg" variant={'outline'}>
                <Filter className="h-5 w-5" />
                <span className="ml-2">Filter</span>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden">
            <DataTable columns={columns} data={reports} search={search} onSearchChange={setSearch} onCellClick={handleRowClick} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
