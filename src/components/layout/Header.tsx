import { DarkThemeToggle } from "flowbite-react";
import { Icon } from "../ui/Icon";
import { cn } from "../../lib/clscTwMerge";

interface HeaderProps {
    totalDay: number;
    dailyGoal?: number;
}

export function Header({totalDay, dailyGoal = 5}: HeaderProps){

    const progress = dailyGoal > 0 
        ? Math.min((totalDay / dailyGoal) * 100, 100) 
        : 0;

    return (
        <header className={cn(
            "w-full border-b border-gray-200 bg-white",
            "dark:bg-gray-800 dark:border-gray-700"
        )}>
            <div className="mx-auto px-4 sm:px6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-6">
                    
                    <div className="flex items-center gap-3">
                        <Icon name="FaRocket" size={20} className="text-indigo-600"/>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            JobCareer <span className="text-indigo-600">Dash</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                <span>Meta: </span> 
                                <span
                                    className={cn(
                                        "font-bold transition-colors duration-300",
                                        totalDay >= dailyGoal ? "text-green-600" : "text-indigo-600"
                                    )}
                                >
                                    {totalDay}
                                </span>
                               <span>/{dailyGoal}</span>
                            </span>

                            <div className="mt-1 h-1.5 w-15 lg:w-38 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                <div
                                    className="h-full bg-indigo-600 transition-all duration-500 ease out"
                                    style={{width: `${progress}%`}}
                                ></div>
                            </div>
                        </div>
                        <DarkThemeToggle className="cursor-pointer focus:ring-0"/>
                    </div>
                </div>
            </div>
        </header>
    );
}