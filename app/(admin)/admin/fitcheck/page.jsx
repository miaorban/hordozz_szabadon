import FitcheckService from '@/app/utils/FitcheckService';
import Link from 'next/link';
import { Chip } from '@heroui/react';

export default async function AdminBookings() {
  const fitchecks = await new FitcheckService().list();

  return (
    <>
      <h1>Fitchecks</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Created At</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fitchecks.map((fitcheck) => (
            <tr key={fitcheck.fitcheck_id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{fitcheck.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {fitcheck.created_at ? new Date(fitcheck.created_at).toISOString().split('T')[0].replace(/-/g, '.') : 'N/A'}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Chip 
                  color={
                    fitcheck.status === 'done' ? 'success' :
                    fitcheck.status === 'in_progress' ? 'warning' :
                    fitcheck.status === 'pending' ? 'danger' :
                    'default'
                  }
                  variant="flat"
                  size="sm"
                >
                  {fitcheck.status ? fitcheck.status.replace('_', ' ').toUpperCase() : 'PENDING'}
                </Chip>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <Link href={`/admin/fitcheck/${fitcheck.fitcheck_id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
