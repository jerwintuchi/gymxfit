import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
    return (
        <div className="p-2 border-b h-full flex items-center bg-white z-50">
            <MobileSidebar />
        </div>
    );
}

