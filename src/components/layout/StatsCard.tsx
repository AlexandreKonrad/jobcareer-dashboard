import { Card } from "flowbite-react";
import { cn } from "../../lib/clscTwMerge";

const BORDER_COLORS = {
    blue: "border-blue-500 dark:border-blue-500",
    green: "border-emerald-500 dark:border-emerald-500",
    red: "border-red-500 dark:border-red-500",
    violet: "border-violet-500 dark:border-violet-500",
    indigo: "border-indigo-500 dark:border-indigo-500",
    yellow: "border-yellow-400 dark:border-yellow-400"
} as const;
export type StatsColor = keyof typeof BORDER_COLORS;

interface StatsCardProps{
    title: string;
    count: number;
    color: StatsColor;
}

export function StatsCard({title, count, color}: StatsCardProps) {
  const borderClass = BORDER_COLORS[color] || BORDER_COLORS.blue;

  return (
    <Card className={cn(
      "w-full border-0 border-l-[5px]",
      borderClass
    )}>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {title}
      </p>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {count}
      </h5>
    </Card>
  );
}
