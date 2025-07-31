export type ContractStatus = 'Approved' | 'Terminated' | 'Pending';

export interface Contract {
  id: string;
  contractTitle: string;
  contractType: string;
  partyA: string;
  partyB: string;
  startDate: string;
  endDate: string;
  contractValueA: string;
  termsAndConditions: string;
  digitalSignature: string; // Assuming this will be a URL or file path
  status: ContractStatus;
}
