import React, { memo, useCallback } from "react";
import { cn } from "../../lib/clscTwMerge";
import { JOB_STATUS, type JobStatus, type Job } from "../../types/Job";
import { Icon, type IconNames } from "../ui/Icon";
import { formatDate } from "../../utils/formatters";

const STATUS_CONFIG: Record<JobStatus, string> = {
    [JOB_STATUS.APPLIED]:   "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    [JOB_STATUS.INTERVIEW]: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    [JOB_STATUS.OFFER]:     "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    [JOB_STATUS.REJECTED]:  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    icon: IconNames;
    variant?: 'default' | 'danger' | 'active';
    tooltip: string;    
}

const ActionButton = memo(function ActionButton({ icon, variant = 'default', tooltip, className, ...props }: ActionButtonProps){
    return(
        <button
            type="button"
            title={tooltip}
            className={cn(
                "cursor-pointer p-2 rounded-full transition-all duration-200 focus:outline-none",
                variant === 'default' && "text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                variant === 'danger'  && "text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 focus:ring-red-500",
                variant === 'active'  && "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 ring-indigo-500 scale-105",
                className
            )}
            {...props}
        >
            <Icon name={icon} size={18} />
        </button>
    )
});

interface StatusSelectProps{
    value: JobStatus;
    onChange: (status: JobStatus) => void;
}

function StatusSelect({ value, onChange }: StatusSelectProps){
    return(
        <div className="relative group inline-flex items-center">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as JobStatus)}
                className={cn(
                    "appearance-none cursor-pointer text-xs font-bold uppercase tracking-wide",
                    "py-1.5 pl-4 pr-8 rounded-full border-none outline-none focus:ring-2 focus:ring-offset-1",
                    "transition-colors duration-200 ease-in-out",
                    STATUS_CONFIG[value]
                )}
            >
                {Object.values(JOB_STATUS).map((status) => (
                    <option key={status} value={status} className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                        {status}
                    </option>
                ))}
            </select>
            
            <div className="absolute right-3 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
                <Icon name="FaChevronDown" size={10} className="text-current" />
            </div>
        </div>
    );
}

interface JobItemProps {
    job: Job;
    onDelete: (id: string) => void;
    onUpdate: (id: string, data: Partial<Job>) => void;
}

export const JobItem = memo(function JobItem({ job, onUpdate, onDelete }: JobItemProps) {

    const handleDelete = useCallback(() => {
        onDelete(job.id);
    }, [job.id, onDelete]);

    const handleStatusChange = useCallback((newStatus: JobStatus) => {
        onUpdate(job.id, { status: newStatus });
    }, [job.id, onUpdate]);

    const handleNetworking = useCallback(() => {
        onUpdate(job.id, { networking: !job.networking });
    }, [job.id, job.networking, onUpdate]);

    return (
        <tr className="group border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(job.date)}
                </span>
            </td>

            <td className="px-6 py-4 w-full">
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {job.company}
                    </span>
                    
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                            {job.role}
                        </span>
                        
                        {job.link && (
                            <a 
                                href={job.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors dark:bg-indigo-900/30 dark:text-indigo-300"
                            >
                                Link <Icon name="FaExternalLinkAlt" size={8} />
                            </a>
                        )}
                    </div>
                </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-center">
                <StatusSelect 
                    value={job.status} 
                    onChange={handleStatusChange}
                />
            </td>

            <td className="px-3 py-4 whitespace-nowrap text-center">
                <ActionButton 
                    icon="FaHandshake"
                    variant={job.networking ? "active" : "default"}
                    tooltip={job.networking ? "Networking realizado" : "Marcar como realizado"}
                    onClick={handleNetworking}
                />
            </td>

            <td className="px-3 py-4 whitespace-nowrap text-center">
                <ActionButton 
                    icon="FaTrash"
                    variant="danger"
                    tooltip="Remover candidatura"
                    onClick={handleDelete}
                />
            </td>
        </tr>
    )
});