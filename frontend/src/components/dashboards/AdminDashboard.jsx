import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleCreateGroup = () => {
    navigate('/create-group');  // Navigate to the dummy page
  };

  // Static job data (abhi ke liye)
  const jobs = [
    { id: 1, title: "Website Revamp", description: "Redesign company website", deadline: "25 March 2025", status: "Pending" },
    { id: 2, title: "API Integration", description: "Integrate payment gateway API", deadline: "28 March 2025", status: "In Progress" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-blue-600 text-white py-4 px-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-lg mt-2">Welcome, Admin!</p>
      </header>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <button 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          👥 Create Group
        </button>

        <button 
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          📂 Assign Project
        </button>

        <button 
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          📊 Track Progress
        </button>
      </div>

      {/* Received Jobs Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">📥 Jobs Received from CSC</h2>
        
        {jobs.map((job) => (
          <div key={job.id} className="border-b py-4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <p className="text-sm text-gray-500">Deadline: {job.deadline}</p>
            <p className={`text-sm font-bold ${job.status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>
              {job.status}
            </p>
            
            <button 
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              ➡️ Assign Group
            </button>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center text-gray-600">
      © 2025 <span class= 'text-amber-700'>ERTL(N)</span>  | CSC Dashboard
      </footer>
    </div>
  );
};

export default AdminDashboard;
