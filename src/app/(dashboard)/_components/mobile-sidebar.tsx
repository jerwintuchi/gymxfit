import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export const MobileSidebar = () => {
    return (
        <div className="text-white">
            <Sheet>
                <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                    <Menu />
                </SheetTrigger>
                <SheetContent side="left" className="p-0 bg-black border-none">
                    {/* Adding an accessible title */}
                    <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </div>
    );
};
