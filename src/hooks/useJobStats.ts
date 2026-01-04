import  { useMemo } from 'react';
import { JOB_STATUS, type Job, type JobStatus } from "../types/Job";

export function useJobStats(jobs: Job[]){

    const stats = useMemo(() => {
        const inProgressStatuses: JobStatus[] = [JOB_STATUS.APPLIED, JOB_STATUS.INTERVIEW];
        const endedStatuses     : JobStatus[] = [JOB_STATUS.OFFER, JOB_STATUS.REJECTED]
        const today             = new Date().toDateString();

        return {
            totalApplied: jobs.length,
            totalInProgress: jobs.filter(j => inProgressStatuses.includes(j.status)).length,
            totalInterviews: jobs.filter(j => j.status === JOB_STATUS.INTERVIEW).length,
            totalNetwork: jobs.filter(j => j.networking).length,
            totalEnded: jobs.filter(j => endedStatuses.includes(j.status)).length,
            totalDay: jobs.filter(j => new Date(j.date).toDateString() === today).length
        };
    }, [jobs]);

    return stats;
}