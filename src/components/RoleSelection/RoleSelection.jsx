import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Select Role</h2>
          <p className="mt-2 text-gray-600">Are you logging in as a Student or an Educator?</p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelection('student')}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Login as Student
          </button>
          <button
            onClick={() => handleRoleSelection('educator')}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            Login as Educator
          </button>
        </div>
      </div>
    </div>
  );
}
