import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ContractStatusBadge } from '@/features/contract/ContractStatusBadge';
import { contracts } from '@/features/contract/data';
import { createLazyFileRoute, notFound } from '@tanstack/react-router';
import { Download } from 'lucide-react';

export const Route = createLazyFileRoute('/_authenticated/dashboard/contract/$contractId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { contractId } = Route.useParams();
  const contract = contracts.find((c) => c.id === contractId);

  if (!contract) {
    throw notFound();
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-medium">Contract Details</h3>
            <Button variant={'outline'}>
              <Download className="h-4 w-4 mr-2" />
              Download Contract
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="border rounded-lg p-6 space-y-6">
            <div className="flex justify-center pb-6 border-b">
              <h2 className="text-xl font-semibold tracking-wider text-foreground">PLACEMENT CONTRACT</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 pb-6 border-b">
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">Contract Information</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Title:</span>{' '}
                    <span className="text-foreground">{contract.contractTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>{' '}
                    <span className="text-foreground">{contract.contractType}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status:</span> <ContractStatusBadge status={contract.status} />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">Contract Period</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Date:</span>{' '}
                    <span className="text-foreground">{contract.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">End Date:</span>{' '}
                    <span className="text-foreground">{contract.endDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contract Value:</span>{' '}
                    <span className="text-foreground">{contract.contractValueA}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6 pb-6 border-b">
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">PARTIES TO THIS AGREEMENT</h4>
                <div className="flex flex-col gap-3">
                  <div className="font-semibold text-foreground">{contract.partyA}</div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Representative:</span>{' '}
                    <span className="text-foreground">Murasira Nina</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contact:</span> <span className="text-foreground">+250788740563</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span> <span className="text-foreground">1/7/2025</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4 text-white select-none">.</h4>
                <div className="flex flex-col gap-3">
                  <div className="font-semibold text-foreground">{contract.partyB}</div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Representative:</span>{' '}
                    <span className="text-foreground">Mugabe Ivan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contact:</span> <span className="text-foreground">+250788740563</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span> <span className="text-foreground">10/7/2025</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-6 border-b">
              <h4 className="text-lg font-medium mb-4 text-foreground">TERMS AND CONDITIONS</h4>
              <div className="text-muted-foreground space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground">1. Purpose</h5>
                  <p>
                    This agreement establishes the terms for practical training and work experience for the about-named student as
                    part of their technical education program.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">2. Training Period</h5>
                  <p>The Training shall commence on 8/7/2025 and conclude on 4/11/2025, subject to the terms herien.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">3. Responsibilities</h5>
                  <div className="ml-4">
                    <h6 className="font-semibold text-foreground">School Responsibilities:</h6>
                    <ul className="list-disc ml-6">
                      <li>Provide qualified students ready for practical training</li>
                      <li>Maintain regular contact and supervision</li>
                      <li>Handle academic assessment and evaluation</li>
                    </ul>
                  </div>
                  <div className="ml-4 mt-2">
                    <h6 className="font-semibold text-foreground">Company Responsibilities:</h6>
                    <ul className="list-disc ml-6">
                      <li>Provide practical training opportunities</li>
                      <li>Assign qualified supervisors</li>
                      <li>Ensure safe working environment</li>
                      <li>Provide feedback on student performance</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">4. Financial Arrangement</h5>
                  <p>
                    The total contract value is 25000 frw, which cover training allowances, materials and administrative costs as
                    outlined in the detailed agreement.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">5. Termination</h5>
                  <p>
                    This agreement may be terminated by either party with 30 days written notice. Early termination procedures and
                    obligations are detailed in the full contract documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="pb-6">
              <h4 className="text-lg font-medium mb-2 text-foreground">SIGNATURES</h4>
              <div className="grid grid-cols-2 mt-12 text-center">
                <div>
                  <img
                    src="https://res.cloudinary.com/vhec/image/upload/v1721115321/signature_k6x9fb.png"
                    alt="Signature"
                    className="h-12 mx-auto"
                  />
                  <p className="mt-2 border-t pt-2 w-48 mx-auto text-foreground">Nyabihu TVET</p>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/vhec/image/upload/v1721115321/signature_k6x9fb.png"
                    alt="Signature"
                    className="h-12 mx-auto"
                  />
                  <p className="mt-2 border-t pt-2 w-48 mx-auto text-foreground">Sina Gerard Niyirangarama</p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="text-center text-sm text-muted-foreground pt-2">
              <p>This contract is subject to the laws and regulations governing technical education and training.</p>
              <p>Contract generated on 11/12/2025 | Technical Education Institute</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
