import { useQuery } from '@tanstack/react-query';
import { teachers } from './data';

export const useGetTeacher = (teacherId: string | undefined) => {
  return useQuery({
    queryKey: ['teacherDetails', teacherId],
    queryFn: async () => {
      const response = await new Promise((resolve) => setTimeout(resolve, 500));
      return teachers.find((teacher) => teacher.id === teacherId);
    },
    enabled: !!teacherId, // only runs when teacherId is truthy
  });
};
