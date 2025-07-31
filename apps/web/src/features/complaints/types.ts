export type ComplaintStatus = 'Reviewed' | 'Approved' | 'Rejected' | 'Pending';

export type Complaint = {
  id: string;
  industrialName: string;
  location: string;
  trainingTimeline: string;
  sentOn: string;
  status: ComplaintStatus;
  code?: string;
  complaints: string;
};
