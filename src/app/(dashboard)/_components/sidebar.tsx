import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-black shadow-sm">
            <div className="p-6 flex justify-center bg-transparent">
                <Logo />
            </div>
            {/* Routes Section */}
            <div className="flex flex-col w-full text-white">
                <SidebarRoutes />
            </div>
        </div>
    );
};

export default Sidebar;
