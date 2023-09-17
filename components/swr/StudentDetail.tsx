import * as React from 'react';
import useSWR from 'swr';

export interface IStudentDetailProps {
    studentId: string;
}

export default function StudentDetail ({ studentId }: IStudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false // change tab and back click tab -> not call api
  });

  const handleMutate = () => {
    // mutate(value new, recall api)
    mutate({ name: 'Change data' }, true)
  }

  return (
    <div>
      Name: {data?.name || '--'}

      <button onClick={handleMutate}>Mutate</button>
    </div>
  );
}
