import React from 'react'

export default function DashboardClientWrapper() {
    return (
        <>
            {/* Header */}
            <header className="py-4 px-6 bg-gray-900 border-b border-gray-800">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            </header>

            {/* Main Grid */}
            <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Overview */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">User Statistics</h2>
                    <p>Total Users: 120</p>
                    <p>Active Users: 85</p>
                    <p>Managers: 5</p>
                </div>

                {/* Attendance */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Attendance</h2>
                    <p>{"Today's Check-Ins: 50"}</p>
                    <p>Weekly Check-Ins: 350</p>
                    <p>Monthly Check-Ins: 1200</p>
                </div>

                {/* Membership */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Membership Summary</h2>
                    <p>Active Members: 75</p>
                    <p>Expiring Soon: 10</p>
                    <p>Non-Members: 20</p>
                </div>

                {/* Goal Distribution */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 col-span-1 md:col-span-2">
                    <h2 className="text-xl font-semibold mb-2">User Goals</h2>
                    <p>BULK: 40%</p>
                    <p>CUT: 30%</p>
                    <p>BODY RECOMPOSITION: 20%</p>
                    <p>LEAN BULK: 10%</p>
                </div>

                {/* Links to Other Routes */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
                    <p className="text-gray-400">View and manage all registered users.</p>
                    <a
                        href="/users"
                        className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Go to Users
                    </a>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Attendance Logs</h2>
                    <p className="text-gray-400">View and filter user attendance logs.</p>
                    <a
                        href="/attendance"
                        className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Go to Attendance
                    </a>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Notifications</h2>
                    <p className="text-gray-400">Manage and send user notifications.</p>
                    <a
                        href="/notifications"
                        className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Go to Notifications
                    </a>
                </div>
            </main>
        </>
    )
}
