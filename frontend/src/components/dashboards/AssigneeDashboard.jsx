import React from "react";
import { useNavigate } from "react-router-dom";

const AssigneeDashboard = () => {
  const navigate = useNavigate();

  // Static project data (abhi ke liye)
  const projects = [
    { id: 1, title: "Website Revamp", description: "Redesign company website", deadline: "30 March 2025", status: "In Progress" },
    { id: 2, title: "API Integration", description: "Integrate payment gateway API", deadline: "5 April 2025", status: "Pending" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-blue-600 text-white py-4 px-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Assignee Dashboard</h1>
        <p className="text-lg mt-2">Welcome, Team Member!</p>
      </header>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">📄 Assigned Projects</h2>

        {projects.map((project) => (
          <div key={project.id} className="border-b py-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-gray-500">Deadline: {project.deadline}</p>
            
            <p className={`text-sm font-bold ${
              project.status === "Completed" ? "text-green-500" :
              project.status === "In Progress" ? "text-yellow-500" :
              "text-red-500"
            }`}>
              {project.status}
            </p>

            <button 
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              🚀 Update Progress
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

export default AssigneeDashboard;
