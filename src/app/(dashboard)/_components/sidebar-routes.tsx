"use client";

import { Calendar, Layout, LucideIcon, Users } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

type RouteLinks = {
    icon: LucideIcon,
    label: string,
    href: `/${string}` // href must start with "/"
}

const guestRoutes: RouteLinks[] = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Users,
        label: "Users",
        href: "/users"
    },
    {
        icon: Calendar,
        label: "Attendances",
        href: "/attendances"
    }
]
export const SidebarRoutes = () => {
    const routes = guestRoutes;
    return (
        <div className="flex flex-col w-full group-hover:text-white">
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
