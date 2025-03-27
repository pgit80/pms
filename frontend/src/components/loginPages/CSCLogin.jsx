import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CSCLogin = () => {
  const navigate=useNavigate();
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-8 w-full max-w-md transition hover:shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">CSC Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition-shadow shadow-md hover:shadow-lg"
            onClick={()=> navigate("/csc-dashboard")}
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/admin-login" className="text-blue-500 hover:underline">Admin Login</Link>
          <span className="mx-2 text-gray-500">|</span>
          <Link to="/assignee-login" className="text-purple-600 hover:underline">Assignee Login</Link>
        </div>
      </div>
    </div>
  );
};
export default CSCLogin;