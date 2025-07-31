export type IndustryStatus = 'Active' | 'Deactivated';

export type Industry = {
  id: string;
  name: string;
  location: string;
  trades: string[];
  studentsPlaced: number;
  contact: string;
  status: IndustryStatus;
  companySupervisorName: string;
  companySupervisorContact: string;
};
