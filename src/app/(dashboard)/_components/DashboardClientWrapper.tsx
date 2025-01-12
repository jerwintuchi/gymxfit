import React from 'react'
import UserStatistics from './UserStatistics'
import Attendance from './Attendance'
import Membership from './Membership'
import RouteLinks from './RouteLinks'
import GoalStats from './GoalStats'

export default function DashboardClientWrapper() {
    return (
        <>
            {/* Header */}
            <header className="py-4 px-6 bg-gray-900 border-b border-gray-800 font-extralight">
                <h1 className="text-3xl text-white font-bold text-center">Admin Dashboard</h1>
            </header>

            {/* Main Grid */}
            <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                {/* Overview */}
                <UserStatistics />

                {/* Attendance */}
                <Attendance />

                {/* Membership */}
                <Membership />

                {/* Goal Distribution */}
                <GoalStats />

                {/* Links to Other Routes */}
                <RouteLinks />
            </main>
        </>
    )
}
