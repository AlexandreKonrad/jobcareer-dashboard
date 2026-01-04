import { type ReactNode } from "react";

interface DashProps {
    children: ReactNode;
    header: ReactNode;
}

export function DashLayout({children, header}: DashProps){
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            {header}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
                {children}
            </main>
        </div>
    );
}