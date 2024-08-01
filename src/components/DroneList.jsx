import React from 'react';
import { Link } from 'react-router-dom';

function DroneList({ drones }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10">
      <h2 className="mb-8 text-4xl font-bold text-white text-center animate-bounce">Drone Fleet Overview</h2>
      <div className="space-y-6">
        {drones.map((drone) => (
          <Link
            key={drone.id}
            to={`/drones/${drone.id}`}
            className="block p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:bg-opacity-100 transform hover:-translate-y-1 transition duration-300 hover:shadow-2xl"
          >
            <div className="flex justify-between items-center mb-3">
              <h5 className="text-2xl font-bold text-gray-800">{drone.id}</h5>
              <small className={`text-xs font-semibold px-2 py-1 rounded ${drone.status === 'Available' ? 'bg-green-200 text-green-900' : drone.status === 'In-flight' ? 'bg-blue-200 text-blue-900' : 'bg-yellow-200 text-yellow-900'}`}>
                {drone.status}
              </small>
            </div>
            <p className="text-lg text-gray-700">Battery: {drone.battery_status}</p>
            <small className="text-gray-600">Flight Hours: {drone.flight_hours}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DroneList;

