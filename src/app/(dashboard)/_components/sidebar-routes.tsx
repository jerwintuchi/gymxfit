"use client";

import { Layout, Users } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Users,
        label: "People",
        href: "/people"
    }
]
export const SidebarRoutes = () => {
    const routes = guestRoutes;
    return (
        <div className="flex flex-col w-full group">
            {
                routes.map((route) => (
                    <SidebarItem
                        key={route.href}
                        label={route.label}
                        icon={route.icon}
                        href={route.href}
                    />
                ))
            }
        </div>
    );
}
