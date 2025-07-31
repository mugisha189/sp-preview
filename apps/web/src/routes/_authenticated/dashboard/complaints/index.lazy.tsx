import { DataTable } from '@/components/core/data-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AddComplaintModal } from '@/features/complaints/AddComplaintModal';
import { columns } from '@/features/complaints/columns';
import { complaints } from '@/features/complaints/data';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Filter, Search } from 'lucide-react';
import { useState } from 'react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/complaints/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [search, setSearch] = useState('');

  return (
    <div className="p-4">
      <Card className="border-0 shadow-none p-4">
        <CardHeader className="flex flex-row justify-between items-center pb-6 px-0">
          <h3 className="text-2xl font-medium">Complaints</h3>
          <AddComplaintModal />
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
            </div>
            <div className="space-x-2">
              <Button size="lg" variant={'outline'}>
                <Filter className="h-5 w-5" />
                <span className="ml-2">Filter</span>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden">
            <DataTable columns={columns} data={complaints} search={search} onSearchChange={setSearch} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
