import React from 'react'

export default function RouteLinks() {
    return (
        <>
            <div className="text-white bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
                <p className="text-gray-400">View and manage all registered users.</p>
                <a
                    href="/users"
                    className="inline-block mt-4 px-4 py-2 bg-teal-600 rounded hover:bg-teal-700"
                >
                    Go to Users
                </a>
            </div>

            <div className="text-white bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">Attendance Logs</h2>
                <p className="text-gray-400">View and filter user attendance logs.</p>
                <a
                    href="/attendance"
                    className="inline-block mt-4 px-4 py-2 bg-teal-600 rounded hover:bg-teal-700"
                >
                    Go to Attendance
                </a>
            </div>

            <div className="text-white bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">Notifications</h2>
                <p className="text-gray-400">Manage and send user notifications.</p>
                <a
                    href="/notifications"
                    className="inline-block mt-4 px-4 py-2 bg-teal-600 rounded hover:bg-teal-700"
                >
                    Go to Notifications
                </a>
            </div>
        </>
    )
}
