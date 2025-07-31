import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-right">{value}</p>
    </div>
  );
}

export default function SchoolProfileOverview() {
  const school = {
    name: 'Nyabihu Tvet School',
    registrationNumber: 'REG-5642456',
    location: 'Mukamira in Nyabihu',
    principalName: 'Nziza Prince',
    legalStatus: 'Public',
    phoneNumber: '+25079319654',
    email: 'nyabihuTvet@ntv.rw',
    missionStatement:
      'To provide high-quality technical and vocational education that prepares students for productive careers and contributes to national development.',
    visionStatement:
      'To be a center of excellence in technical and vocation education, recognized for innovation and industry relevance',
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A6 6 0 0112 15h0a6 6 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <Button variant="link" className="text-primary">
          Edit school profile information <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <Card className="border-0">
        <CardHeader>
          <CardTitle className="text-lg">Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <DetailRow label="School Name" value={school.name} />
          <DetailRow label="Registration Number" value={school.registrationNumber} />
          <DetailRow label="Location" value={school.location} />
          <DetailRow label="Principal's Name" value={school.principalName} />
          <DetailRow label="Legal Status" value={school.legalStatus} />
          <DetailRow label="Phone number" value={school.phoneNumber} />
          <DetailRow label="Email address" value={school.email} />
        </CardContent>
      </Card>

      <Card className="border-0 border-t border-gray-300 rounded-none">
        <CardHeader>
          <CardTitle className="text-lg">Mission Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{school.missionStatement}</p>
        </CardContent>
      </Card>

      <Card className="border-0 border-t border-gray-300 rounded-none">
        <CardHeader>
          <CardTitle className="text-lg">Vision Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{school.visionStatement}</p>
        </CardContent>
      </Card>
    </div>
  );
}
