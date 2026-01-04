import { useState} from 'react';
import { JobForm } from "../form/JobForm";
import { Icon } from "./Icon";
import { cn } from '../../lib/clscTwMerge';
import { type JobFormData } from '../../types/Job';

interface JobFormSectionProps {
    onAddJob: (data: JobFormData) => void
}

export function JobFormSection({ onAddJob }: JobFormSectionProps){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full shadow-md rounded-lg border-gray-700 dark:border-gray-700">

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "cursor-pointer flex w-full rounded-t-lg items-center justify-between p-5 text-left font-medium",
                    "bg-white dark:bg-gray-800",
                    "hover:bg-gray-50 dark:hover:bg-gray-700",
                    "transition-colors duration-200 focus:outline-none"
                )}
            >
                <div className="flex items-center gap-2">
                    <div className={cn(
                        "transition-transform duration-300 ease-out",
                        isOpen ? "rotate-45" : "rotate-0"
                    )}>
                        <Icon name="FaPlus" size={14} className="text-indigo-600"/>
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                        Adicionar Nova Candidatura
                    </span>
                </div>
            </button>

            <div className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}>
                <div className="overflow-hidden">
                    <div className="bg-white dark:bg-gray-800 p-5 border-t border-gray-100 dark:border-gray-700 rounded-b-lg">
                        <JobForm onSubmit={onAddJob}/>
                    </div>
                </div>
            </div>
        </div>
    );
}