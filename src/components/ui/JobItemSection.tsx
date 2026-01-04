import { Table } from "flowbite-react";
import { JobItem } from "../layout/JobItem";
import { type Job } from "../../types/Job";

interface JobItemSectionProps {
  jobs: Job[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Job>) => void;
}

export function JobItemSection({ jobs, onDelete, onUpdate }: JobItemSectionProps) {
    if(jobs.length === 0){
        return(
            <div className="flex flex-col items-center justify-center p-10 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">Nenhuma candidatura encontrada.</p>
            </div>
        );
    }
    
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <Table className="w-full text-left bg-white dark:bg-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase text-gray-700 dark:text-gray-300 font-semibold">
                    <tr>
                        <th className="px-6 py-3">Data</th>
                        <th className="px-6 py-3">Empresa / Cargo</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-3 text-center">Networking</th>
                        <th className="px-6 py-3 text-center">Excluir</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {jobs.map((job) => (
                        <JobItem 
                            key={job.id} 
                            job={job} 
                            onDelete={onDelete} 
                            onUpdate={onUpdate} 
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}