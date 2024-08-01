import { useParams } from 'react-router-dom';
import MaintenanceLogs from './MaintenanceLogs';

function DroneDetails({ drones }) {
  const { id } = useParams();
  const drone = drones.find((d) => d.id === id);

  if (!drone) {
    return <div className="text-center text-white mt-20 text-2xl animate-pulse">Drone not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 text-white">
      <h2 className="mb-8 text-4xl font-bold text-center animate-bounce">{drone.id} Details</h2>
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 mb-8 animate-fadeIn">
        <div className="mb-4">
          <h5 className="text-2xl font-bold text-gray-800">Status: <span className="font-normal">{drone.status}</span></h5>
        </div>
        <p className="text-lg text-gray-700 mb-2">Flight Hours: {drone.flight_hours}</p>
        <p className="text-lg text-gray-700 mb-2">Battery Status: {drone.battery_status}</p>
        <p className="text-lg text-gray-700 mb-2">Last Known Location: {drone.last_known_location.join(', ')}</p>
        <p className="text-lg text-gray-700">Current Mission: {drone.current_mission}</p>
      </div>
      <MaintenanceLogs logs={drone.maintenance_logs} />
    </div>
  );
}

export default DroneDetails;
