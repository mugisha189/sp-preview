import { AcademicYear, SectorTrade } from './types';

export const academicYears: AcademicYear[] = [
  {
    id: 'ay-2020',
    name: '2020 Academic Year',
    status: 'Ended',
    startDate: new Date('2020-01-10'),
    endDate: new Date('2020-12-10'),
    terms: [
      {
        startDate: new Date('2020-01-10'),
        endDate: new Date('2020-04-15'),
        status: 'Ended',
      },
      {
        startDate: new Date('2020-05-01'),
        endDate: new Date('2020-08-10'),
        status: 'Ended',
      },
      {
        startDate: new Date('2020-09-01'),
        endDate: new Date('2020-12-10'),
        status: 'Ended',
      },
    ],
  },
  {
    id: 'ay-2021',
    name: '2021 Academic Year',
    status: 'Ended',
    startDate: new Date('2021-01-15'),
    endDate: new Date('2021-12-10'),
    terms: [
      {
        startDate: new Date('2021-01-15'),
        endDate: new Date('2021-04-10'),
        status: 'Ended',
      },
      {
        startDate: new Date('2021-05-05'),
        endDate: new Date('2021-08-05'),
        status: 'Ended',
      },
      {
        startDate: new Date('2021-09-01'),
        endDate: new Date('2021-12-10'),
        status: 'Ended',
      },
    ],
  },
  {
    id: 'ay-2022',
    name: '2022 Academic Year',
    status: 'Ended',
    startDate: new Date('2022-01-10'),
    endDate: new Date('2022-11-30'),
    terms: [
      {
        startDate: new Date('2022-01-10'),
        endDate: new Date('2022-04-01'),
        status: 'Ended',
      },
      {
        startDate: new Date('2022-05-01'),
        endDate: new Date('2022-07-25'),
        status: 'Ended',
      },
    ],
  },
  {
    id: 'ay-2023',
    name: '2023 Academic Year',
    status: 'Ended',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2023-11-20'),
    terms: [
      {
        startDate: new Date('2023-02-01'),
        endDate: new Date('2023-05-01'),
        status: 'Ended',
      },
      {
        startDate: new Date('2023-05-15'),
        endDate: new Date('2023-08-10'),
        status: 'Ended',
      },
      {
        startDate: new Date('2023-09-01'),
        endDate: new Date('2023-11-20'),
        status: 'Ended',
      },
    ],
  },
  {
    id: 'ay-2024',
    name: '2024 Academic Year',
    status: 'Active',
    startDate: new Date('2024-01-20'),
    endDate: new Date('2024-12-05'),
    terms: [
      {
        startDate: new Date('2024-01-20'),
        endDate: new Date('2024-04-15'),
        status: 'Ended',
      },
      {
        startDate: new Date('2024-05-10'),
        endDate: new Date('2024-08-01'),
        status: 'Active',
      },
    ],
  },
  {
    id: 'ay-2025',
    name: '2025 Academic Year',
    status: 'Planned',
    startDate: new Date('2025-01-15'),
    endDate: new Date('2025-11-30'),
    terms: [
      {
        startDate: new Date('2025-01-15'),
        endDate: new Date('2025-04-20'),
        status: 'Planned',
      },
      {
        startDate: new Date('2025-05-10'),
        endDate: new Date('2025-08-10'),
        status: 'Planned',
      },
      {
        startDate: new Date('2025-09-01'),
        endDate: new Date('2025-11-30'),
        status: 'Planned',
      },
    ],
  },
];

export const sectorTrades: SectorTrade[] = [
  {
    id: '1',
    tradeName: 'Carpentry',
    sectorName: 'Construction',
    levels: ['1', '2', '3'],
    studentsEnrolled: 78,
    status: 'Active',
  },
  {
    id: '2',
    tradeName: 'Plumbing',
    sectorName: 'Construction',
    levels: ['1', '2'],
    studentsEnrolled: 52,
    status: 'Active',
  },
  {
    id: '3',
    tradeName: 'Tailoring',
    sectorName: 'Fashion',
    levels: ['1'],
    studentsEnrolled: 33,
    status: 'Inactive',
  },
  {
    id: '4',
    tradeName: 'Automobile Mechanics',
    sectorName: 'Mechanics',
    levels: ['1', '2', '3'],
    studentsEnrolled: 91,
    status: 'Active',
  },
  {
    id: '5',
    tradeName: 'Electrical Installation',
    sectorName: 'Electricity',
    levels: ['2', '3'],
    studentsEnrolled: 64,
    status: 'Inactive',
  },
];
