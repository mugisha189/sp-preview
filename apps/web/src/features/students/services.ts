import { useQuery } from '@tanstack/react-query';
import { students } from './data';

export const useGetStudent = (studentId: string | undefined) => {
  return useQuery({
    queryKey: ['studentDetails', studentId],
    queryFn: async () => {
      const response = await new Promise((resolve) => setTimeout(resolve, 500));
      return students.find((student) => student.id === studentId);
    },
    enabled: !!studentId, // only runs when studentId is truthy
  });
};
