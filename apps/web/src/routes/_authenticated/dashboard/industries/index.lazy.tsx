import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.animated';
import { IndustryCard } from '@/features/industries/IndustryCard';
import { industries } from '@/features/industries/data';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/dashboard/industries/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full">
      <Tabs defaultValue="all" className="flex flex-col">
        <div className="flex flex-col bg-card p-4 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">TVET Industries</h1>
          </div>

          <TabsList className="mb-8 max-w-md w-full flex">
            <TabsTrigger className="w-full" value="all">
              All
            </TabsTrigger>
            <TabsTrigger className="w-full" value="welding">
              Welding
            </TabsTrigger>
            <TabsTrigger className="w-full" value="culinary">
              Culinary Art
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex flex-col mt-2">
          <TabsContent value="all">
            <div className="grid gap-8">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="welding">
            <div className="grid gap-8">
              {industries
                .filter((industry) => industry.trades.includes('Welding'))
                .map((industry) => (
                  <IndustryCard key={industry.id} industry={industry} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="culinary">
            <div className="grid gap-8">
              {industries
                .filter((industry) => industry.trades.includes('Culinary Art'))
                .map((industry) => (
                  <IndustryCard key={industry.id} industry={industry} />
                ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
