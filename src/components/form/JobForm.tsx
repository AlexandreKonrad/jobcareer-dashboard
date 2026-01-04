import { useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import { Icon } from "../ui/Icon";
import { cn } from "../../lib/clscTwMerge";
import { type JobFormData, JOB_STATUS } from "../../types/Job";

interface JobFormProps {
    onSubmit: (data: JobFormData) => void
}

export function JobForm({onSubmit}: JobFormProps){
    const [formData, setFormData] = useState<JobFormData>({
        company: '',
        role: '',
        link: '',
        status: JOB_STATUS.APPLIED
    });

    const [errors, setErrors] = useState({
        company: false,
        role: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;

        setFormData(prev => ({...prev, [id]: value}));

        if(errors[id as keyof typeof errors]) setErrors(prev => ({...prev, [id]: false}));
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            company: !formData.company.trim(),
            role: !formData.role.trim()
        };

        if (newErrors.company || newErrors.role) {
            setErrors(newErrors);
            return;
        }

        onSubmit(formData);
        
        setFormData({ 
            company: '', 
            role: '', 
            link: '', 
            status: JOB_STATUS.APPLIED 
        });
    }

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 p-5 gap-y-6 md:gap-2 items-end bg-white dark:bg-gray-800 rounded-lg">
            <div className="space-y-1 relative">
                <Label
                    htmlFor="company"
                    className={cn(
                        "text-xs font-bold", errors.company ? "text-red-500" : ""
                    )}
                >
                    Companhia
                </Label>
                {errors.company && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-medium">Obrigatório</span>}
                <TextInput
                    id="company"
                    placeholder="Ex: Google"
                    value={formData.company}
                    onChange={handleChange}
                    color={errors.company ? "failure" : "gray"}
                    icon={() => <Icon name="FaBuilding" size={14} className={errors.company ? "text-red-500 mt-1" : "mt-1"}/>}
                />
            </div>

            <div className="space-y-1 relative">
                <Label
                    htmlFor="role"
                    className={cn(
                        "text-xs font-bold", errors.role ? "text-red-500" : ""
                    )}
                >
                    Cargo
                </Label>
                {errors.role && <span className=" absolute -bottom-5 left-0 text-xs text-red-500 font-medium">Obrigatório</span>}
                <TextInput
                    id="role"
                    placeholder="Ex: Dev"
                    value={formData.role}
                    onChange={handleChange}
                    color={errors.role ? "failure" : "gray"}
                    icon={() => <Icon name="FaBriefcase" size={14} className={errors.role ? "text-red-500 mt-1" : "mt-1"}/>}
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="link" className="text-xs font-bold">Link</Label>
                <TextInput 
                    id="link" 
                    placeholder="http://..." 
                    value={formData.link} 
                    onChange={handleChange} 
                    icon={() => <Icon name="FaLink" size={14} className="mt-1" />} 
                />
            </div>

            <Button
                type="submit"
                color="indigo"
                className={cn(
                    "h-10.5 transition-all duration-200",
                    "enabled:hover:scale-[1.02] enabled:active:scale-[0.98]",
                    "enabled:hover:shadow-lg enabled:hover:bg-indigo-700",
                    "dark:enabled:bg-indigo-600 dark:enabled:hover:bg-indigo-500",
                    "cursor-pointer focus:ring-0"
                )}
            >
                <div className="flex items-center gap-2">
                    <Icon name="FaPlus" size={14} />
                    <span>Adicionar</span>
                </div>
            </Button>
        </form>
    );
}