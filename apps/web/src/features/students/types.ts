export type Student = {
  id: string;
  name: string;
  code: string;
  trade: string;
  classLevel: string;
  company?: string;
  status: 'Active' | 'Graduated' | 'Dropped' | 'Transferred';
  dateOfBirth: string;
  school: string;
  province: string;
  district: string;
  parentName: string;
  parentId: string;
  parentContact: string;
  parentLocation: string;
  parentProvince: string;
  parentDistrict: string;
};
