import React from 'react';

function MaintenanceLogs({ logs }) {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 animate-fadeIn">
      <h3 className="mb-5 text-2xl font-bold text-gray-800">Maintenance Logs</h3>
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Technician</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {logs.map((log, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{log.date}</td>
              <td className="py-3 px-6 text-left">{log.description}</td>
              <td className="py-3 px-6 text-left">{log.technician}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaintenanceLogs;
