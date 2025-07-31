'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.animated';
import SchoolProfileAcademicYear from '@/features/school-profile/SchoolProfileAcademicYear';
import SchoolProfileOverview from '@/features/school-profile/SchoolProfileOverview';
import SchoolProfileSectors from '@/features/school-profile/SchoolProfileSectors';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/dashboard/school-profile/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <Tabs defaultValue="overview">
        <Card className="border-0 shadow-none p-4">
          <CardHeader className=" px-0">
            <h3 className="text-2xl font-medium">School Profile</h3>
          </CardHeader>
          <CardContent className="p-0">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="sectors">Sectors & Trades</TabsTrigger>
            </TabsList>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-none p-4">
          <CardContent className="p-0">
            <TabsContent value="overview">
              <SchoolProfileOverview />
            </TabsContent>

            <TabsContent value="academics">
              <SchoolProfileAcademicYear />
            </TabsContent>

            <TabsContent value="sectors">
              <SchoolProfileSectors />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
