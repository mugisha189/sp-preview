export type AcademicYear = {
  id: string;
  name: string;
  status: AcademicYearStatus;
  startDate: string | Date;
  endDate: string | Date;
  terms: Term[];
};

export type AcademicYearStatus = 'Planned' | 'Active' | 'Ended';
export type TermStatus = 'Planned' | 'Active' | 'Ended';
export type SectorTradeStatus = 'Active' | 'Inactive';

export type Term = {
  startDate: string | Date;
  endDate: string | Date;
  status: TermStatus;
};

export type SectorTrade = {
  id: string;
  tradeName: string;
  sectorName: string;
  levels: string[];
  studentsEnrolled: number;
  status: SectorTradeStatus;
};
