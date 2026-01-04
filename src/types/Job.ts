export const JOB_STATUS = {
    APPLIED: "Aplicado",
    INTERVIEW: "Entrevista",
    REJECTED: "Rejeitado",
    OFFER: "Oferta"
} as const;

export type JobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];

export interface Job {
    id: string;
    company: string;
    role: string;
    link?: string;
    status: JobStatus;
    date: string;
    networking: boolean;
}

export type JobFormData = Omit<Job, 'id' | 'date' | 'networking'>;