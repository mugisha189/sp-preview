import { DataTable } from '@/components/core/data-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AddContractModal } from '@/features/contract/AddContractModal';
import { columns } from '@/features/contract/columns';
import { contracts } from '@/features/contract/data';
import { Contract } from '@/features/contract/types';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { Download, Filter, Search, Upload } from 'lucide-react';
import { useState } from 'react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/contract/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleRowClick = (row: Contract) => {
    navigate({
      to: '/dashboard/contract/$contractId',
      params: { contractId: row.id },
    });
  };

  return (
    <div className="p-4">
      <Card className="border-0 shadow-none p-4">
        <CardHeader className="flex flex-row justify-between items-center pb-6 px-0">
          <h3 className="text-2xl font-medium">All contracts</h3>
          <AddContractModal />
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
                <Upload className="h-5 w-5" />
                <span className="ml-2">Export Contract</span>
              </Button>
              <Button variant={'outline'}>
                <Download className="h-5 w-5" />
                <span className="ml-2">Import Contract</span>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden">
            <DataTable columns={columns} data={contracts} search={search} onSearchChange={setSearch} onCellClick={handleRowClick} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
