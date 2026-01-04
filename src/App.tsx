import { useState } from "react";

import { DashLayout } from "./components/layout/DashLayout";
import { Header } from "./components/layout/Header";
import { JobFormSection } from "./components/ui/JobFormSection";
import { JobItemSection } from "./components/ui/JobItemSection";
import { StatsCardSection } from "./components/ui/StatsCardSection";
import { AreYouSureModal } from "./components/ui/AreYouSureModal";

import { type Job, type JobFormData } from "./types/Job";
import { useJobManager } from "./hooks/useJobManager"
import { useJobStats } from "./hooks/useJobStats";

export default function App() {
  
  const {
    jobs,
    addJob,
    deleteJob,
    updateJob,
  } = useJobManager();

  const {
    totalDay,
  } = useJobStats(jobs);

  const [jobIdToDelete, setJobIdToDelete] = useState<string | null>(null);

  const handleAddJob = (formData: JobFormData) => {
    addJob(formData);
  }

  const handleRequestDelete = (id: string) => {
    setJobIdToDelete(id);
  };
  const handleCancelDelete = () => {
    setJobIdToDelete(null);
  };
  const handleConfirmDelete = () => {
    if (!jobIdToDelete) return;

    deleteJob(jobIdToDelete);
    setJobIdToDelete(null);
  };

  const handleUpdateJob = (id: string, data: Partial<Job>) => {
    updateJob(id, data);
  }

  return (
    <DashLayout header={<Header totalDay={totalDay}/>}>

      <StatsCardSection jobs={jobs}/>

      <JobFormSection onAddJob={handleAddJob} />
      
      <JobItemSection jobs={jobs} onDelete={handleRequestDelete} onUpdate={handleUpdateJob}/>

      <AreYouSureModal
        show={!!jobIdToDelete} 
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Deseja excluir essa vaga?"
      />
    </DashLayout>
  )
}