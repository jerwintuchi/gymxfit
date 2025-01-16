"use client";
import React, { useEffect, useState } from 'react'
import UserStatistics from './UserStatistics'
import Attendance from './Attendance'
import Membership from './Membership'
import RouteLinks from './RouteLinks'
import GoalStats from './GoalStats'
import GymHours from './GymHours'

export default function DashboardClientWrapper() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [])

    return (
        <>
            {/* Header */}
            <header className={`py-4 px-6 bg-gray-900 border-b border-gray-800 font-extralight ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 `}>
                <h1 className="ext-3xl text-white font-bold text-center">Gymxfit Admin</h1>
                <GymHours />
            </header>

            {/* Main Grid */}
            <main className={`p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
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
