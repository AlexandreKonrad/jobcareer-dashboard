import { useState, useEffect, useCallback } from "react";
import type { Job, JobFormData } from '../types/Job';

const LOCAL_STORAGE_KEY = 'JOBCAREER_DASHBOARD';

export function useJobManager() {

    const [jobs, setJobs] = useState<Job[]>(() => {
        if(typeof window === "undefined") return [];
        try{
            const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch(err){
            console.error("Erro ao ler localStorage", err);
            return [];
        }
    });

    useEffect(() => {
        try{
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jobs));
        } catch(err){
            console.error("Erro ao salvar no localStorage", err);
        }
    }, [jobs]);

    const addJob = useCallback((job: JobFormData) => {
         const newJob: Job = {
            ...job,
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
            networking: false
        }

        setJobs((prev) => {
            return [newJob, ...prev]
        });
    }, []);

    const deleteJob = useCallback((id: string) => {
        setJobs((prev) => {
            return prev.filter((j) => j.id !== id);
        });
    }, []);

    const updateJob = useCallback((id: string, updates: Partial<Job>) => {
        setJobs((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
    }, []);

    const cleanLocalStorage = useCallback(() => {
        try{
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        } catch(err){
            console.error("Erro ao limpar localStorage", err);
        }
    }, []);

    return {jobs, addJob, deleteJob, updateJob, cleanLocalStorage}
}