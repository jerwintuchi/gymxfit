"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive =
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    };

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-400 text-sm font-[500] pl-6 transition-all hover:text-slate-100",
                isActive && "text-white"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={cn(
                        "text-slate-500 transition-colors",
                        isActive && "text-white",
                        "group-hover:text-slate-100" // Change icon color on sidebar hover
                    )}
                />
                {label}
            </div>
        </button>
    );
};
