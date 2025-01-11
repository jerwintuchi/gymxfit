import { Navbar } from "./_components/navbar";
import Sidebar from "./_components/sidebar";



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <div className="h-[80px] md:pl-30 fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>
            <div className="hidden md:flex h-full w-40 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-40 pt-[80px] h-fit flex min-h-screen">
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;