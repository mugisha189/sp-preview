// Moved from index.lazy.tsx
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.animated';
import CompanyInfoCard from '@/features/logbook/CompanyInfoCard';
import CompanySupervisorEvaluationTable from '@/features/logbook/CompanySupervisorEvaluationTable';
import CompetencesTable from '@/features/logbook/CompetencesTable';
import InterviewGuide from '@/features/logbook/InterviewGuide';
import LearnerInfoCard from '@/features/logbook/LearnerInfoCard';
import LogbookIntroSection from '@/features/logbook/LogbookIntroSection';
import LogbookNote from '@/features/logbook/LogbookNote';
import SchoolSupervisorObservationTable from '@/features/logbook/SchoolSupervisorObservationTable';
import SelfAssessmentForm from '@/features/logbook/SelfAssessmentForm';
import TVETProviderInfoCard from '@/features/logbook/TVETProviderInfoCard';
import { createLazyFileRoute } from '@tanstack/react-router';
import { DownloadCloud } from 'lucide-react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/logbook/details')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full">
      <Tabs defaultValue="introduction" className="flex flex-col">
        <div className="flex flex-col bg-card p-4 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">AIP Liaison Book</h1>
              <p className="text-muted-foreground text-sm">Sina Gerard Nyirangarama ltd</p>
            </div>
            <Button variant="outline">
              <DownloadCloud className="w-4 h-4 mr-1" /> Download Logbook
            </Button>
          </div>
          <TabsList className="mb-8 w-full flex">
            <TabsTrigger className="w-full" value="introduction">
              Introduction
            </TabsTrigger>
            <TabsTrigger className="w-full" value="competences">
              Information on competences
            </TabsTrigger>
            <TabsTrigger className="w-full" value="school-supervisor">
              School supervisor
            </TabsTrigger>
            <TabsTrigger className="w-full" value="company-supervisor">
              Company Supervisor
            </TabsTrigger>
            <TabsTrigger className="w-full" value="self-assessment">
              Self-assessment
            </TabsTrigger>
            <TabsTrigger className="w-full" value="interview-guide">
              Interview Guide
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex flex-col bg-card p-4 mt-2 rounded-lg">
          <TabsContent value="introduction">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <LearnerInfoCard />
              <TVETProviderInfoCard />
              <CompanyInfoCard className="mb-8" />
            </div>
            <LogbookIntroSection />
            <LogbookNote />
          </TabsContent>
          <TabsContent value="competences">
            <CompetencesTable />
          </TabsContent>
          <TabsContent value="school-supervisor">
            <SchoolSupervisorObservationTable />
          </TabsContent>
          <TabsContent value="company-supervisor">
            <CompanySupervisorEvaluationTable />
          </TabsContent>
          <TabsContent value="self-assessment">
            <SelfAssessmentForm />
          </TabsContent>
          <TabsContent value="interview-guide">
            <InterviewGuide />
          </TabsContent>
        </div>
        {/* Other tabs can be filled in later */}
      </Tabs>
    </div>
  );
}
