import * as React from 'react';
import StudentDetail from '@/components/swr/StudentDetail';

export default function SWRPage () {
  return (
    <div>
      <h1>SWR page</h1>

      <ul>
        <li><StudentDetail studentId='lea319jollj7y1rs'/></li>
        <li><StudentDetail studentId='lea319jollj7y1rt'/></li>
        <li><StudentDetail studentId='lea319jollj7y1rs'/></li>
      </ul>
    </div>
  );
}
