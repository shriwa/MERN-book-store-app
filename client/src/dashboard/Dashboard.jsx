// Import necessary React and Tailwind CSS modules
import React from "react";

// Dashboard component
const Dashboard = () => {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 my-12 sm:mx-4 md:mx-12 lg:mx-20 xl:mx-40">
      {/* Sidebar */}
      <aside className="w-1/5 p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        </header>

        {/* Main Content Area */}
        <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8 shadow-md  rounded-xl my-6">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Recent Activity
          </h2>
          {/* Sample Activity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Task Completed</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="bg-green-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">
                New User Registered
              </h3>
              <p className="text-gray-700">Consectetur adipiscing elit...</p>
            </div>
            <div className="bg-yellow-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Product Sale</h3>
              <p className="text-gray-700">
                Sed do eiusmod tempor incididunt...
              </p>
            </div>
          </div>
        </section>
        {/* Main Content Area */}
        <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Recent Activity
          </h2>
          {/* Sample Activity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Task Completed</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="bg-green-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">
                New User Registered
              </h3>
              <p className="text-gray-700">Consectetur adipiscing elit...</p>
            </div>
            <div className="bg-yellow-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Product Sale</h3>
              <p className="text-gray-700">
                Sed do eiusmod tempor incididunt...
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
