export type Report = {
  id: string;
  type: 'certificate' | 'report';
  title: string;
  company: string;
  company_district: string;
  company_sector: string;
  timeline_from: string;
  timeline_to: string;
  status: 'Approved' | 'Terminated' | 'Pending';
  thumbnailUrl: string;
  fileUrl: string;
};
