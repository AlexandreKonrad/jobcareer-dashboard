import { useJobStats } from "../../hooks/useJobStats";
import { type Job } from "../../types/Job";
import { StatsCard } from "../layout/StatsCard";

interface StatsCardSection{
    jobs: Job[];
}

export function StatsCardSection({jobs}: StatsCardSection){
    const {
        totalApplied,
        totalInProgress,
        totalInterviews,
        totalNetwork,
        totalEnded
    } = useJobStats(jobs);

    return (
        <div className="grid w-full gap-5 grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-5">
            <StatsCard 
                title="Total Aplicadas"
                count={totalApplied}
                color="blue"
            />

            <StatsCard
                title="Em Andamento"
                count={totalInProgress}
                color="yellow"
            />

            <StatsCard
                title="Conexões"
                count={totalNetwork}
                color="green"
            />

            <StatsCard
                title="Entrevistas"
                count={totalInterviews}
                color="violet"
            />

            <StatsCard
                title="Encerradas"
                count={totalEnded}
                color="red"
            />
        </div>
    );
}