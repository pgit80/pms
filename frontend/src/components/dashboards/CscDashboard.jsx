import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import JobForm from "../JobForm";

const CscDashboard = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-green-600 text-white py-4 px-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">CSC Dashboard</h1>
        <p className="text-lg mt-2">Welcome, Customer Service Coordinator!</p>
      </header>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <button 
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          onClick={()=> setIsFormOpen(true)}
        >
          ➕ Create Job
        </button>
        {isFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[500px]">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-semibold">Create New Job</h2>
              <button 
                className="text-red-500 hover:text-red-700"
                onClick={() => setIsFormOpen(false)}
              >
                ✕
              </button>
            </div>

            <JobForm onClose={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}
        <button 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          📤 Forward Job
        </button>

        <button 
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          📊 Track Jobs
        </button>
      </div>

      <footer className="mt-10 text-center text-gray-600">
        © 2025 <span class= 'text-amber-700'>ERTL(N)</span>  | CSC Dashboard
      </footer>
    </div>
  );
};

export default CscDashboard;
